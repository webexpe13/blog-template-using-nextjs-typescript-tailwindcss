import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  PageLayout,
  Text,
  LinkTo,
  Slider,
  Seperator,
  Image,
  List,
  Accordian,
  VideoPlayer,
} from "../../src/components";
import { ListType, ImageSize } from "../../src/shared/enums";
import { combineClasses } from "../../src/utils/utils";
import CodeBlock from "../../src/components/CodeBlock";
import {
  HowToUseList,
  HowToUseSeperator,
  HowToUsePageLayout,
  HowToUseImageCode,
  HowToUseTextCode,
  HowToUseLinkTo,
  HowToUseSlider,
  HowToUseAccordian,
  HowToUseVideo,
} from "../../src/constants/codeBlocks";

interface iSideBtnLinks {
  component: string;
  types?: {
    label: string;
    href: string;
  }[];
  href?: string;
}

const AllComponents = () => {
  const router = useRouter();
  const routerIncludesHash = router.asPath.includes("#");
  const [activeHash, setActiveHash] = useState("");
  const cardBBorder =
    "border-b-[8px] border-blue-500 bg-white dark:bg-slate-800 shadow-md md:rounded-lg px-3 pb-2 pt-1 mb-8";

  useEffect(() => {
    if (routerIncludesHash) {
      const split = router.asPath.split("#");
      setActiveHash(split[split.length - 1]);
    }
  }, [router]);

  const isActive = (href: string) => href === "#" + activeHash;

  // all side btn links
  const sideBtns: iSideBtnLinks[] = [
    {
      component: "Page Layouts",
      href: "#pageLayouts",
    },
    {
      component: "Text",
      href: "#text",
    },
    {
      component: "Image",
      href: "#image",
    },
    {
      component: "List",
      href: "#list",
    },
    {
      component: "Section seperator",
      href: "#seperator",
    },
    {
      component: "LinkTo",
      href: "#linkto",
    },
    {
      component: "Image Slider",
      href: "#imageslider",
    },
    {
      component: "Accordian",
      href: "#accordian",
    },
    {
      component: "Video Player",
      href: "#videoPlayer",
    },
  ];

  const sideBtnsComponents = () => {
    return sideBtns.map((each: any, i: any) => (
      <div key={each.component + i}>
        {each.types ? (
          <p className="text-xl font-semibold mb-3">{each.component}</p>
        ) : (
          <LinkTo
            href={each.href}
            key={each.href}
            className={combineClasses(
              "md:text-xl text-md font-semibold mb-3 block whitespace-nowrap md:mr-0 mr-5",
              isActive(each.href) && "text-blue-500"
            )}
          >
            {each.component}
          </LinkTo>
        )}
        <div className="mb-3">
          {each.types &&
            each.types.map((each: any) => (
              <LinkTo
                href={each.href}
                key={each.href}
                className={combineClasses(
                  "block text-gray-500 font-medium py-1 pl-3 border-l",
                  isActive(each.href) &&
                    "text-blue-500 border-blue-500 border-l-2"
                )}
              >
                {each.label}
              </LinkTo>
            ))}
        </div>
      </div>
    ));
  };

  return (
    <PageLayout>
      <section className="container md:pt-10 pt-20 px-0 md:px-[15px]">
        <div className="md:px-0 px-3">
          <Text title className="text-blue-600">
            All Components
          </Text>
          <hr className="my-5" />
          <Text subtitle>
            List of all components, its types and how to use it.
          </Text>
        </div>

        <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
          {/* side btns */}
          <aside className="md:w-1/5 w-full md:sticky md:top-[90px] ">
            <div className="md:rounded-lg md:p-3 md:block px-2 py-3 md:pb-0 bg-white dark:bg-slate-800 shadow-md mb-5 flex overflow-auto">
              {sideBtnsComponents()}
              <LinkTo
                href="/pages/tutorial/style-guide.tsx"
                className="md:hidden block whitespace-nowrap font-semibold"
              >
                Style Guide
              </LinkTo>
            </div>
            <div className="md:rounded-lg md:p-3 bg-white dark:bg-slate-800 shadow-md overflow-auto md:text-xl text-md font-semibold whitespace-nowrap md:block hidden">
              <LinkTo href="/pages/tutorial/style-guide.tsx">
                Style Guide
              </LinkTo>
            </div>
          </aside>

          {/* components */}
          <aside className="md:w-4/5 w-full md:px-[15px]">
            <section className={cardBBorder} id="pageLayouts">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Page Layouts.
              </Text>
              We have 3 page layouts{" "}
              <u>
                <LinkTo href="/pages/tutorial/home-layout.tsx">Home</LinkTo>
              </u>
              ,{" "}
              <u>
                <LinkTo href="/pages/tutorial/blog-with-sidebar-layout.tsx">
                  Blog with sidebar
                </LinkTo>
              </u>{" "}
              and{" "}
              <u>
                <LinkTo href="/pages/tutorial/blog-with-centered-layout.tsx">
                  Blog centered
                </LinkTo>
              </u>
              . <br />
              <b>How to use</b>
              <CodeBlock code={HowToUsePageLayout} />
            </section>

            <section className={cardBBorder} id="text">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Text
              </Text>
              Text is used to write Paragraphs, Title, Sub title or Quotes in
              the article. <br />
              <br />
              <b>Demo</b>
              <Text p>p.Paragraph Example.</Text>
              <Text title className="inline">
                h1.Title Example.
              </Text>
              <Text subtitle>h2.Subtitle example.</Text>
              <Text quote>Quoted text example.</Text>
              <Text p>
                <b>Note:</b> By default we have some standard styles applied to
                the Text component, so if you need to override like text size,
                weight you can do as follows: <br />{" "}
                <b>
                  {
                    '<Text p className="!text-[20px] !font-bold">Overide text size and weight</Text>'
                  }
                </b>{" "}
                <br /> by adding <b>!</b> in front of the classes we can change
                the default styles like here font size will be changed to 22px
                and font weight will change to bold for paragraph{" "}
              </Text>{" "}
              <br />
              <b>How to use</b>
              <CodeBlock code={HowToUseTextCode} className="my-5" />
              you can find more tailwind font classes on the official docs{" "}
              <LinkTo
                href="https://tailwindcss.com/docs/font-size"
                className="underline"
                external
              >
                here
              </LinkTo>
              .
            </section>

            <section className={cardBBorder} id="image">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Image
              </Text>
              To add image in your project, first save the image file in{" "}
              <b>{`public --> images`}</b> folder and then add the image path in
              image tag's src. For demo check <b>/pages/all-components.tsx</b>{" "}
              file in code. <br />
              <br />
              <b>Demo</b>
              <div className="flex flex-wrap">
                <Image
                  src="/public/imp_assets/tutorials/demo-image.jpg"
                  alt="how to use Image | webexpe.com"
                  caption="Default size image with caption"
                  className="my-5"
                />
                <Image
                  src="/public/imp_assets/tutorials/demo-image.jpg"
                  alt="how to use Image | webexpe.com"
                  caption="Full size image with caption"
                  size={ImageSize.FUll}
                  className="mb-5"
                />
                <Image
                  src="/public/imp_assets/tutorials/demo-image.jpg"
                  alt="how to use Image | webexpe.com"
                  caption="Medium size image with caption"
                  size={ImageSize.MEDIUM}
                  className="mb-5"
                />
                <Image
                  src="/public/imp_assets/tutorials/demo-image.jpg"
                  alt="how to use Image | webexpe.com"
                  caption="Small size image with caption"
                  size={ImageSize.SMALL}
                  className="mb-5"
                />
                <Image
                  src="/public/imp_assets/tutorials/demo-image.jpg"
                  alt="how to use Image | webexpe.com"
                  caption="XS size image with caption"
                  size={ImageSize.XS}
                  className="mb-5"
                />
              </div>
              <b>How to use</b>
              <CodeBlock code={HowToUseImageCode} className="my-5" />
            </section>

            <section className={cardBBorder} id="list">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                List
              </Text>
              <b>Demo</b>
              <div className="flex flex-wrap justify-between mt-3">
                <List type={ListType.disc} className="md:w-1/3">
                  <li>List with disc</li>
                  <li>Item </li>
                  <li>Item </li>
                </List>
                <List type={ListType.number} className="md:w-1/3">
                  <li>List with number</li>
                  <li>Item </li>
                  <li>Item </li>
                </List>
                <List type={ListType.none} className="md:w-1/3">
                  <li>List without any marker</li>
                  <li>Item </li>
                  <li>Item </li>
                </List>
              </div>
              <b>How to use</b>
              <CodeBlock code={HowToUseList} className="my-5" />
            </section>

            <section className={cardBBorder} id="seperator">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Section Seperators
              </Text>
              <b>{"<Seperator dots/>"}</b> or <b>{"<Seperator line />"}</b>{" "}
              these are used to add a section divider as shown below. <br />{" "}
              <br />
              <b>Demo</b>
              <Seperator dots />
              <Seperator line />
              <b>How to use</b>
              <CodeBlock code={HowToUseSeperator} className="my-5" />
            </section>

            <section className={cardBBorder} id="linkto">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                LinkTo
              </Text>
              <b>{'<LinkTo href="url" />'}</b> <br />
              This is used to link between your blog pages or external pages.
              <br /> <br />
              <b>How to use</b>
              <CodeBlock code={HowToUseLinkTo} className="my-5" />
            </section>

            <section className={cardBBorder} id="imageslider">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Image Slider
              </Text>
              <b>Demo</b>
              <Slider
                className="mb-5"
                images={[
                  "/public/imp_assets/tutorials/demo-image.jpg",
                  "/public/imp_assets/tutorials/demo-image.jpg",
                  "/public/imp_assets/tutorials/demo-image.jpg",
                  "/public/imp_assets/tutorials/demo-image.jpg",
                ]}
              />
              <b>How to use</b>
              <CodeBlock code={HowToUseSlider} className="my-5" />
            </section>

            <section className={cardBBorder} id="accordian">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Accordian
              </Text>
              <b>Demo</b>
              <Accordian title="Accordian Title" keepOpen>
                Accordian content
              </Accordian>
              <b>How to use</b>
              <CodeBlock code={HowToUseAccordian} className="mb-5 mt-3" />
            </section>

            <section className={cardBBorder} id="videoPlayer">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Video Player
              </Text>
              <b>Demo</b>
              <VideoPlayer url="/public/videos/mov_bbb.mp4" />
              <b>How to use</b>
              <CodeBlock code={HowToUseVideo} className="mb-5 mt-3" />
            </section>

            <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
              <Text p className="!text-lg leading-relaxed mb-0">
                For any any queries related to this project / template feel free
                to connect with us at <u>webexpe13@gmail.com</u>. You can also
                post any comments on our{" "}
                <a
                  href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>
                    <i>github discussions</i>
                  </u>
                </a>
                .
              </Text>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllComponents;
