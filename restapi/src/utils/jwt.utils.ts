import jwt from "jsonwebtoken";

export function decodeJWT(token: string) {
    try {
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        return { valid: true, expired: false, decoded }
    } catch (error) {
        console.log({ error });
        return {
            valid: false,
            expired: true,
            decoded: null
        }
    }
}