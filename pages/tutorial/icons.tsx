/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo, Seperator, Image } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { iSEO } from "../../src/shared/interfaces";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import { BiAbacus, BiAdjust } from "react-icons/bi";

const HowToUseIcons = `
//  import icons from react-icons
    import { ..., AiFillYoutube } from "react-icons/ai";
    const Article = () => {
        return (
            <AiFillYoutube />
            {/*to change size*/}
            <AiFillYoutube className="text-[50px]" />
            {/*to change color*/}
            <AiFillYoutube className="text-[#631E9E]" />
            {/*to change color using tailwind css classes*/}
            <AiFillYoutube className="text-blue-600" />
            {/*to give paddings and margins*/}
            <AiFillYoutube className="ml-[15px] mr-[20px] p-[20px]" />
            {/*to use inline i.e one after other in a line*/}
            <AiFillYoutube className="inline-block" />
        )		
    }

    export default Article;
`

const HowToUseDiffGroupIcons = `
    //  icons from Ant Icons
    import { AiFillYoutube } from "react-icons/ai";
    //  icons from BoxIcons
    import { BiAbacus, BiAdjust } from "react-icons/bi";
    const Article = () => {
        return (
            {/*icons from Ant Icons*/}
            <AiFillYoutube />
            <AiFillTwitterCircle />
            {/*icons from BoxIcons*/}
            <BiAbacus />
            <BiAdjust />
        )		
    }

    export default Article;
`

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
                <p className="my-5">
                    We have used <b><LinkTo href="https://react-icons.github.io/react-icons">ReactIcons</LinkTo></b> in this project, so you use the icons please check the <u><LinkTo href="https://react-icons.github.io/react-icons">official website</LinkTo></u>.
                </p>
                <hr />
                <Text subtitle className="mt-5">
                    How to use
                </Text>
                <CodeBlock code={HowToUseIcons} className="my-5" />
                <Text subtitle className="mt-5">
                    Demo
                </Text>
                The above code block will show you the following icon. <br />
                <AiFillYoutube />
                {/*to change size*/}
                <AiFillYoutube className="text-[50px]" />
                {/*to change color*/}
                <AiFillYoutube className="text-[#631E9E]" />
                {/*to change color using tailwind css classes*/}
                <AiFillYoutube className="text-blue-600" />
                <Seperator dots />
                <Text subtitle className="mt-5">
                    How to use different group/family of icons in ReactIcons,
                </Text>
                In react icons we have around 22 icons groups or types like <b>"Ant design icons, Bootstrap icons, Boxicons . . ."</b> etc. When you click on the sidebar list button we se a proper import statement and list of all icons in the icon group.
                <Image src="/public/imp_assets/tutorials/reacticons.png" alt="webexpe.com" caption="ReactIcons website screenshot" />
                here we can see each icons in <b>BoxIcons</b> there is a <b>"Bi"</b> prefix i.e each icon in <b>BoxIcons</b> start with a <b>"Bi"</b> like <b>"BiAbacus, BiAdjust . . ."</b> etc. so when want to use any icon from BoxIcons you have to import the icon as <b>{'import { IconName } from "react-icons/bi";'}</b>
                <CodeBlock code={HowToUseDiffGroupIcons} className="my-5" />
                <div className="text-4xl mb-2">
                    <AiFillYoutube className="inline-block mr-3" />
                    <AiFillTwitterCircle className="inline-block mr-3" />
                    {/*icons from BoxIcons*/}
                    <BiAbacus className="inline-block mr-3" />
                    <BiAdjust className="inline-block " />
                </div>

                <b>Note* :</b> when you search any icon using the search option in react icons, all the icons from different groups will be displayed mixed so to know from where to import the icons see the first 2 letters of the icon name then import that icon group.
                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                    <Text p className="!text-lg leading-relaxed mb-0">
                        For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                        You can also post any comments on our <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
                    </Text>
                </div>
            </div>
        </PageLayout>
    )
}

export default Icons;