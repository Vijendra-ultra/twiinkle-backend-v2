const verificationEmailTemplate = (LINK: string): string => `
<!DOCTYPE html>
<html>

<body style="margin:0;padding:0;background-color:#0f172a;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;">
        <tr>
            <td align="center" style="padding:60px 20px;">

                <table width="100%" cellpadding="0" cellspacing="0"
                    style="max-width:600px;background-color:#ffffff;border-radius:16px;padding:50px 40px;box-shadow:0 10px 40px rgba(0,0,0,0.25);">

                    
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#0f172a;
                       font-size:28px;
                       font-weight:700;
                       padding-bottom:20px;">
                            Welcome to Twiinkle 
                        </td>
                    </tr>

                   
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#475569;
                       font-size:16px;
                       line-height:1.7;
                       padding:0 10px;">
                            You're almost there.  
                            Please verify your email address to activate your account.
                        </td>
                    </tr>

                  
                    <tr>
                        <td align="center" style="padding:35px 0;">
                            <a href="${LINK}" target="_blank" style="display:inline-block;
                        padding:14px 32px;
                        font-size:16px;
                        font-family:Arial,Helvetica,sans-serif;
                        border-radius:50px;
                        background-color:#ffb703;
                        color:#222;
                        text-decoration:none;
                        font-weight:bold;">
                                Verify
                            </a>
                        </td>
                    </tr>

                   
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#64748b;
                       font-size:14px;
                       line-height:1.6;
                       padding:0 10px;">
                            We can't wait to have you on board!
                        </td>
                    </tr>

                    
                    <tr>
                        <td style="padding:30px 0;">
                            <hr style="border:none;height:1px;background-color:#e2e8f0;">
                        </td>
                    </tr>

                    
                    <tr>
                        <td align="center" style="font-family:Arial,Helvetica,sans-serif;
                       color:#94a3b8;
                       font-size:12px;
                       line-height:1.6;">
                            Need help?  
                            <a href="mailto:vijendravasre66@gmail.com"
                                style="color:#475569;text-decoration:underline;">
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
export default verificationEmailTemplate;
