/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            {/* Replace the below content with your content */}
            This is a demo file for your first article, you can copy code / structure of this file into new file and replace content with your content to create new articles.
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                You can also post any comments on our <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;