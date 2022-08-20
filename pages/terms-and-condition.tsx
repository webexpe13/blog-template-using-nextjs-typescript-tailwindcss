/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";
import { WEBSITE_URL } from "../BLOG_CONSTANTS/_BLOG_SETUP";

const TermsAndConditions = () => {
    const PAGE_SEO: iSEO = {
        title: 'Terms and conditions',
        description: `These terms and conditions outline the rules and regulations for the use of Website, located at ${WEBSITE_URL}.`,
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }    
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <div className='container px-3 pb-[20px] mt-10 pt-14 md:pt-0'>
                <Text title className="text-3xl">
                    Terms and Conditions
                </Text>
                <Text p >
                    Welcome to [Website_Name]! <br /><br />
                    These terms and conditions outline the rules and regulations for the use of [Company_Name]'s Website, located at [Website_URL]. <br />
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use [Website_Name] if you do not agree to take all of the terms and conditions stated on this page. <br />
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    Cookies
                </Text>
                <Text p >
                    We employ the use of cookies. By accessing [Website_Name], you agreed to use cookies in agreement with the [Company_Name]'s Privacy Policy. <br />
                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    License
                </Text>
                <Text p >
                    Unless otherwise stated, [Company_Name] and/or its licensors own the intellectual property rights for all material on [Website_Name]. All intellectual property rights are reserved. You may access this from [Website_Name] for your own personal use subjected to restrictions set in these terms and conditions.
                </Text>
                <Text p >You must not:</Text>
                <ul className="list-disc pl-8">
                    <li>Republish material from [Website_Name]</li>
                    <li>Sell, rent or sub-license material from [Website_Name]</li>
                    <li>Reproduce, duplicate or copy material from [Website_Name]</li>
                    <li>Redistribute content from [Website_Name]</li>
                </ul>
                <Text p >
                    This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator. <br /><br />
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. [Company_Name] does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of [Company_Name],its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, [Company_Name] shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. <br />
                    [Company_Name] reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                </Text>

                <Text p >You warrant and represent that:</Text>
                <ul className="list-disc pl-8">
                    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                    <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                </ul>
                <Text p >
                    You hereby grant [Company_Name] a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    Hyperlinking to our Content
                </Text>
                <Text p >
                    The following organizations may link to our Website without prior written approval:
                    <ul className="list-disc pl-8">
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li> Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;</li>
                        <li> System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                    </ul>
                </Text>
                <Text p >
                    These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.

                    <br />
                    We may consider and approve other link requests from the following types of organizations:

                    <ul className="list-disc pl-8">
                        <li>commonly-known consumer and/or business information sources</li>
                        <li>dot.com community sites</li>
                        <li>associations or other groups representing charities</li>
                        <li>online directory distributors</li>
                        <li>internet portals</li>
                        <li>accounting, law and consulting firms; and</li>
                        <li>educational institutions and trade associations.</li>
                    </ul>

                    <br />
                    We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of [Company_Name]; and (d) the link is in the context of general resource information.

                    <br />
                    These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
                    <br />
                    If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to [Company_Name]. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    iFrames
                </Text>
                <Text p> 
                    Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    Content Liability
                </Text>
                <Text p> 
                    We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    Reservation of Rights
                </Text>
                <Text p> 
                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    Removal of links from our website
                </Text>
                <Text p> 
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. <br />
                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </Text>
                <Seperator line />
                <Text subtitle className="text-xl">
                    Disclaimer
                </Text>
                <Text p> 
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: <br />
                    <ul className="list-disc pl-8">
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>
                    <br />
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. <br />
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </Text>
            </div>
        </PageLayout>
    )
}

export default TermsAndConditions