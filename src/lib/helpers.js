import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import i18nIsoCountries from "i18n-iso-countries";

export function isoToEmoji(code) {
  return code
    .split("")
    .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
    .map((emojiCode) => String.fromCodePoint(emojiCode))
    .join("");
}

export function getCountriesOptions() {
  const countries = getCountries();

  // Type inference is not working here
  const options = countries
    .map((country) => ({
      value: country,
      label: i18nIsoCountries.getName(country.toUpperCase(), "en", {
        select: "official",
      }),
      indicatif: `+${getCountryCallingCode(country)}`,
    }))
    .filter((option) => option.label);

  return options;
}
export function replaceNumbersWithZeros(phoneNumber) {
  // Split the phone number into country code and the rest of the number
  const [countryCode, ...restOfNumber] = phoneNumber.split(/\s+/);

  // Replace digits in the rest of the number with zeros
  const replacedRestOfNumber = restOfNumber
    .map((num) => num.replace(/\d/g, "0"))
    .join(" ");

  // Concatenate the country code and the replaced number
  const replacedPhoneNumber = countryCode + " " + replacedRestOfNumber;

  return replacedPhoneNumber;
}
