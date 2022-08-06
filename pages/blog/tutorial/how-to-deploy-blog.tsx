/**These are necessary imports / components for the page */
import { ImageSize, ListType, TextAs } from "../../../src/shared/enums";
import Image from "../../../src/components/ArticleImage";
import SectionSeperator from "../../../src/components/SectionSeperator";
import HomeLayout from "../../../src/layouts/HomeLayout";
import List from "../../../src/components/List";
import Text from "../../../src/components/Text";
/**These are necessary imports / components for the page */

const HowToDeployBlog = () => {
    return (
        <HomeLayout>
            <div className='container px-3 pb-5 mt-[50px]'>
                <Text as={TextAs.title} className="md:text-3xl">
                    How to Export and deploy blog
                </Text>
                <hr />
                <Text as={TextAs.subTitle} className="mt-10">
                    1. Export Project.
                </Text>
                <List type={ListType.bullet} className="mt-5">
                    <li>
                        <b>Stop the local server</b> (if running)<br />
                        Open terminal and press <b>ctrl + C</b> to stop the server.
                        <Image className="mt-5" src="/images/stop-server.png" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />
                    </li>
                    <li>
                        Run <b>npm run out</b><br />
                        In the terminal run <b>npm run out</b>.
                        <Image className="mt-5" src="/images/npm-run-out.png" alt="nextjs-simple-blog-template" size={ImageSize.MEDIUM} />
                        <Image className="mt-5" src="/images/export-done.png" alt="nextjs-simple-blog-template" size={ImageSize.MEDIUM} />
                    </li>
                    <li>
                        After the export is successful. You will see a new folder created named <b>out</b> in you project directory .
                        <Image className="my-5" src="/images/out-folder.png" alt="nextjs-simple-blog-template" size={ImageSize.XS} />
                        This <b>out</b> is the folder you need to deploy on your hosting service.
                    </li>
                </List>
                <SectionSeperator />
                <Text as={TextAs.subTitle} className="mt-10">
                    2. Basic firebase deployment tutorial.
                </Text>
                <List type={ListType.bullet} className="mt-5">
                    <li>
                        <b>Goto firebase console</b><br />
                        If you have a gmail account, goto firebase <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">https://firebase.google.com/</a> and goto firebase console.
                    </li>
                    <li>
                        <b>Create a project</b><br />
                        <Image className="my-5" src="/images/firebase-create-proj.png" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />

                        Enter project name and Select Conitnue with analytics and enter the contry. and click create project.
                    </li>
                    <li>
                        <b>Firebase Dashboard</b><br />
                        Click on <b>Hosting</b> inside <b>Build</b>
                        <Image className="my-5" src="/images/select-hosting.png" alt="nextjs-simple-blog-template" size={ImageSize.SMALL} />
                        <Image className="my-5" src="/images/hosting-gs.png" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />
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
                        <Image className="my-5" src="/images/use-exi.png" alt="nextjs-simple-blog-template" caption="Select Use an Existing Project" size={ImageSize.DEFAULT} />
                        After you select <b>Use an Existing Project</b> you will see list of all projects in your firebase account, including the one we created now.
                        <Image className="my-5" src="/images/select-proj.png" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />
                        it will ask the following:
                        <List type={ListType.number} className="mt-5">
                            <li>
                                <b>What do you want to use as your public directory?</b> here write <b>out</b>
                                <Image className="my-5" src="/images/select-dir.png" alt="nextjs-simple-blog-template" size={ImageSize.DEFAULT} />
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
                        </List>
                        <Image className="my-5" src="/images/firebase-complete.png" alt="nextjs-simple-blog-template" caption="Firebase Setup Complete" size={ImageSize.DEFAULT} />

                        Finally run <b>firebase deploy</b> and your peoject will be deployed on your firebase hosting.
                        <Image className="my-5" src="/images/fb-deploy.png" alt="nextjs-simple-blog-template" caption="Firebase Deploy" size={ImageSize.DEFAULT} />
                    </li>
                    <li>
                        <b>* note</b><br />
                        This setup is only to be done once for each project. next time when you create any new article file just run <b>npm run out</b> and after successful export run <b>firebase deploy</b> to deploy updated and new files/articles to hosting.
                    </li>
                </List>
            </div>
        </HomeLayout>
    )
}

export default HowToDeployBlog