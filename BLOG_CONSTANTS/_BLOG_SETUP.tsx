import { ContainerWidths, NavbarType } from "../src/shared/enums";
import { IAuthor } from "../src/shared/interfaces";

export const MAYUR: IAuthor = {
    name: "Mayur Nalwala",
    designation: "Software Engineer at Paytm",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
}

export const RUPALI: IAuthor = {
    name: "Rupali Yadav",
    designation: "IT Analyst at TCS",
    github: "",
    linkedIn: "",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
}


export const PRIMARY_NAV = {
    // max size 40x40px for default and max width 80px for centered or text
    logo: '',
    type: NavbarType.DEFAULT,
    width: ContainerWidths.DEFAULT,
    showThemeSwitch: true,
    showSearch: true,
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About',
            path: '/'
        },
        {
            // for categoriest dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown'
        },
        {
            label: 'Contact',
            path: '/'
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