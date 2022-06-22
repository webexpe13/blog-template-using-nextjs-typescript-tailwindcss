/**These are necessary imports / components for the page */
import BlogLayout from "../../../src/layouts/BlogLayouts";
import { ArticleHeaderLayouts, ArticleImageWidths, BlogLayouts, SectionSeperatorTypes, TextAlign } from "../../../src/shared/enums";
import ArticleImage from "../../../src/components/ArticleImage";
import ArticleHeader from "../../../src/components/ArticleHeader";
import Para from "../../../src/components/Para";
import SectionTitle from "../../../src/components/SectionTitle";
import SectionSeperator from "../../../src/components/SectionSeperator";
import QuotedText from "../../../src/components/QuotedText";
import HomeLayout from "../../../src/layouts/HomeLayout";
/**These are necessary imports / components for the page */

const BlogSetup = () => {
    return (
        <HomeLayout>
            <div className='container px-15 pb-20'>
                <h1 className="mt-15 font-sm-18 font-36">
                    Blog Setup
                </h1>
                <hr />
                <h3 className="mt-30">
                    Installing Node, VS Code and downloading the project on you computer.
                </h3>
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
            </div>
        </HomeLayout>
    )
}

export default BlogSetup