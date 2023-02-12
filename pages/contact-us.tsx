/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const ContactUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'Contact Us',
        description: 'For any any queries related to this magazine / blog feel free to connect with us on webexpe13@gmail.com',
        keywords: 'contact us, help',
        author: 'Carrie Smith'
    } 
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 pb-10 md:pt-20 pt-[80px]'>
                <Text title className="!text-5xl !font-light">
                    Contact Us
                </Text>

                <div className="flex flex-wrap mt-8 justify-between">
                    <div className="md:w-1/2 w-full md:pl-2">
                        <Text p className="!text-lg leading-relaxed">
                            For any any queries related to this magazine / blog feel free to connect with us at the given link.
                            You can also post any comments on our <a href="https://www.linkedin.com/in/carrie-smith-89b389198/" target="_blank" rel="noopener noreferrer"><u><i>linkedin</i></u></a>.
                        </Text>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <Text p>
                            write to us at
                        </Text>
                        <Text subtitle className="!font-light md:!text-3xl">
                        https://www.linkedin.com/in/carrie-smith-89b389198/
                        </Text>
                    </div>
                </div>
            </section>


            <section className={"dark:bg-slate-800 bg-blue-100 mt-10 container py-10 md:px-20 px-5"}>
                <Text subtitle className="md:!text-5xl text-4xl !font-light">
                    Work with me . . .
                </Text>
                <Text p className="!text-lg leading-relaxed mt-5 px-1">
                I am a writer and multi-media journalist based in the DC metropolitan area. I specialize in written, visual, and digital storytelling. My pieces feature a diverse range of topics within the lifestyle and entertainment realm.
                Diving headfirst into the entertainment industry, I am currently pursuing my dream of writing about up-and-coming music artists. I have produced a wide array of content, ranging from written pieces, to photo and video journalism. My main passion is to tell the hidden stories of people across the globe, in whatever way that may be. I look forward to sharpening my storytelling skills through the creation of my blog, Stereo Punch, which highlights the journeys of rising musicians.

                </Text>
            </section>
        </PageLayout>
    )
}

export default ContactUs