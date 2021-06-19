import React from "react"

const SocialShare = [
    {
        iconName: "github",
        link: "https://github.com/jushita"
    },
    {
        iconName: "linkedIn",
        link: "https://www.linkedin.com/in/jushita/"
    },
    {
        iconName: "facebook",
        link: "https://www.facebook.com/jushita/",
    },
    {
        iconName: "instagram",
        link: "https://www.instagram.com/jushitaa/",
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