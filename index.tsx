import React from "react";

export type JamLoginButtonProps = {
    appId: string;
    redirectUrl: string;
}

export const JamLoginButton = ({appId, redirectUrl, ...props}: JamLoginButtonProps & React.HTMLProps<HTMLAnchorElement>) => {
    return <a {...props} href={`https://core.justauth.me/auth?app_id=${appId}&redirect_url=${redirectUrl}`}>
        <img src="https://static.justauth.me/medias/button.png" alt="Se connectecter avec JustAuthMe" />
    </a>
}
