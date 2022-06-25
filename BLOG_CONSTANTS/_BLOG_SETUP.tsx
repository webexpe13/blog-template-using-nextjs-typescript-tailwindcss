import { ContainerWidths, NavbarType } from "../src/shared/enums";
import { IAuthor } from "../src/shared/interfaces";

/**
 * EXAMPLE AUTHOR
 * In this only name is required, and rest all are optional
 * 
 * export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
    social: [
        {
            icon: <i className="icon-2-Z font-32" />,
            link: 'https://github.com/'
        },
        {
            icon: <i className="icon-I font-36" />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const MAYUR: IAuthor = {
    name: "Mayur Nalwala",
    designation: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "https://robohash.org/1f2fb9642c825da07a83e5cac078e838?set=set3&bgset=&size=200x200",
    social: [
        {
            icon: <i className="icon-2-Z font-32" />,
            link: 'https://github.com/'
        },
        {
            icon: <i className="icon-I font-36" />,
            link: 'https://www.linkedin.com/'
        },
    ]
}

export const RUPALI: IAuthor = {
    name: "Rupali Yadav",
    designation: "IT Analyst",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "https://gravatar.com/avatar/8fab154171e299e9b8fe24305267a8fd?s=200&d=robohash&r=r",
}


/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV = {
    // max size 40x40px for default and 40x80px for centered or text
    type: NavbarType.DEFAULT,
    width: ContainerWidths.DEFAULT,
    logo: 'Next Blog',
    showThemeSwitch: true,
    showSearch: true,
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github',
            path: 'https://github.com/nmayur/nextjs-simple-blog-template',
            newTab: true
        },
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger meny icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github',
            path: 'https://github.com/nmayur/nextjs-simple-blog-template',
            newTab: true
        },
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <i className="icon-F font-24" />
        },
        {
            link: 'https://www.instagram.com/',
            icon: <i className="icon-2-I font-24" />
        },
        {
            link: 'https://twitter.com/',
            icon: <i className="icon-L font-24" />
        },
    ]
}

export const DEFAULT_SEO = {
    title: "Nextjs simple blog template",
    description:
        "A simple blog template using NextJS and Typescript.",
    additionalMetaTags: [
        {
            property: "keywords",
            content:
                "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
        },
    ],
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://nextjs-simple-blog-template.web.app/",
        site_name: "nextjs-simple-blog-template",
        images: [
            {
                url: `/images/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "nextjs-simple-blog-template",
            },
        ],
    },
};