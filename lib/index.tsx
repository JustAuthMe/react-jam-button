import React from "react";

export type JamLoginButtonProps = {
    appId: string;
    callback: string;
    lang?: "fr" | "en";
    size: "small" | "regular" | "large";
    shape: "squared" | "rounded";
}

const strings = {
    'en': 'Login with %s',
    'fr': 'Connexion avec %s'
};

const t = (lang: keyof typeof strings, param: JSX.Element) => {
    const stringParts = strings[lang].split('%s');
    return <>
        {stringParts[0]}
        {param}
        {stringParts[1]}
    </>
}

/**
 * JustAuthMe Login button SDK
 * Author: Peter Cauty
 * Release date: 2020-02-17
 * License: MIT
 */

export const JamLoginButton = ({size, lang, shape, appId, callback}: JamLoginButtonProps) => {
    if (appId === null || callback === null) {
        return <pre>JustAuthMe button error: missing app ID or callback URL</pre>;
    }

    const sizes = {
        'regular': '',
        'small': 'jam-btn-small',
        'large': 'jam-btn-large'
    };
    const langs = {
        'fr': 'fr',
        'en': 'en'
    };
    const shapes = {
        'squared': '',
        'rounded': 'jam-btn-rounded'
    };

    let language = lang || '';
    if (language === '' || !(language in langs)) {
        language = navigator.language || navigator.userLanguage || "";
        language = language.substr(0, 2).toLowerCase();

        if (!(language in langs)) {
            language = 'en';
        }
    }
    if (!(size in sizes)) {
        size = 'regular';
    }
    if (!(shape in shapes)) {
        shape = 'squared';
    }

    return <a href={`https://core.justauth.me/auth?app_id=&${appId}redirect_url=${callback}`}
              className={`jam-btn ${sizes[size]} ${shapes[shape]}`}>
        <div className="jam-btn-content">
            <div className="jam-btn-logo">
                <img src="https://static.justauth.me/medias/2_WHITE.png" alt="JAM"/>
            </div>
            <div className="jam-btn-text">
                {t(language as keyof typeof langs,
                    <span className="jam-btn-brand">
                        <span className="jam-btn-bold">JustAuth</span>
                        <span className="jam-btn-thin">Me</span>
                    </span>
                )}
            </div>
        </div>
    </a>;
};
