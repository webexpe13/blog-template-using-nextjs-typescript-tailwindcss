/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, ArticleHeader, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { iconsArray } from "../src/constants/appConstants";
import { combineClasses } from "../src/utils/utils";
import { iSEO } from "../src/shared/interfaces";

const Icons = () => {
    const PAGE_SEO: iSEO = {
        title: 'Icons',
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <div className="container pb-5 md:mt-[50px] pt-20 md:pt-0">
                <Text title className="text-3xl">
                    Icons
                </Text>
                <p className="mb-10 mt-5">
                    To use these icons, simply copy the text below the icon and paste in className in {"<i />"} tag, and to change the size and color of the icon use font attributes like text-sm or text-[12px] and text-blue-800 in className.

                    <br /> <br />
                    Example: {'<i className="icon-A text-[80px] text-blue-800" />'}
                    <br />
                    <i className="icon-A text-[80px] text-blue-800" />
                </p>
                <hr />
                <div className="flex flex-wrap justify-around">
                    {
                        iconsArray.map((icon, i) => {
                            return (
                                <div key={icon + i} className="flex flex-col text-center md:px-[46px] px-[30px] py-3" style={{ flexShrink: 0, minWidth: "100px" }} >

                                    <i className={combineClasses(icon, 'text-[80px]')} />
                                    <p className="font-light text-sm mt-3">{icon}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </PageLayout>
    )
}

export default Icons;