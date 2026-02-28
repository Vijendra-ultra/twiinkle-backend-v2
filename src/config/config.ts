import dotenv from "dotenv";
dotenv.config();
interface config {
    api_domain: string;
    port: number;
    website_domain: string;
    aws_access_key_id: string | null;
    aws_access_secret_key: string | null;
    ses_from_email: string;
    better_auth_secret: string;
}
const config: config = {
    api_domain: process.env.WEBSITE_DOMAIN || "http://localhost:3000",
    port: Number(process.env.PORT) || 3000,
    website_domain: process.env.WEBSITE_DOMAIN || "http://localhost:3000",
    aws_access_key_id: process.env.AWS_ACCESS_KEY_ID!,
    aws_access_secret_key: process.env.AWS_ACCESS_SECRET_KEY!,
    ses_from_email: "hello@twiinkle.xyz",
    better_auth_secret: process.env.BETTER_AUTH_SECRET!,
};
export default config;
