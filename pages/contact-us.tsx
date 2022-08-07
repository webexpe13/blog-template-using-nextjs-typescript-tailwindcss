import { TextAs } from "../src/shared/enums";
import HomeLayout from "../src/layouts/HomeLayout";
import Text from "../src/components/Text";
import { combineClasses } from '../src/utils/utils'

const ContactUs = () => {
    const dom = typeof window !== 'undefined' && window ? window : null
    console.log(dom?.document.body.className);

    return (
        <HomeLayout>
            <section className='container px-3 pb-20 md:pt-20 pt-[80px]'>
                <Text as={TextAs.title} className="md:text-5xl text-3xl !font-light">
                    Contact Us
                </Text>

                <div className="flex flex-wrap mt-8 justify-between">
                    <div className="md:w-1/2 w-full md:pl-2">
                        <Text as={TextAs.p} className="!text-lg leading-relaxed">
                            For any any queries related to this project / template feel free to connect with us at the given email.
                            You can also post any comments on our <a href="https://github.com/nmayur/nextjs-simple-blog-template/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
                        </Text>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <Text as={TextAs.p}>
                            write to us at
                        </Text>
                        <Text as={TextAs.subTitle} className="!font-light md:text-3xl">
                            webexpe13@gmail.com
                        </Text>
                    </div>
                </div>
            </section>


            <section className={combineClasses("dark:bg-slate-800 bg-blue-100", "mt-10 container py-10 md:px-20 px-10")}>
                <Text as={TextAs.title} className="md:text-5xl text-3xl !font-light">
                    Work with us . . .
                </Text>
                <Text as={TextAs.p} className="!text-lg leading-relaxed mt-5 px-1">
                    We are a group of developers and designers with more than 5 years of industry experience. I you have any requirements like Website Development, Website / App Design feel free to contact us on the given email.
                </Text>
            </section>
        </HomeLayout>
    )
}

export default ContactUs