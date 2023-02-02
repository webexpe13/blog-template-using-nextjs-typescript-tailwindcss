/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are WebExpe. This is an open source blog template which can help you start a simple static blog.`,
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/YT Logo.png" alt="webexpe.com" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Hi we are WebExpe.
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        This is an open source blog template which can help you start a simple static blog.
                    </Text>

                    <Text p className='text-lg'>
                    I am a writer and multi-media journalist based in the DC metropolitan area. I specialize in written, visual, and digital storytelling. My pieces feature a diverse range of topics within the lifestyle and entertainment realm. <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" className="underline font-bold">here</a>.
                    </Text>

                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Features
                            </Text>
                            <List type={ListType.disc}>
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
                            <Text subtitle className='text-3xl font-medium'>
                                Philosophy
                            </Text>
                            <List type={ListType.disc}>
                                <li>Minimal code</li>
                                <li>SEO-friendly</li>
                                <li>Production-ready</li>
                                <li>Easy to use</li>
                                <li>Sould be faster than Wordpress or any other CMS</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Requirements
                            </Text>
                            <List type={ListType.disc}>
                                <li>Node.js</li>
                                <li>NPM</li>
                                <li>Firebase for hosting</li>
                                <li>VS Code for editing</li>
                                <li>Imp VS Code plugins: <br /> <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">Path Intellisense</a> , <br /> <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noopener noreferrer">Tailwind CSS IntelliSense</a> </li>
                            </List>
                        </div>
                    </div>
                    <Seperator />
                    <Text subtitle className='text-3xl font-medium'>
                        License
                    </Text>
                    <Text p className='text-lg'>
                        Licensed under the MIT License, Copyright © {CURRENT_YEAR}
                    </Text>
                    <Text p className='text-lg'>
                        This is an open source project everyone is welcome to contribute. Feel free to open an issue, if you have any questions or incase you find a bug. Create your versions of this template and help the community, also if you are using our template a little credit will be much appreciated.
                    </Text>
                    <Seperator />
                    <Text p className='text-lg'>
                        Created by <LinkTo href="https://www.linkedin.com/in/rupali-yadav-087bb4112/" external className="font-semibold">Rupali Yadav</LinkTo> and <LinkTo href="https://www.linkedin.com/in/mayur-nalwala/" external className="font-semibold">Mayur Nalwala</LinkTo> from <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="font-medium tracking-widest">WebExpe</a> with ♥
                    </Text>
                    <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer">
                        <img src="/images/bmc.png" className="ml-0" alt="webexpe.com" />
                    </a>
                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                            You can also post any comments on our <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
                        </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs