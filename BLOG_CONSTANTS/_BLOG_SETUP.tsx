import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const CARRIE: IAuthor = {
    name: "Carrie Smith",
    designation: "Journalist",
    bio: "I am a writer and multi-media journalist based in the DC metropolitan area. I specialize in written, visual, and digital storytelling. My pieces feature a diverse range of topics within the lifestyle and entertainment realm.",
    profilePic: "https://media.licdn.com/dms/image/D4E03AQEuyVK8vf0UTg/profile-displayphoto-shrink_200_200/0/1672876561137?e=1681948800&v=beta&t=bm4bOYmTnSwMBaAksDDaxUazZO_vFiGirVMHOYl-zFw",
    social: [
        {
            icon: <AiFillInstagram />,
            link: 'https://carriesmith.work/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/carrie-smith-89b389198/'
        },
    ]
}

export const MACKENZIE: IAuthor = {
    name: "Mackenzie Harwood",
    designation: "IT Analyst",
    bio: "I am a technologist who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries.",
    profilePic: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/frostburgsports.com/images/2017/8/22/Harwood_Mackenzie_web_head_17.jpg",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/mackenzie1'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/mackenzie-harwood-a896ab199/'
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Stereo Punch!';
export const WEBSITE_URL: string = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'Stereo Punch!',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Me',
            path: '/about-us'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'Listen Now',
            path: 'https://carriesmith.work/playlist',
            newTab: true
        },
        {
            label: 'Gallery',
            path: '/gallery'
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
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
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Me',
            path: '/about-us'
        },
        {
            label: 'Listen Now',
            path: 'https://carriesmith.work/playlist',
            newTab: true
        },
        {
            label: 'Gallery',
            path: '/gallery'
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/WebExpe',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Stereo Punch!",
    description: "A multi media music magazine",
    keywords: "Blog, music, magazine, dmv, writter, hot, cool, trending, up and coming, 30 under 30, local, support, ",
    url: WEBSITE_URL,
    author: `${CARRIE.name}, ${MACKENZIE.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/carrie.jpg'
}