import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iSEO } from "../src/shared/interfaces";

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


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME = 'Next Js Blog Template';
export const WEBSITE_URL = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV = {
    type: NavbarType.CENTERED,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'Next Blog',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown'
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/nmayur/nextjs-simple-blog-template',
            newTab: true
        },
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
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
            label: 'About Us',
            path: '/about-us'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/nmayur/nextjs-simple-blog-template',
            newTab: true
        },
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <i className="icon-F" />
        },
        {
            link: 'https://www.instagram.com/',
            icon: <i className="icon-2-I" />
        },
        {
            link: 'https://twitter.com/',
            icon: <i className="icon-L" />
        },
    ]
}

export const DEFAULT_SEO : iSEO = {
    title: "Nextjs simple blog template",
    description: "A simple blog template using NextJS and Typescript.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${MAYUR.name}, ${RUPALI.name}`,
    twitterHandle: '@mayur_nalwala',
    ogImage: '/public/images/og-image.jpg'
}