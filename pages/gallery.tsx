/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const Gallery = () => {
    const PAGE_SEO: iSEO = {
        title: 'Gallery',
        description: `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in website`,
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <div className='container px-3 pb-[20px] mt-10 pt-14 md:pt-0'>
                <Text title className="text-3xl">
                    Gallery
                </Text>
                
            </div>
        </PageLayout>
    )
}

export default Gallery