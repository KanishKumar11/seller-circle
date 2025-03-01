// pages/api/submit-form.js
import { sendEmail } from "@/lib/actions/mailer";
import { Client, Databases, ID } from "appwrite";
import { NextResponse } from "next/server";

/**
 * API handler for form submissions
 * - Stores data in Appwrite
 * - Sends notification email
 * - Creates contact in Zoho Bigin CRM
 * - Moves leads into a pipeline
 */
export async function POST(req) {
  try {
    const data = await req.json();
    if (!data?.formType) {
      return NextResponse.json(
        { message: "Form type and data are required" },
        { status: 400 }
      );
    }

    // 1. Initialize Appwrite Client
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_PROJECT_API)
      .setProject(process.env.APPWRITE_PROJECT_ID);

    const databases = new Databases(client);

    // 2. Collection mapping
    const collectionMap = {
      contact: "contact",
      advertising: "advertising",
      footer: "advertising",
      fullServiceManagement: "fullServiceManagement",
      DSP: "dsp",
      strategyAndConsulting: "strategyAndConsulting",
      globalLaunch: "globalLaunch",
      marketplacesExpansion: "marketplacesExpansion",
      "basicA+": "basicA",
      premiumA: "premiumA",
      brandStore: "brandStore",
      brandStory: "brandStory",
      brandVideo: "brandVideo",
      listingImageDesign: "listingImageDesign",
      newsletter: "newsletter",
    };

    const collectionId = collectionMap[data.formType];
    if (!collectionId) {
      return NextResponse.json(
        { message: "Invalid form type" },
        { status: 400 }
      );
    }

    // 3. Remove zohoData if it exists
    const { zohoData, ...appwriteData } = data;

    // 4. Save to Appwrite
    const result = await databases.createDocument(
      "forms",
      collectionId,
      ID.unique(),
      appwriteData
    );

    // 5. Email formatting and sending
    const formatObjectToHTML = (obj, indent = 2) => {
      return Object.entries(obj)
        .map(([key, value]) => {
          if (typeof value === "object" && value !== null) {
            return `<strong>${key}:</strong><br/>${formatObjectToHTML(
              value,
              indent + 2
            )}`;
          }
          return `${"&nbsp;".repeat(
            indent
          )}<strong>${key}:</strong> ${value}<br/>`;
        })
        .join("");
    };

    await sendEmail(formatObjectToHTML(zohoData));

    // 6. Get Zoho access token
    const params = new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: "refresh_token",
      scope: "ZohoBigin.modules.ALL", // Correct scope for Bigin
    });

    const tokenResponse = await fetch(
      "https://accounts.zoho.in/oauth/v2/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      }
    );

    if (!tokenResponse.ok) {
      throw new Error("Token fetch failed");
    }

    const tokenData = await tokenResponse.json();
    const oAuthToken = tokenData.access_token;

    // 7. Prepare Zoho Bigin contact data
    const newZohoData = {
      ...zohoData,
      Lead_Source: "Website", // Tag the lead source
      Last_Name: zohoData.Last_Name || "-",
    };
    console.log(newZohoData);
    // 8. Send to Zoho Bigin (Contact creation)
    try {
      const biginResponse = await fetch(
        "https://www.zohoapis.in/bigin/v2/Contacts",
        {
          method: "POST",
          headers: {
            Authorization: `Zoho-oauthtoken ${oAuthToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [{ ...newZohoData }],
          }),
        }
      );

      const responseText = await biginResponse.text();
      console.log(responseText);
      let biginData;
      let contactId;

      try {
        biginData = JSON.parse(responseText);
        if (biginData.data?.[0]?.code === "MULTIPLE_OR_MULTI_ERRORS") {
          // Extract the duplicate contact ID from the error
          contactId =
            biginData.data[0].details.errors[0].details.duplicate_record.id;
        } else {
          contactId = biginData.data?.[0]?.id;
        }
      } catch (parseError) {
        console.error("Error parsing Bigin response:", responseText);
      }

      console.log("Contact ID:", contactId);

      return NextResponse.json({
        message: "Form submitted successfully",
        appwriteId: result.$id,
        biginContactId: contactId,
      });
    } catch (error) {
      console.error("Submission error:", error);
      return NextResponse.json(
        {
          message: "Form submitted successfully", // Still return success as data is saved in Appwrite
          appwriteId: result.$id,
          error: error.message,
        },
        { status: 200 } // Changed to 200 as it's not a critical error
      );
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { message: "Form submission failed", error: error.message },
      { status: 500 }
    );
  }
}
