import SectionSeperator from "../src/components/SectionSeperator";
import { TextAs, ImageSize, ListType } from "../src/shared/enums";
import HomeLayout from "../src/layouts/HomeLayout";
import Text from "../src/components/Text";
import Image from "../src/components/ArticleImage";
import List from "../src/components/List";

const AboutUs = () => {
    const year = new Date().getFullYear()

    const SEO = {
        title: "File and Folder Structure for Web Development | WebExpe | Mayur Nalwala",
        description:
            "A simple folder structure for web development projects with web tech like HTML, CSS, JavaScript, jQuery, Bootstrap 4, SCSS.",
        additionalMetaTags: [
            {
                property: "keywords",
                content:
                    "HTML, CSS, JavaScript, jQuery, Bootstrap 4, SCSS, folder structure, web development, web development folder structure, web design folder structure, folder structure for web development, web development folder structure",
            }, {
                property: "og:description",
                content:
                    "A simple folder structure for web development projects with web tech like HTML, CSS, JavaScript, jQuery, Bootstrap 4, SCSS.",
            }, {
                property: "twitter:description",
                content:
                    "A simple folder structure for web development projects with web tech like HTML, CSS, JavaScript, jQuery, Bootstrap 4, SCSS.",
            }, {
                property: "al:web:url",
                content:
                    "https://webexpe.com/blog/folder-structure-for-web-development",
            },
        ],
        openGraph: {
            type: "website",
            locale: "en_IN",
            url: "https://webexpe.com/",
            site_name: "WebExpe | Web development made simple.",
            images: [
                {
                    url: `https://webexpe.com/images/folder-structure-intro.jpeg`,
                    width: 1200,
                    height: 630,
                    alt: "WebExpe | Web development made simple.",
                },
            ],
        },
    }

    return (
        <HomeLayout>
            <section className='container px-3 pb-20 mt-10'>
                <div className="">
                    <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="block rounded-lg w-[15%] overflow-hidden">
                        <Image src="/public/images/YT Logo.png" size={ImageSize.DEFAULT} alt="webexpe.com" />
                    </a>
                    <Text as={TextAs.title} className='text-3xl mb-5 mt-10'>
                        Hi we are WebExpe and this blog template is an opensource project which can help you start a simple static blog.
                    </Text>
                    <Text as={TextAs.p} className='text-lg'>
                        The idea was to start a blog or create a template with as little investment as possible. <br />In this template we have used Next.js SSG to create static HTML files which can be hosted on firebase or any static site hosting service. <br />
                        There is also options like vercel for hosting Next.js dynamic webistes but we wanted this template to be easy to use for any non techie person too, so we explored the option of static site generation. <br /><br />
                        If you have a github account you can clone the project or use it as a template or else you can simply download the code. 
                    </Text>

                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text as={TextAs.subTitle} className='text-3xl font-medium'>
                                Features
                            </Text>
                            <List type={ListType.bullet}>
                                <li>Minimilist Template</li>
                                <li>Light and Dark theme</li>
                                <li>Default and Centered Layout</li>
                                <li>Maximize lighthouse score</li>
                                <li>Privacy Policy, Terms and Conditions page template</li>
                                <li>Integrate with <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS </a></li>
                                <li>Type checking TypeScript</li>
                                <li>SEO metadata, Open Graph tags with Next SEO</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text as={TextAs.subTitle} className='text-3xl font-medium'>
                                Philosophy
                            </Text>
                            <List type={ListType.bullet}>
                                <li>Minimal code</li>
                                <li>SEO-friendly</li>
                                <li>Production-ready</li>
                                <li>Easy to use</li>
                                <li>Sould be faster than Wordpress or any other CMS</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text as={TextAs.subTitle} className='text-3xl font-medium'>
                                Requirements
                            </Text>
                            <List type={ListType.bullet}>
                                <li>Node.js</li>
                                <li>NPM</li>
                                <li>Firebase for hosting</li>
                                <li>VS Code for editing</li>
                                <li>Imp VS Code plugins: <br /> <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">Path Intellisense</a> , <br /> <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noopener noreferrer">Tailwind CSS IntelliSense</a> </li>
                            </List>
                        </div>
                    </div>
                    <SectionSeperator />
                    <Text as={TextAs.subTitle} className='text-3xl font-medium'>
                        License
                    </Text>
                    <Text as={TextAs.p} className='text-lg'>
                        Licensed under the MIT License, Copyright © {year}
                    </Text>
                    <Text as={TextAs.p} className='text-lg'>
                        This project is <b>opensouce</b>. Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug, create your versions of this template and help the community, also if you are using our template a little credit will be much appreciated.
                    </Text>
                    <SectionSeperator />
                    <Text as={TextAs.p} className='text-lg'>
                        Made with ♥ by <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="font-medium tracking-widest">WebExpe</a>
                    </Text>
                    <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer">
                        <Image src="/public/images/bmc.png" size={ImageSize.XS} className="ml-0" alt="webexpe.com" />
                    </a>
                    <Text as={TextAs.p} className='text-lg mt-5'>
                        For any queries and doubts please feel free to write us at <u><i>webexpe13@gmail.com</i></u> or drop a comment on our github discussions <a href="https://github.com/nmayur/nextjs-simple-blog-template/discussions" target="_blank" rel="noopener noreferrer"><u><i>github.com/nmayur/nextjs-simple-blog-template/discussions</i></u></a>
                    </Text>
                </div>
            </section>
        </HomeLayout>
    )
}

export default AboutUs