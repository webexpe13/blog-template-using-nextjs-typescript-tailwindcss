import { NextPage } from "next";
import { HTML_CSS_JS_SEO } from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

const HTMLCSSJS: NextPage = () => {
  return (
    <>
      <DefaultSeo {...HTML_CSS_JS_SEO} />
      <h1>HTML CSS JS page</h1>
    </>
  )
}

export default HTMLCSSJS