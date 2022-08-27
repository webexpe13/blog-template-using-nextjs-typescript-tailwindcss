import { PageLayout, Text, LinkTo, Slider, Seperator, Image, List } from "../../src/components"
import { ListType, ImageSize, TextAlign } from "../../src/shared/enums"
import { combineClasses } from "../../src/utils/utils"

const StyleGuide = () => {
    return (
        <PageLayout>
            <section className="container md:pt-10 pt-20">
                <Text title className="text-blue-600">
                    Style Guide
                </Text>
                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                    We have used <LinkTo href="https://tailwindcss.com/" external><b>Tailwind CSS</b></LinkTo> for this project so we can use all the css classes and styles given in the <LinkTo href="https://tailwindcss.com/docs/font-size" external><b> tailwind css docs</b></LinkTo>. You can have an extensive tutorial of all utility classes in the tailwind docs, but in this guide we will show some classes and styling you might be using frequently with some of the components, rest you can go crazy with the help of the official docs.
                </div>

                <Text subtitle className="md:!font-bold">Styling Texts</Text>
                <b>Text</b> component is used to add text with some default styling in your article. You can see the <LinkTo href="/pages/tutorial/all-components.tsx/#text" className="underline">demo and guide here</LinkTo>. <br />
                With tailwind css utility classes we can change font size, font weight, color, and other text manipulation utilities classes shown in <LinkTo href="https://tailwindcss.com/docs/font-size" external><b> tailwind css text docs</b></LinkTo>, by adding the classes in <b>className=""</b> attribute. <br />
                <b>Example:</b>
                <br /> <b>{'<Text className="text-[20px] text-blue-500 font-bold">Lorem ipsum dummy text</Text>'}</b> <br />
                You can override default styles by adding <b>"!"</b> in front of classes like <b>{`className="!font-bold md:!text-[50px] md:!font-semibold"`}</b>.
                <Seperator />
                <Text subtitle className="md:!font-bold">Spacing - Paddings and Margins</Text>
                To add padding and margins follow the guide given <LinkTo href="https://tailwindcss.com/docs/padding" external className="underline">here</LinkTo>.
                <Seperator />
                <Text subtitle className="md:!font-bold">Background color and images</Text>
                For background color follow the guide given <LinkTo href="https://tailwindcss.com/docs/background-color" external className="underline">here</LinkTo>. <br />
                For background image use the syntax <b>{`className="bg-[url('/public/images/tutorials/demo-image.jpg)]"`}</b>. For more info follow the guide given <LinkTo href="https://tailwindcss.com/docs/background-image#arbitrary-values" external className="underline">here</LinkTo>.
                <Seperator />
                <Text subtitle className="md:!font-bold">Light and Dark mode</Text>
                We have a setup for dark and light mode by default. You can see the styling doc on how to change your styles with respect to light or dark theme  <LinkTo href="https://tailwindcss.com/docs/dark-mode" external className="underline">here</LinkTo>.
                <Seperator />
                <Text subtitle className="md:!font-bold">Mobile responsive styles.</Text>
                For different screen sizes we can give different stylings or classes with the help of some breakpoint identifiers or prefixes namely <b>sm, md, lg, xl, 2xl</b>. <br />
                We will be majorly using <b>md: for medium screen devices like tablets</b> and <b>lg: for large screen devices like laptops and desktops</b>. <br /><br />

                <b>Example</b>: lets say we want to give a text font size of 14px in mobile devices, 18px in medium sceen devices and 28px for large devices, our className will look like this <b>className="text-[14px] md:text-[18px] lg:text=[28px]"</b>. <br /> When we dont give any prefix the style gets applied to all scrren sizes like <b>className="text-[14px]"</b>.
                <Seperator />
                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                    These are some the basics you need to know about changing the styling with tailwind css, go to the official docs for more info and if you have any issues or queries please feel free to write us at <u>webexpe13@gmail.com</u> or drop a comment on our github discussions <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u>github.com/nmayur/nextjs-simple-blog-template/discussions</u></a>.
                </div>
            </section>
        </PageLayout>
    )
}

export default StyleGuide;
