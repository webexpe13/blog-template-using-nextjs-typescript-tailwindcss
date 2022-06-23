/**These are necessary imports / components for the page */
import { ArticleImageWidths } from "../../../src/shared/enums";
import ArticleImage from "../../../src/components/ArticleImage";
import SectionSeperator from "../../../src/components/SectionSeperator";
import HomeLayout from "../../../src/layouts/HomeLayout";
import Link from "next/link";
/**These are necessary imports / components for the page */

const BlogSetup = () => {
    return (
        <HomeLayout>
            <div className='container px-15 pb-20'>
                <h1 className="mt-15 font-40 font-sm-22">
                    Blog Setup
                </h1>
                <hr />
                <h2 className="mt-30">
                    1.  Installing Node, VS Code and downloading the project on you computer.
                </h2>
                <ol>
                    <li className="mb-20">
                        You will need <b>node js</b> installed in your computer <br />
                        You can install node via <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/download/</a> or you can look up any tutorial to install node js on you computer.
                    </li>

                    <li className="mb-20">
                        Next You will need a code editor like <b>VsCode / Sublime text</b> to write your blog articles. <br />
                        I will suggest using <b> <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer"> VS Code</a></b>.
                    </li>

                    <li className="mb-20">
                        Download / clone the blog template from our github page to a folder on you computer.
                        <a href="https://github.com/nmayur/nextjs-simple-blog-template" className="pl-10" target="_blank" rel="noopener noreferrer">
                            https://github.com/nmayur/nextjs-simple-blog-template
                        </a>
                        <br />
                        If you are using Git you can clone the code or click the <b>use template</b> button to generate your own repo.
                        <ArticleImage className="mt-20" src="/images/download-code.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                    </li>
                    <li className="mb-20">
                        Open the blog project in VS code. <br /> Open terminal in VS code using ther <b>Terminal button</b> on tool bar of the VS Code window or press <b>ctrl + ~</b> br <b>cmd + ~</b>.
                    </li>
                    <li className="mb-20">
                        In Terminal run <b>npm install</b>. This will install all the required packages.
                        <ArticleImage className="my-20" src="/images/project-install.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />

                        After the project is isntalled run <b>npm start</b> in the terminal, it will start your project on http://localhost:3000/.

                        <br />
                        If facing any difficulty write a comment on our discussion board <b><i><a href="https://github.com/nmayur/nextjs-simple-blog-template/discussions/6" target="_blank" rel="noopener noreferrer">LINK</a></i></b>

                        <br />
                        or write to us at <a href="mailto:webexpe13@gmail.com">webexpe13@gmail.com</a>
                    </li>
                    <li className="mb-20">
                        If everything goes well you will see a demo blog with few demo articles which will walk you thru simple tutorials on how to use layouts and different components to write articles.
                    </li>
                </ol>
                <SectionSeperator />
                <h2 className="mt-30">
                    2.  Setting up authors.
                </h2>
                <p>
                    Before we start writing articles we need to setup authors and navbar so that it can be used throughtout the application.
                </p>
                <p>
                    Goto <b>_BLOG_SETUP.tsx</b> in <b>BLOG_CONSTANTS</b> folder. Here you will see some example authors you can refer. <br />
                    The <b>export const</b> is used to make the item/variable available throughtout the project. <br />
                    <ArticleImage className="my-20" src="/images/author-example.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                    You can add as many authors you want just make sure you keep the format as shown.
                </p>
                <SectionSeperator />
                <h2 className="mt-30">
                    3.  Setting up Main Navbar and Side Nav.
                </h2>
                <p>
                    Goto <b>_BLOG_SETUP.tsx</b> in <b>BLOG_CONSTANTS</b> folder. Here you will see some example navbar you can refer. <br />
                </p>
                <ol>
                    <li className="mb-20">
                        <b>type</b><br />
                        We have two types, <span className="bg-grey font-black">NavbarType.DEFAULT | NavbarType.CENTERED</span>
                    </li>
                    <li className="mb-20">
                        <b>width</b><br />
                        We have two with option, <span className="bg-grey font-black">ContainerWidths.DEFAULT | ContainerWidths.LARGE</span>
                    </li>
                    <li className="mb-20">
                        <b>logo</b><br />
                        It can be a text or image. If you are using image make sure its of <b>40 x 40 px</b> for default type and max <b>40 x 80 px or 40 x 40px</b> for centered type
                    </li>
                    <li className="mb-20">
                        <b>showThemeSwitch</b><br />
                        You can set it either <b>true</b> or <b>false</b>. This will show and hide the theme toggle button on the main top navbar.
                    </li>
                    <li className="mb-20">
                        <b>showSearch</b><br />
                        You can set it either <b>true</b> or <b>false</b>. This will show and hide the search button on the main top navbar.
                    </li>
                    <li className="mb-20">
                        <b>navLinks</b><br />
                        These are the main nav links. please make sure you are following the example format.
                    </li>
                    <li className="mb-20">
                        <b>sideNavLinks</b><br />
                        These are the links that will be visible on the side menu. please make sure you are following the example format. <br /><br />
                        <i>* note: you can see some extra links like <b>Icons, Styles Doc, and some Demo Article links</b> these are only visible during development or when you run the project locally on your computer.</i>
                        <br /><br />
                        <i>
                            These are pages with styles , icons and examples of how to use them. <br />
                            These pages also include sample blog articles and the smaple components and how to use it. Open the demo article files in your code editor and you can see how many components are used with porper explanations.
                        </i>
                    </li>
                    <li className="mb-20">
                        <b>socials</b><br />
                        These are for teh social media icons. please make sure you are following the example format. <br />
                        You can get the icons from <b><Link href="/icons" passHref={true}>Icons</Link></b>
                    </li>
                </ol>
                <SectionSeperator />
                <h2 className="mt-30">
                    4.  Writing First Article.
                </h2>
                <i>
                    *note: All the files you will create or interact with are <br />
                </i>
                <ul>
                    <li className="mb-20"><b>BLOG_CONSTANTS Folder and its files</b></li>
                    <li className="mb-20"><b>blog Folder inside pages</b> you will create all the article files in this folder <br /></li>
                    <li className="mb-20">You will add all the images to use in <b>public - images folder</b></li>
                </ul>
                <hr />
                <ol>
                    <li className="mb-20">
                        <b>Making entry in ARTICLES_LIST on _ARTICLES_LIST.tsx file</b>
                        <ArticleImage className="my-20" src="/images/article-entry-example.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                        In the <b>ARTICLES_LIST</b> array copy paste the sample article object.
                    </li>
                    <li className="mb-20">
                        <b>path</b><br />
                        This is path of the article file. <br />
                        Copy a demo file example demo-article-default-layout in blog folder and rename the file to you article name. <br /> <i>* note: make sure all the words are in lowercase and seperated bt hyphen, this is good for google SEO. </i><br />
                        <span className="bg-grey font-black px-10 py-5 my-5 d-block">
                            example: <b>how-to-make-cake.tsx</b> so the path will be <b>'/blog/how-to-make-cake'</b>
                        </span>
                    </li>
                    <li className="mb-20">
                        <b>featureArticle</b><br />
                        You can pass <b>true or false or you can not add this in the object too</b>
                        If true the article card will be of full width.
                        <ArticleImage className="my-20" src="/images/feature-article-example.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                    </li>
                    <li className="mb-20">
                        <b>preview</b><br />
                        This will display the details in main home page and artcile header in article page <br />

                        <ul>
                            <li>
                                <b>author</b><br />
                                Paste the author variable imported from _BLOG_SETUP
                            </li>
                            <li>
                                <b>date</b><br />
                                Write the article date in quotes
                            </li>
                            <li>
                                <b>articleTitle</b><br />
                                Write the article title in quotes.
                            </li>
                            <li>
                                <b>tags</b><br />
                                Write tags and seperate with commas.
                            </li>
                            <li>
                                <b>thumbnail</b><br />
                                Save the image file in public-images folder and paste the image path.
                            </li>
                            <li>
                                <b>thumbnail</b><br />
                                Save the image file in public-images folder and paste the image path. This will be displayed in article cards on home page.
                            </li>
                            <li>
                                <b>category</b><br />
                                If the article in under some category, write the category name.
                            </li>
                        </ul>
                    </li>

                    <li className="mb-20">
                        <b>seo</b><br />
                        SEO details for your article page.<br />
                        The example contains basic SEO setup, you can refer examples on <a href="https://github.com/garmeeh/next-seo#add-seo-to-page" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/next-seo</a> for more tags and info to add. <br />
                        More tutorials and examples : <br />
                        <a href="https://blog.avneesh.tech/next-seo-a-better-way-to-manage-seo-for-nextjs" target="_blank" rel="noopener noreferrer">https://blog.avneesh.tech/next-seo-a-better-way-to-manage-seo-for-nextjs</a> <br />
                        <a href="https://www.garymeehan.ie/blog/seo-in-nextjs-with-next-seo" target="_blank" rel="noopener noreferrer">https://www.garymeehan.ie/blog/seo-in-nextjs-with-next-seo</a>
                    </li>
                </ol>
            </div>
        </HomeLayout >
    )
}

export default BlogSetup