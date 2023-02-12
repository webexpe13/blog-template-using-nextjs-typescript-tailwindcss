/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { HowToUseImageCode, HowToUseList, HowToUseSeperator, HowToUseTextCode } from "../../src/constants/codeBlocks";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            {/* Replace the below content with your content */}
            Here you can find links to a few of my previously published articles. I have worked for a wide array of publications, writing about various diverse topics.
             Simultaneously, I have completed numerous freelance articles. 
            Click on an image to read one of my pieces!

            <Text p textAlign={TextAlign.CENTER}>
            <LinkTo href="https://thefoxmagazine.com/music/pop-alt-artist-sam-louis-walks-us-through-his-rise-to-music-sharing-insider-insights-and-advice/" external className="font-semibold">Pop-Alt Artist Sam Louis Walks Us Through His Rise To Music, Sharing Insider Insights And Advice</LinkTo>

                </Text>
            <a href="https://thefoxmagazine.com/music/pop-alt-artist-sam-louis-walks-us-through-his-rise-to-music-sharing-insider-insights-and-advice/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/sam_louis.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />

                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://thefoxmagazine.com/music/5-artists-who-are-dedicated-to-giving-back/" external className="font-semibold">5 Artists Who Are Dedicated to Giving Back</LinkTo>

                        </Text>
            <a href="https://thefoxmagazine.com/music/5-artists-who-are-dedicated-to-giving-back/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/5artists.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://thefoxmagazine.com/music/7-artists-who-set-the-stage-on-fire-with-their-performances-at-outside-lands/" external className="font-semibold">7 Artists Who Set The Stage On Fire With Their Performances At Outside Lands</LinkTo>

                        </Text>
            <a href="https://thefoxmagazine.com/music/7-artists-who-set-the-stage-on-fire-with-their-performances-at-outside-lands/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/7artists.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                        
                        <LinkTo href="https://thefoxmagazine.com/photography/meet-hayden-lynch-the-travel-photographer-who-captures-emotions-of-the-world/" external className="font-semibold">Meet Hayden Lynch: The Travel Photographer Who Captures Emotions Of The World</LinkTo>

                        </Text>
            <a href="https://thefoxmagazine.com/photography/meet-hayden-lynch-the-travel-photographer-who-captures-emotions-of-the-world/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/hayden.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://thefoxmagazine.com/music/3-hottest-hip-hop-artist-collaborations-of-2022/" external className="font-semibold">3 Hottest Hip-Hop Artist Collaborations of 2022</LinkTo>

                    </Text>
            <a href="https://thefoxmagazine.com/music/3-hottest-hip-hop-artist-collaborations-of-2022/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/nas.jpeg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://thefoxmagazine.com/photography/photographer-and-videographer-ollie-holder-shares-the-world-through-his-lens/" external className="font-semibold">Photographer and Videographer Ollie Holder Shares the World Through His Lens</LinkTo>
                        </Text>
                    <a href="https://thefoxmagazine.com/photography/photographer-and-videographer-ollie-holder-shares-the-world-through-his-lens/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/ollie.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://thefoxmagazine.com/music/meet-suvi-singer-and-songwriter-from-southern-india-who-expresses-her-authentic-self-through-her-music/" external className="font-semibold">Meet SUVI: Singer and Songwriter From Southern India Who Expresses Her Authentic Self Through Her Music</LinkTo>
                    </Text>
                    <a href="https://thefoxmagazine.com/music/meet-suvi-singer-and-songwriter-from-southern-india-who-expresses-her-authentic-self-through-her-music/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/suvi.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>

                    <LinkTo href="https://thefoxmagazine.com/music/3-talented-hip-hop-artists-within-the-lgbtq-community/" external className="font-semibold">3 Talented Hip-Hop Artists Within The LGBTQ+ Community</LinkTo>
                    </Text>
                    <a href="https://thefoxmagazine.com/music/3-talented-hip-hop-artists-within-the-lgbtq-community/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/gay.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://thefoxmagazine.com/photography/5-female-photographers-who-empower-women-through-their-art/" external className="font-semibold">5 Female Photographers Who Empower Women Through Their Art</LinkTo>
                    </Text>
                    <a href="https://thefoxmagazine.com/photography/5-female-photographers-who-empower-women-through-their-art/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/female.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://amherstwire.com/36160/profiles/up-and-coming-artist-phoenix-rios-is-turning-heads-in-the-area/" external className="font-semibold">Up-and-Coming Artist Phoenix Rios Turns Heads in Amherst</LinkTo>
                    </Text>
                    <a href="https://amherstwire.com/36160/profiles/up-and-coming-artist-phoenix-rios-is-turning-heads-in-the-area/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/rios.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://www.theneoelite.com/post/beyond-the-photographer-lauren-woods" external className="font-semibold">Beyond the Photographer: Lauren Woods</LinkTo>
                    </Text>
                    <a href="https://www.theneoelite.com/post/beyond-the-photographer-lauren-woods" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/public/images/published/woods.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                    <Seperator dots />
                    <Text p textAlign={TextAlign.CENTER}>
                    <LinkTo href="https://earthfutureaction.com/reports/financial/crisisafterpandemic.html" external className="font-semibold">Social Disaster 2020-2022: Millions of Americans Face Starvation and Poverty</LinkTo>
                    </Text>
                    <a href="https://earthfutureaction.com/reports/financial/crisisafterpandemic.html" target="_blank" rel="noopener noreferrer" >
                    <Image
                        src="/public/images/published/homeless.jpg"
                        alt="carrie smith"
                        size={ImageSize.SMALL}
                        className="mb-5"
                        />
                    </a>
                   
                <Text subtitle className="md:!text-5xl text-4xl !font-light">
                    Work with me . . .
                </Text>
                <Text p className="!text-lg leading-relaxed mt-5 px-1">
                I am a writer and multi-media journalist based in the DC metropolitan area. I specialize in written, visual, and digital storytelling. My pieces feature a diverse range of topics within the lifestyle and entertainment realm.
                Diving headfirst into the entertainment industry, I am currently pursuing my dream of writing about up-and-coming music artists. I have produced a wide array of content, ranging from written pieces, to photo and video journalism. My main passion is to tell the hidden stories of people across the globe, in whatever way that may be. I look forward to sharpening my storytelling skills through the creation of my blog, Stereo Punch, which highlights the journeys of rising musicians.
                Find my profile <LinkTo href="https://thefoxmagazine.com/contributor/carrie-smith/" external className="font-semibold">here</LinkTo>
                </Text>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;