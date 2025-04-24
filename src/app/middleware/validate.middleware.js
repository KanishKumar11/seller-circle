import JWT from 'jsonwebtoken'

const secret = process.env.SECRET

export function createToken(admin) {
    const payload = {
        id: admin._id,
        name: admin.name,
        email: admin.email,
       
        role: admin.authType 
    }

    const token = JWT.sign(payload, secret, { expiresIn: "60d" })
    return token
}

export function validateToken(token) {
    return JWT.verify(token, secret)
}

