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
                    How to Export and deploy blog
                </h1>
                <hr />
                <h2 className="mt-30">
                    1. Export Project.
                </h2>
                <ol>
                    <li className="mb-20">
                        <b>Stop the local server</b> (if running)<br />
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
                <SectionSeperator />
                <h2 className="mt-30">
                    2. Basic firebase deployment tutorial.
                </h2>
                <ol>
                    <li>
                        <b>Goto firebase console</b><br />
                        If you have a gmail account, goto firebase <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">https://firebase.google.com/</a> and goto firebase console.
                    </li>
                    <li>
                        <b>Create a project</b><br />
                        <ArticleImage className="my-20" src="/images/firebase-create-proj.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />

                        Enter project name
                        <ArticleImage className="my-20" src="/images/fb-project-name.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                        Select Conitnue with analytics and enter the contry. and click create project.
                    </li>
                    <li>
                        <b>Firebase Dashboard</b><br />
                        Click on <b>Hosting</b> inside <b>Build</b>
                        <ArticleImage className="my-20" src="/images/select-hosting.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.SMALL} />
                        <ArticleImage className="my-20" src="/images/hosting-gs.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                    </li>
                    <li>
                        <b>Install firebase</b><br />
                        Open terminal in your project folder or VS Code and run <b>npm install -g firebase-tools</b>
                    </li>
                    <li>
                        <b>Firebase Login</b><br />
                        Type <b>firebase login</b> in terminal and hit enter. <br /> Follow the login steps and login into your firebase(google) account
                    </li>
                    <li>
                        <b>Init Firebase and Deploy</b><br />
                        Run <b>firebase init</b> in terminal, move the selection to hosting using arrow keys and select Hosting by hitting space, and then press enter.
                        <ArticleImage className="my-20" src="/images/use-exi.png" alt="nextjs-simple-blog-template" caption="Select Use an Existing Project" size={ArticleImageWidths.DEFAULT} />
                        After you select <b>Use an Existing Project</b> you will see list of all projects in your firebase account, including the one we created now.
                        <ArticleImage className="my-20" src="/images/select-proj.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                        it will ask the following:
                        <ul>
                            <li>
                                <b>What do you want to use as your public directory?</b> here write <b>out</b>
                                <ArticleImage className="my-20" src="/images/select-dir.png" alt="nextjs-simple-blog-template" size={ArticleImageWidths.DEFAULT} />
                            </li>
                            <li>
                                <b>Configure as a single-page app (rewrite all urls to /index.html)</b> here enter <b>N</b> (decline it)
                            </li>
                            <li>
                                <b>Set up automatic builds and deploys with GitHub?</b> here enter <b>N</b> (decline it)
                            </li>
                            <li>
                                <b>File out/index.html already exists. Overwrite? (y/N)</b>  here enter <b>N</b> (decline it)
                            </li>
                        </ul>
                        <ArticleImage className="my-20" src="/images/firebase-complete.png" alt="nextjs-simple-blog-template" caption="Firebase Setup Complete" size={ArticleImageWidths.DEFAULT} />

                        Finally run <b>firebase deploy</b> and your peoject will be deployed on your firebase hosting.
                        <ArticleImage className="my-20" src="/images/fb-deploy.png" alt="nextjs-simple-blog-template" caption="Firebase Deploy" size={ArticleImageWidths.DEFAULT} />
                    </li>
                    <li>
                        <b>* note</b><br />
                        This setup is only to be done once for each project. next time when you create any new article file just run <b>npm run out</b> and after successful export run <b>firebase deploy</b> to deploy updated and new files/articles to hosting.
                    </li>
                </ol>
            </div>
        </HomeLayout>
    )
}

export default HowToDeployBlog