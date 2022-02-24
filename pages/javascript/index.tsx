import { NextPage } from "next";
import { JS_INDEX_SEO } from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

const JS: NextPage = () => {
  return (
    <>
      <DefaultSeo {...JS_INDEX_SEO} />
      <h1>JS page</h1>
    </>
  )
}

export default JS