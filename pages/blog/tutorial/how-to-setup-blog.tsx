/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../../src/shared/enums";
import { PageLayout, ArticleHeader, Text, List, Image, LinkTo, Seperator, Slider  } from "../../../src/components";

const BlogSetup = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Blog Setup
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    1.  Installing Node, VS Code and downloading the project on your computer.
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li className="">
                        You will need <b>node js</b> installed in your computer <br />
                        You can install node via <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/download/</a> or you can look up any tutorial to install node js on your computer.
                    </li>
                    <li className="">
                        Next You will need a code editor like <b>VsCode / Sublime text</b> to write your blog articles. <br />
                        I will suggest using <b> <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer"> VS Code</a></b>.
                    </li>

                    <li className="">
                        Download / clone the blog template from our github page to a folder on your computer.
                        <a href="https://github.com/nmayur/nextjs-simple-blog-template" className="pl-2 font-semibold" target="_blank" rel="noopener noreferrer">
                            https://github.com/nmayur/nextjs-simple-blog-template
                        </a>
                        <br />
                        If you are using Git you can clone the code or click the <b>use template</b> button to generate your own repo.
                        <Image className="mt-3" src="/images/download-code.png" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />
                    </li>
                    <li className="">
                        Open the blog project in VS code. <br /> Open terminal in VS code using ther <b>Terminal button</b> on tool bar of the VS Code window or press <b>ctrl + ~</b> or <b>cmd + ~</b>.
                    </li>
                    <li className="mb-20">
                        In Terminal run <b>npm install</b>. This will install all the required packages.
                        <Image className="my-4" src="/images/project-install.png" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />

                        After the installation is done run <b>npm start</b> in the terminal, it will start your project on http://localhost:3000/.

                        <br />
                        If you are facing any difficulty, write a comment on our discussion board <b><i><a href="https://github.com/nmayur/nextjs-simple-blog-template/discussions/6" target="_blank" rel="noopener noreferrer">LINK</a></i></b>

                        <br />
                        or write to us at <a href="mailto:webexpe13@gmail.com">webexpe13@gmail.com</a>
                    </li>
                    <li className="mb-20">
                        If everything goes well you will see a demo blog with few demo articles which will walk you through simple tutorials on how to use layouts and different components to write articles.
                    </li>
                </List>
                <Seperator dots />
                <Text subtitle className="mt-10">
                    2.  Setting up authors.
                </Text>
                <Text p >
                    Before we start writing articles we need to setup authors and navbar so that it can be used throughtout the application.
                </Text>
                <Text p >
                    Goto <b>_BLOG_SETUP.tsx</b> in <b>BLOG_CONSTANTS</b> folder. Here you will see some example authors you can refer. <br />
                    The <b>export const</b> is used to make the item/variable available throughtout the project. <br />
                    You can add as many authors you want just make sure you keep the format as shown.
                </Text>
                <Image className="my-5" src="/public/images/tutorials/how-to-setup-author.svg" alt="how to setup authors | webexpe.com" size={ImageSize.DEFAULT} />
                <Seperator />
                <Text subtitle className="mt-10">
                    3.  Setting up Main Navbar and Side Nav.
                </Text>
                <Text p >
                    Goto <b>_BLOG_SETUP.tsx</b> file in <b>BLOG_CONSTANTS</b> folder. Here you will see example to setup your navbar. <br />
                    We have 5 important items to set in navbar setup
                </Text>
                <Image className="my-5" src="/public/images/tutorials/how-to-navbar.svg" alt="how to setup navbar | webexpe.com" size={ImageSize.MEDIUM} />
                <List type={ListType.disc} className="mt-5">
                    <li>
                        <b>type</b><br />
                        We have two types, <span className="bg-grey font-black">NavbarType.DEFAULT | NavbarType.CENTERED</span>
                        <Image className="my-5" src="/public/images/tutorials/how-to-navbar-type.svg" alt="how to setup navbar type | webexpe.com" size={ImageSize.MEDIUM} />
                    </li>
                    <li>
                        <b>logo</b><br />
                        You can pass image or text as logo, max logo image height 40px, <br />
                        If the logo is text : <b> type: LogoType.Text</b> <br />
                        If the logo is image : <b> type: LogoType.IMAGE</b> <br />
                        <Image className="my-5" src="/public/images/tutorials/how-to-set-nav-logo.svg" alt="how to setup navbar logo | webexpe.com" size={ImageSize.MEDIUM} />
                    </li>
                    <li>
                        <b>navLinks</b><br />
                        These are the main nav links. The given below image shows hows to setup primary links for your navbar.
                        <Image className="my-5" src="/public/images/tutorials/how-to-set-navLinks.svg" alt="how to setup navbar logo | webexpe.com" size={ImageSize.DEFAULT} />
                    </li>
                    <li>
                        <b>sideNavLinks</b><br />
                        These are the links that will be visible on the side menu. please make sure you are following the example format which is same as the above image. <br /><br />
                        <b>* note: you can see some extra links like <b>Icons and some Demo Article links</b> these are only visible during development or when you run the project locally on your computer.</b>
                        <br /><br />
                        These are pages with icons and examples of how to use them. <br />
                        These pages also include sample blog articles and the smaple components and how to use it. Open the demo article files in your code editor and you can see how many components are used with porper explanations.
                    </li>
                    <li>
                        <b>socials</b><br />
                        These are for you social media links. The given below image shows hows to setup social media links for your navbar. <br />
                        You can get the icons from <b><LinkTo href="/pages/icons.tsx" passHref={true}>Icons</LinkTo></b>
                        <Image className="my-5" src="/public/images/tutorials/how-to-set-socials.svg" alt="how to setup social icons | webexpe.com" size={ImageSize.MEDIUM} />
                    </li>
                </List>
                <Seperator />
                <Text p >
                    And thats it, you are ready with the basic setup required to kick start your blog.
                </Text>
            </div>
        </PageLayout>
    )
}

export default BlogSetup