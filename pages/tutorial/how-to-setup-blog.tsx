/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";

const BlogSetup = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                   Zac Gulbranson Interview
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                Natural-Born Producer Zac Gulbranson Leaves Fans in Awe with New Single
                </Text>
                <Text p >
                Entrepreneur, marketing specialist, and music guru Zac Gulbranson is preparing to hit streaming platforms at full force. Diving head-first into the industry, Zac makes his presence known with his undeniable producing talent. 
                Mixing a plethora of styles, ranging from hip-hop, alternative and electronic music, it is clear Zac knows no bounds when it comes to the labels of genres.
                </Text>
                <Text p >
                His upcoming single, “The Solo One” features a mix of deep bass, hypnotic synths, and soothing hats on top of a dark melodic beat, making the track likely to loop in one’s head. Set to release early this year, the hot single intends to mesmerize people by the thousand. 
                Although primarily focused on creating his own music, Zac continues to make beats and produce songs for others.
                </Text>
                <Text p >
                “When I’m in the studio everything flows pretty naturally for me. The more I create, the more I surprise myself with my abilities. 
                I know I started late but I feel like I have a gift. This is what I’m meant to do,” said Zac.
                </Text>
                <Text p >
                While some may think Zac has been producing his entire life, his talent was only discovered a few years ago. Locked in his Arizona apartment during the pandemic, he found himself crafting his own songs. From sunrise to sundown, he experimented with new sounds, rhythms, and elements that drove him to his current style.
                Encircled by friends who double as artists and producers, it is no surprise Zac quickly turned to the profession.
                </Text>
                <Text p >
                Friends showered Zac with appraisal as each song hit their ears. Channeling his newly discovered gift, he immediately fell in love with the art of making music. 
                In 2021, he decided to pack up all his belongings and move to the musical hub of Miami. Plunging into the scene head-first, he landed his first gig within a year of relocating.
                </Text>
                <Text p >
                “I’m a firm believer in trying something to see what it could be than never trying and always wondering what could have happened. There are so many people out there that don't even know they possess a talent unless they take the chance to try it.
                People always listen and say ‘oh I wish I could do that’ but they probably could if they just tried.”
                </Text>
                <Text p >
                Stepping up to the stage in Miami, Zac was accompanying a friend for his performance. After running through a couple of tracks, his colleague stepped aside to let Zac have his moment of fame.  The jittery crowd rumbled with angst as he began rotating the knobs of the turntable. Before the end of the first song, fans from all over erupted in screams and cheers. 
                Their explosive energy was enough to have most people wondering who this new music prodigy was.
                </Text>
                <Text p >
                The impact the crowd had on Zac’s drive was astronomical. Fans were itching for more and he knew he had to deliver. Confining himself to the studio for hours on end, Zac began pumping out songs left and right. However, the praise from fans and friends are far from the root of what inspires Zac to create. Prior to creating music, Zac grappled with drug addiction for many years. 
                Now, after being sober for seven years, music is one of his largest outlets to express his past battles and experiences. Writing about his darkest days has slowly paved way for his very bright future.
                </Text>
                <Text p >
                “Coming from where I was at my worst, there’s no way I could live an average lifestyle and be an average person with an average job who has average relationships. I know that I’m here for a reason. There were a lot of moments that I shouldn’t have made it out of but I did. 
                Now that I have peace of mind and am out of that lifestyle, I’m motivated to go even harder,” said Zac, recounting his past hardships. 
                </Text>
                <Text p >
                Zac’s incredible talents almost ensure his rise in the industry as both an artist and producer. 
                Along with his natural talent, his desire to create and maintain his craft is what sets him apart from the crowd. 
                Gunning for the main stage, Zac hopes to build up a presence big enough to headline musical festivals in the future. Accumulating admiration from the likes of many, there is no doubt his latest music will become a hit.
                </Text>

                <Text subtitle className="mt-10">
                    2.  Setting up authors.
                </Text>
                <Text p >
                    Before we start writing articles we need to setup authors and navbar so that it can be used throughtout the application.
                </Text>
                <Text p >
                    Goto <b>_BLOG_SETUP.tsx</b> in <b>BLOG_CONSTANTS</b> folder. Here you will see some example authors you can refer. <br />
                    The <b>export const</b> is used to make the item/variable available throughtout the project. <br />
                    You can add as many authors you want just make sure you keep the format as shown.
                </Text>
                <CodeBlock code={AuthorSetup} className="my-5" />
                <Seperator />
                <Text subtitle className="mt-10">
                    3.  Setting up Main Navbar and Side Nav.
                </Text>
                <Text p >
                    Goto <b>_BLOG_SETUP.tsx</b> file in <b>BLOG_CONSTANTS</b> folder. Here you will see example to setup your navbar. <br />
                    We have 5 important items to set in navbar setup, <b>type, logo, navLinks, sideNavLinks, socials</b>
                </Text>
                <CodeBlock code={NavbarSetup} className="my-5" />
                <List type={ListType.disc} className="mt-5">
                    <li>
                        <b>type</b><br />
                        We have two types, <span className="bg-grey font-black">NavbarType.DEFAULT | NavbarType.CENTERED</span>
                        <CodeBlock code={NavbarSetupType} className="my-5" />
                    </li>
                    <li>
                        <b>logo</b><br />
                        You can pass image or text as logo, max logo image height 40px. Save the logo file in {'public -> images'} folder and paste the path as shown below <br />
                        If the logo is text : <b> type: LogoType.Text</b> <br />
                        If the logo is image : <b> type: LogoType.IMAGE</b> <br />
                        <CodeBlock code={
                            `
    export const PRIMARY_NAV = {
        ...
        logo: {
            type: LogoType.IMAGE,
            logo: '/images/logo.png',
            logoLight: '/images/logoLight.png'
        }
        ...
    }
    // or
    export const PRIMARY_NAV = {
        ...
        logo: {
            type: LogoType.TEXT,
            logo: 'Next Blog',
        }
        ...
    }
    `
                        } className="my-5" />
                    </li>
                    <li>
                        <b>navLinks</b><br />
                        These are the main nav links. The given code block shows hows to setup primary links for your navbar.
                        <CodeBlock code={NavbarSetup_NAVLINKS} className="my-5" />
                    </li>
                    <li>
                        <b>sideNavLinks</b><br />
                        These are the links that will be visible on the side menu. please make sure you are following the example format which is same as the above image. <br /><br />
                        <b>* note: you can see some extra links like <b>Icons and some Demo Article links</b> these are only visible during development or when you run the project locally on your computer.</b>
                        <br /><br />
                        These are pages with icons and examples of how to use them. <br />
                        These pages also include sample blog articles and the smaple components and how to use it. Open the demo article files in your code editor and you can see how many components are used with porper explanations.
                    </li>
                    <li>
                        <b>socials</b><br />
                        These are for your social media links. The given code block shows hows to setup social media links for your navbar. <br />
                        You can get the icons from <b><LinkTo href="/pages/tutorial/icons.tsx" passHref={true}>Icons</LinkTo></b>
                        <CodeBlock code={NavbarSetup_Socials} className="my-5" />
                    </li>
                </List>
                <Seperator />
                <Text p >
                    And thats it, you are ready with the basic setup required to kick start your blog.
                </Text>

                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded mt-10 !text-lg leading-relaxed ">
                    For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                    You can also post any comments on our <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
                </div>
            </div>
        </PageLayout>
    )
}

export default BlogSetup