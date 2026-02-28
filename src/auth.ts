import { APIError, betterAuth } from "better-auth";
import { Pool } from "pg";
import config from "./config/config";
import sesEmailSender from "./middlewares/sesEmailSender";
import verificationEmailTemplate from "./email-templates/verificatioEmail";
import { passwordResetEmailTemplate } from "./email-templates/resetPassword";
import { createAuthMiddleware } from "better-auth/api";
import { signInSchema, signUpSchema } from "./schemas/auth.schema";

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
            await sesEmailSender(
                user.email,
                "Reset your password",
                passwordResetEmailTemplate(url),
            );
        },
    },
    hooks: {
        before: createAuthMiddleware(async (ctx) => {
            switch (ctx.path) {
                case ("/sign-up/email"): {
                    const res = signUpSchema.safeParse(ctx.body);
                    if (!res.success) {
                        throw new APIError("BAD_REQUEST", {
                            message: "Data is broken",
                        });
                    }
                    break;
                }
                case ("/sign-in/email"): {
                    const res = signInSchema.safeParse(ctx.body);
                    if (!res.success) {
                        throw new APIError("BAD_REQUEST", {
                            message: "Data is broken",
                        });
                    }
                    break;
                }
            }
        }),
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            console.log("Email verification fired");
            const res = await sesEmailSender(
                user.email,
                "Verify your mail",
                verificationEmailTemplate(url),
            );
            console.log(res);
        },
    },
    baseURL: config.api_domain,
    secret: config.better_auth_secret,
    cookies: {
        // change this flag to true in the case of prod and also set sameSite as none
        secure: false,
        sameSite: "lax",
    },
});
