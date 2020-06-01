import React from "react";

export type JamLoginButtonProps = {
    appId: string;
    redirectUrl: string;
    locale?: "fr" | "en";
}

const i18n = {
    en: {
        login: "Login with JustAuthMe"
    },
    fr: {
        login: "Se connecter avec JustAuthMe"
    }
}

export const JamLoginButton = ({appId, redirectUrl, locale: setLocale, ...props}: JamLoginButtonProps & React.HTMLProps<HTMLAnchorElement>) => {
    const locale = setLocale || "en";
    const translations = i18n[locale];
    return <a {...props} href={`https://core.justauth.me/auth?app_id=${appId}&redirect_url=${redirectUrl}`}>
        <img height={40.5} src={`https://static.justauth.me/medias/button_${locale}_x2.png`} alt={translations.login} />
    </a>
}
