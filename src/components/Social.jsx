import React from "react"

const SocialShare = [
    {
        iconName: "facebook",
        link: "https://www.facebook.com/",
    },
    {
        iconName: "github",
        link: "https://github.com/"
    },
    {
        iconName: "instagram",
        link: "https://www.instagram.com/",
    },
    {
        iconName: "linkedIn",
        link: "https://linkedin.com/"
    },
];

const Social = () => {
    return (
        <>
            <ul className="social">
                {SocialShare.map((val, i) => (
                    <li key={i}>
                        <a href={`${val.link}`} target="_blank" rel="noreferrer">
                            <img
                                className="svg"
                                src={`/assets/${val.iconName}.svg`}
                                alt="social"
                            ></img>
                        </a>
                    </li>
                ))}
            </ul>
            {/* END SOCIAL */}
        </>
    );
};

export default Social;