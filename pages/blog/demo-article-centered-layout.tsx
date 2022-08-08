/**These are necessary imports / components for the page */
import PageLayout from "../../src/layouts/PageLayouts";
import { ImageSize, TextAlign } from "../../src/shared/enums";
import Image from "../../src/components/ArticleImage";
import ArticleHeader from "../../src/components/ArticleHeader";
import Text from "../../src/components/Text";
import Seperator from "../../src/components/Seperator";
import Slider from "../../src/components/Slider";
/**These are necessary imports / components for the page */

const ArticleDefaultLayout = () => {
    /**
     * First we have to go the _ARTICLE_LIST.txt in BLOG_CONSTANTS and make an entry of the article you are about to write
     */

    return (
        // PageLayout is the wrapper which will display Centered or with sidebar layout
        <PageLayout blogcentered>
            {/* 
                Image will display images, save images in public -> images folder
                pass image path in src="path"
                if you cant to add caption -> caption="caption text"
                if you cant to add alt text (good for SEO) -> alt="dummy image alt text"
                we have three sizes :  ImageSize.FUll || ImageSize.SMALL || ImageSize.DEFAULT               
            */}
            <Image src="/images/dummy-banner-img.jpg" caption="this is banner image example" alt="dummy image alt text" size={ImageSize.FUll} />
            <ArticleHeader centered />
            <Text p textAlign={TextAlign.CENTER}>
                <b>{'<Text p textAlign={TextAlign.CENTER}>'}</b> <br /><br />
                This will display a paragraph<br />
                you can pass :
                color : color="#3543EA" <br />
                textAlign: TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY <br />
            </Text>
            <Seperator dots />

            <Text subtitle textAlign={TextAlign.CENTER}>
                Section Title
            </Text>
            <Text textAlign={TextAlign.CENTER}>
                <b>{'<Text subtitle textAlign={TextAlign.CENTER}>'}</b> This will display a section title<br />
                you can pass :
                color : color="#3543EA" <br />
                textAlign: = TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY <br />
            </Text>

            <Seperator dots />
            {/* 
                QuotedText will display a Quoted text
                you can pass 
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Text quote textAlign={TextAlign.CENTER} className="text-3xl">
                Quoted text
            </Text>
            <Text textAlign={TextAlign.CENTER}>
                <b>{'<Text quote textAlign={TextAlign.CENTER}>'}</b> will display a Quoted text <br />
                you can pass
                color : color="#3543EA"
                textAlign: textAlign={'{TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}'}
            </Text>

            <Text subtitle textAlign={TextAlign.CENTER} className="mt-10">
                Image Slider
            </Text>
            <Slider className="mt-2 mb-3" images={[
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150'
            ]} />
            <Text textAlign={TextAlign.CENTER}>
                {`
                    <Slider className="mt-2" images={[
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150' 
                    ]} />
                `}
            </Text>
        </PageLayout>
    )
}

export default ArticleDefaultLayout;