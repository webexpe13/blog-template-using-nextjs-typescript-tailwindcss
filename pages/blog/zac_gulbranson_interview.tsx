/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { HowToUseImageCode, HowToUseList, HowToUseSeperator, HowToUseTextCode } from "../../src/constants/codeBlocks";

const Article = () => {
    return (
        // pass blogcentered as show below for article page centered layout
        <PageLayout blogcentered>
            <Text p>
                This current article is made using <b>blogcentered</b> layout. This layout will be used to write your blog posts or articles.
            </Text>
            <Text subtitle className="mt-10 md:text">
            Natural-Born Producer Zac Gulbranson Leaves Fans in Awe with New Single
            </Text>
            <Image
                  src="/public/images/zac_gulbranson_interview.jpg"
                  alt="zac gulbranson"
                  className="my-5"
                />
            <Text p >
                Entrepreneur, marketing specialist, and music guru Zac Gulbranson is preparing to hit streaming platforms at full force. 
                Diving head-first into the industry, Zac makes his presence known with his undeniable producing talent. 
                Mixing a plethora of styles, ranging from hip-hop, alternative and electronic music, it is clear Zac knows no bounds when it comes to the labels of genres. 
                </Text>
                <Text p >
                His upcoming single, <i>“The Solo One” </i>features a mix of deep bass, hypnotic synths, and soothing hats on top of a dark melodic beat, making the track likely to loop in one’s head. 
                Set to release early this year, the hot single intends to mesmerize people by the thousand. 
                Although primarily focused on creating his own music, Zac continues to make beats and produce songs for others.
                </Text>
                <Image
                  src="/public/images/zac_bw.jpg"
                  alt="zac gulbranson"
                  size={ImageSize.SMALL}
                  className="mb-5"
                />
                <Text p >
                <i>“When I’m in the studio everything flows pretty naturally for me. The more I create, the more I surprise myself with my abilities. 
                I know I started late but I feel like I have a gift. This is what I’m meant to do,” </i>said Zac.
                </Text>
                <Text p >
                While some may think Zac has been producing his entire life, his talent was only discovered a few years ago. Locked in his Arizona apartment during the pandemic, he found himself crafting his own songs. From sunrise to sundown, he experimented with new sounds, rhythms, and elements that drove him to his current style. 
                Encircled by friends who double as artists and producers, it is no surprise Zac quickly turned to the profession.
                </Text>
                <Text p >
                Friends showered Zac with appraisal as each song hit their ears. Channeling his newly discovered gift, he immediately fell in love with the art of making music. In 2021, he decided to pack up all his belongings and move to the musical hub of Miami. 
                Plunging into the scene head-first, he landed his first gig within a year of relocating.
                </Text>
                <Text p >
                <i>“I’m a firm believer in trying something to see what it could be than never trying and always wondering what could have happened. There are so many people out there that don't even know they possess a talent unless they take the chance to try it. 
                People always listen and say ‘oh I wish I could do that’ but they probably could if they just tried.”</i>
                </Text>
                <Text p >
                Stepping up to the stage in Miami, Zac was accompanying a friend for his performance. After running through a couple of tracks, his colleague stepped aside to let Zac have his moment of fame.  The jittery crowd rumbled with angst as he began rotating the knobs of the turntable. Before the end of the first song, fans from all over erupted in screams and cheers. 
                Their explosive energy was enough to have most people wondering who this new music prodigy was.
                </Text>
                <Text p >
                The impact the crowd had on Zac’s drive was astronomical. 
                Fans were itching for more and he knew he had to deliver. 
                Confining himself to the studio for hours on end, Zac began pumping out songs left and right. 
                However, the praise from fans and friends are far from the root of what inspires Zac to create. 
                Prior to creating music, Zac grappled with drug addiction for many years. Now, after being sober for seven years, music is one of his largest outlets to express his past battles and experiences.
                 Writing about his darkest days has slowly paved way for his very bright future. 
                </Text>
                <Image
                  src="/public/images/zac_color.jpg"
                  alt="zac gulbranson"
                  size={ImageSize.SMALL}
                  className="mb-5"
                />
                <Text p >
                <i>“Coming from where I was at my worst, there’s no way I could live an average lifestyle and be an average person with an average job who has average relationships. 
                I know that I’m here for a reason. There were a lot of moments that I shouldn’t have made it out of but I did. 
                Now that I have peace of mind and am out of that lifestyle, I’m motivated to go even harder,” </i>said Zac, recounting his past hardships.
                </Text>
                <Text p >
                Zac’s incredible talents almost ensure his rise in the industry as both an artist and producer.
                 Along with his natural talent, his desire to create and maintain his craft is what sets him apart from the crowd. Gunning for the main stage, Zac hopes to build up a presence big enough to headline musical festivals in the future.
                 Accumulating admiration from the likes of many, there is no doubt his latest music will become a hit.
                </Text>
              
                    <Slider
                    className="mb-5"
                    images={[
                    "/public/images/zac_window.jpg",
                    "/public/images/zac_walking.jpg",
                    "/public/images/zac_standing.jpg",
                    ]}
                />
              
                <div className="flex flex-wrap">
                    <Image
                    src="/public/images/zac_window.jpg"
                    alt="zac gulbranson"
                    size={ImageSize.SMALL}
                    className="mb-5"
                    />
                    <Image
                    src="/public/images/zac_walking.jpg"
                    alt="zac gulbranson"
                    size={ImageSize.SMALL}
                    className="mb-5"
                    />
                </div>
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed mb-0">
                For any any queries related to this interview / blog feel free to connect with me at <u>carriesmith3231@gmail.com</u>.
                You can also connect with me on  <a href="https://www.linkedin.com/in/carrie-smith-89b389198/" target="_blank" rel="noopener noreferrer"><u><i>linkedin</i></u></a>.
            </div>
        </PageLayout>
    )
}

export default Article;