/**These are necessary imports / components for the page */
import { ArticleImageWidths } from "../../../src/shared/enums";
import ArticleImage from "../../../src/components/ArticleImage";
import SectionSeperator from "../../../src/components/SectionSeperator";
import HomeLayout from "../../../src/layouts/HomeLayout";
import Link from "next/link";
/**These are necessary imports / components for the page */

const HowToDeployBlog = () => {
    return (
        <HomeLayout>
            <div className='container px-15 pb-20'>
                <h1 className="mt-15 font-40 font-sm-22">
                    How to Export the blog
                </h1>
                <hr />
                {/* <h2 className="mt-30">
                    1. Export Project.
                </h2> */}
                <ol>
                    <li className="mb-20">
                        <b>Stop the local server</b><br />
                        Open terminal and press <b>ctrl + C</b> to stop the server.
                        <ArticleImage className="mt-20" src="/images/stop-server.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                    </li>
                    <li className="mb-20">
                        Run <b>npm run out</b><br />
                        In the terminal run <b>npm run out</b>.
                        <ArticleImage className="mt-20" src="/images/npm-run-out.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                        <ArticleImage className="mt-20" src="/images/export-done.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                    </li>
                    <li className="mb-20">
                        After the export is successful. You will see a new folder created named <b>out</b> in you project directory .                        
                        <ArticleImage className="my-20" src="/images/out-folder.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.SMALL} />
                        This <b>out</b> is the folder you need to deploy on your hosting service.
                    </li>
                </ol>
            </div>
        </HomeLayout>
    )
}

export default HowToDeployBlog