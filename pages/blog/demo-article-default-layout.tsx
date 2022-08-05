/**These are necessary imports / components for the page */
import BlogLayout from "../../src/layouts/BlogLayouts";
import { ArticleHeaderLayouts, BlogLayouts, SectionSeperatorTypes, ImageSize, TextAs } from "../../src/shared/enums";
import Image from "../../src/components/ArticleImage";
import ArticleHeader from "../../src/components/ArticleHeader";
import SectionSeperator from "../../src/components/SectionSeperator";
import Text from "../../src/components/Text";
import Slider from "../../src/components/Slider";

/**These are necessary imports / components for the page */

const ArticleDefaultLayout = () => {
    /**
     * First we have to go the _ARTICLE_LIST.txt in BLOG_CONSTANTS and make an entry of the article you are about to write
     */

    return (
        // BlogLayout is the wrapper which will display Centered or with sidebar layout
        // layout = BlogLayouts.WITH_SIDEBAR || BlogLayouts.CENTERED
        <BlogLayout layout={BlogLayouts.WITH_SIDEBAR}>
            {/* 
                Image will display images, save images in public -> images folder
                pass image path in src="path"
                if you cant to add caption -> caption="caption text"
                if you cant to add alt text (good for SEO) -> alt="dummy image alt text"
                we have three sizes :  ImageSize.FUll || ImageSize.SMALL || ImageSize.DEFAULT                      
            */}
            <Image src="/images/dummy-banner-img.jpg" caption="this is banner image example" alt="dummy image alt text" size={ImageSize.FUll} />

            {/* 
                ArticleHeader will display the title, tags and other article header imformation 
                it has two types = ArticleHeaderLayouts.DEFAULT || ArticleHeaderLayouts.CENTERED
            */}
            <ArticleHeader type={ArticleHeaderLayouts.DEFAULT} />

            {/* 
                Text will display a paragraph, or title or quote as per the value passed
                change text type by pass "as": as:{TextAs.p | TextAs.title | TextAs.quote}
                font size of any number: fontSize={10}
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Text as={TextAs.p} fontSize={18}>
                <b>{'<Text as={TextAs.p} fontSize={18}>'}</b>               This will display a paragraph<br />
                you can pass :
                type: as = {` TextAs.p | TextAs.title | TextAs.quote`} <br />
                font size of any number: size={10} <br />
                color : color="#3543EA" <br />
                textAlign: = TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY <br />
            </Text>
            {/* 
                This will display dots or line wrt the type passed
                type={SectionSeperatorTypes.LINE | SectionSeperatorTypes.DOTS}
            */}
            <SectionSeperator type={SectionSeperatorTypes.LINE} />

            {/* 
                <Text as={TextAs.title}> will display a section title
                you can pass 
                font size of any number: size={10}
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Text as={TextAs.title}>
                Section Title
            </Text>
            <Text>
                <b>{'<Text as={TextAs.title}>'}</b> This will display a section title<br />
                you can pass :
                font size of any number: size={10} <br />
                color : color="#3543EA" <br />
                textAlign: = TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY <br />
            </Text> 
            
            <SectionSeperator type={SectionSeperatorTypes.DOTS} />
            {/* 
                <Text as={TextAs.quote}> will display a Quoted text
                you can pass 
                font size {number}: size={10}
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Text as={TextAs.quote}>
                Quoted text
            </Text>
            <Text>
                <b>{'<Text as={TextAs.quote}>'}</b> will display a Quoted text <br />
                you can pass 
                font size of any number: size={10}
                color : color="#3543EA"
                textAlign: textAlign={'{TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}'}
            </Text>

            <SectionSeperator type={SectionSeperatorTypes.DOTS} />

            <Text as={TextAs.title} className="mt-10">
                Image Slider
            </Text>
            <Slider className="mt-2 mb-3" images={[
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150',
                'https://picsum.photos/300/150'
            ]} />
            <Text>
                {`
                    <Slider className="mt-2" images={[
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150', 
                        'https://picsum.photos/300/150' 
                    ]} />
                `}
            </Text>
        </BlogLayout>
    )
}

export default ArticleDefaultLayout;