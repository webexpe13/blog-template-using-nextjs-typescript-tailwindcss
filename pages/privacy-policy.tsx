import SectionSeperator from "../src/components/SectionSeperator";
import { SectionSeperatorTypes, TextAs } from "../src/shared/enums";
import HomeLayout from "../src/layouts/HomeLayout";
import Text from "../src/components/Text";

const TermsAndConditions = () => {
    return (
        <HomeLayout>
            <div className='container px-3 pb-[20px] mt-10'>
                <Text as={TextAs.title} className="md:text-3xl">
                    Privacy Policy
                </Text>
                <p>
                    At [Website_Name], accessible from [Website_URL], one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by [Website_Name] and how we use it. <br />
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. <br />
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in [Website_Name]. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Privacy Policy Generator.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Consent
                </Text>
                <p>
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Information we collect
                </Text>
                <p>
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. <br />
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. <br />
                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    How we use your information
                </Text>
                <p>
                    We use the information we collect in various ways, including to:
                    <ul className="list-disc pl-8">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                
                <Text as={TextAs.title} className="text-xl">
                    Log Files
                </Text>
                <p>
                    [Website_Name] follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Cookies and Web Beacons
                </Text>
                <p>
                    Like any other website, [Website_Name] uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. <br />
                    For more general information on cookies, please read "What Are Cookies".
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Google DoubleClick DART Cookie
                </Text>
                <p>
                    Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Our Advertising Partners
                </Text>
                <p>
                    Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.

                    <ul className="list-disc pl-8">
                        <li>Google : https://policies.google.com/technologies/ads</li>
                    </ul>
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Advertising Partners Privacy Policies
                </Text>
                <p>
                    You may consult this list to find the Privacy Policy for each of the advertising partners of [Website_Name]. <br />
                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on [Website_Name], which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. <br />
                    Note that [Website_Name] has no access to or control over these cookies that are used by third-party advertisers.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Third Party Privacy Policies
                </Text>
                <p>
                    [Website_Name]'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. <br />
                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    CCPA Privacy Rights (Do Not Sell My Personal Information)
                </Text>
                <p>
                    Under the CCPA, among other rights, California consumers have the right to: <br /> Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. <br />Request that a business delete any personal data about the consumer that a business has collected. <br />Request that a business that sells a consumer's personal data, not sell the consumer's personal data. <br />If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    GDPR Data Protection Rights
                </Text>
                <p>
                    We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: <br />
                    <ul className="list-disc pl-8">
                        <li>The right to access: You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                        <li>The right to rectification: You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                        <li>
                            The right to erasure: You have the right to request that we erase your personal data, under certain conditions.
                        </li>
                        <li>
                            The right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.
                        </li>
                        <li>
                            The right to object to processing: You have the right to object to our processing of your personal data, under certain conditions.
                        </li>
                        <li>
                            The right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                        </li>
                    </ul><br />
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
                <SectionSeperator type={SectionSeperatorTypes.LINE} />
                <Text as={TextAs.title} className="text-xl">
                    Children's Information
                </Text>
                <p>
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. <br />
                    [Website_Name] does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>
            </div>
        </HomeLayout>
    )
}

export default TermsAndConditions