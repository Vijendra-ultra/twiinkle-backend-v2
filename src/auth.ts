import { betterAuth } from "better-auth";
import { Pool } from "pg";
import config from "./config/config";
import sesEmailSender from "./middlewares/sesEmailSender";
import verificationEmailTemplate from "./email-templates/verificatioEmail";
import { passwordResetEmailTemplate } from "./email-templates/resetPassword";
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "app_user",
    password: "BahubaliJaiHo@8792239654",
    database: "app_db",
    ssl: false,
});
export const auth = betterAuth({
    database: pool,
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url, token }, req) => {
            void sesEmailSender(
                user.email,
                "Reset your password",
                passwordResetEmailTemplate(url),
            );
        },
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            void sesEmailSender(
                user.email,
                "Verify your mail",
                verificationEmailTemplate(url),
            );
        },
    },
    baseURL: config.api_domain,
    secret: process.env.BETTER_AUTH_SECRET,
    cookies: {
        // change this flag to true in the case of prod and also set sameSite as none
        secure: false,
        sameSite: "lax",
    },
});
