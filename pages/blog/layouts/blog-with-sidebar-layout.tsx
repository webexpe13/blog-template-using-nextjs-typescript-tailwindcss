/**These are necessary imports / components for the page */
import PageLayout from "../../../src/layouts/PageLayouts";
import { ImageSize } from "../../../src/shared/enums";
import Image from "../../../src/components/ArticleImage";
import ArticleHeader from "../../../src/components/ArticleHeader";
import Seperator from "../../../src/components/Seperator";
import Text from "../../../src/components/Text";
/**These are necessary imports / components for the page */

const Article = () => {
    return (
        // PageLayout is the wrapper which will display Centered or with sidebar layout
        <PageLayout blogwithsidebar>
            <ArticleHeader />
        </PageLayout>
    )
}

export default Article;