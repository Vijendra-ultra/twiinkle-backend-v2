export const passwordResetEmailTemplate = (LINK: string): string => `
<!DOCTYPE html>
<html>

<body style="margin:0;padding:0;background-color:#f5f7fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fa;">
        <tr>
            <td align="center" style="padding:60px 20px;">

                <table width="100%" cellpadding="0" cellspacing="0"
                    style="max-width:600px;background-color:#ffffff;border-radius:12px;padding:50px 40px;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

                    <!-- Title -->
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#111111;
                       font-size:26px;
                       font-weight:700;
                       padding-bottom:20px;">
                            Password Reset for Twiinkle
                        </td>
                    </tr>

                    <!-- Main Text -->
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#333333;
                       font-size:16px;
                       line-height:1.7;
                       padding:0 10px;">
                           We received a request to reset your password.
                           Click the button below to continue.
                        </td>
                    </tr>

                    <!-- Button -->
                    <tr>
                        <td align="center" style="padding:35px 0;">
                            <a href="${LINK}" target="_blank" style="display:inline-block;
                        padding:14px 34px;
                        font-size:16px;
                        font-family:Arial,Helvetica,sans-serif;
                        border-radius:50px;
                        background-color:#111111;
                        color:#ffffff;
                        text-decoration:none;
                        font-weight:600;
                        letter-spacing:0.3px;">
                                Reset Password
                            </a>
                        </td>
                    </tr>

                    <!-- Secondary Text -->
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#555555;
                       font-size:14px;
                       line-height:1.6;
                       padding:0 10px;">
                           If you didn’t request this, you can safely ignore this email.
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#888888;
                       font-size:12px;
                       padding-top:35px;">
                            Don’t reply to this email. Facing any issues?
                            <a href="mailto:vijendravasre66@gmail.com" 
                               style="color:#111111;text-decoration:underline;">
                                Contact support
                            </a>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>
</body>

</html>`;
