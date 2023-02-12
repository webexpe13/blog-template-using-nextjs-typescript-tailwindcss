/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider, Accordian } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are Stereo Punch! This is an open source music magazine/blog.`,
        keywords: 'stereo, punch, music, magazine, blog, dmv, fresh, carrie smith, wiriter, photo, audio, visual, media, journalist',
        author: 'Mayur Nalwala, Rupali Yadav'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                   
                <Image
                        src="/public/images/carrie.jpg"
                        alt="carrie smith"
                        size={ImageSize.MEDIUM}
                        className="mb-5"
                        />
                   
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                    Hi we are Stereo Punch! 
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                    This is an open source music magazine/blog
                    </Text>

                    <Text p className='text-lg'>
                    I am a writer and multi-media journalist based in the DC metropolitan area. I specialize in written, visual, and digital storytelling. My pieces feature a diverse range of topics within the lifestyle and entertainment realm. <a href="https://carriesmith.work/" className="underline font-bold">here</a>.
                    </Text>

                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Written
                            </Text>
                            <List type={ListType.disc}>
                                <li>Interview</li>
                                <li>Blog</li>
                                <li>Longform Narrative</li>
                                <li>Essay</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Visual
                            </Text>
                            <List type={ListType.disc}>
                                <li>Photograpghy</li>
                                <li>Videography</li>
                                <li>Multimedia Productions</li>
                            </List>
                        </div>
                    </div>
                    <Seperator />
                    <Text p className='text-lg'>
                        Created by <LinkTo href="https://www.linkedin.com/in/carrie-smith-89b389198/" external className="font-semibold">Carrie Smith</LinkTo> and <LinkTo href="https://www.linkedin.com/in/mackenzie-harwood-a896ab199/" external className="font-semibold">Mackenzie Harwood</LinkTo>  with ♥
                    </Text>
                    <a href="https://www.linkedin.com/in/carrie-smith-89b389198/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/csmith.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                    <Text subtitle className="md:!text-5xl text-4xl !font-light">
                    Work with me . . .
                </Text>
                <Text p className="!text-lg leading-relaxed mt-5 px-1">
                I am a writer and multi-media journalist based in the DC metropolitan area. I specialize in written, visual, and digital storytelling. My pieces feature a diverse range of topics within the lifestyle and entertainment realm.
                Diving headfirst into the entertainment industry, I am currently pursuing my dream of writing about up-and-coming music artists. I have produced a wide array of content, ranging from written pieces, to photo and video journalism. My main passion is to tell the hidden stories of people across the globe, in whatever way that may be. I look forward to sharpening my storytelling skills through the creation of my blog, Stereo Punch, which highlights the journeys of rising musicians.

                </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs