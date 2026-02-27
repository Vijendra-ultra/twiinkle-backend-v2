import { betterAuth } from "better-auth";
import { Pool } from "pg";
import config from "./config/config";
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
    },
    baseURL: config.api_domain,
    secret: process.env.BETTER_AUTH_SECRET,
    cookies: {
        // change this flag to true in the case of prod and also set sameSite as none
        secure: false,
        sameSite: "lax",
    },
});
