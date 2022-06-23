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

export const RUPALI: IAuthor = {
    name: "Rupali Yadav",
    designation: "IT Analyst",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
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