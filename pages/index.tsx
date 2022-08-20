/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import FeaturedArticle from '../src/components/ArticleCards/FeaturedArticle';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";


const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'>
        <div className="container text-center px-3">
          <Text title className='text-3xl'>
            Blog template using Next Js, Typescript and Taildwind CSS
          </Text>

          <Text p className="mt-3 text-xl">
            This is a simple and static component based blog template for everyone.
          </Text>

          <div className='flex justify-center mt-5 flex-wrap '>
            <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Github</span>
            </a>
            <LinkTo href="/about-us" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>About</span>
            </LinkTo>
            <LinkTo href="/all-components" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Components</span>
            </LinkTo>

            <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Support Us</span>
            </a>
          </div>
        </div>
      </section>
      <div className="container mx-auto md:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <Text subtitle className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium">
            Featured Articles
          </Text>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          {
            SORTED_ARTICLES_BY_DATE.map((each, i) => (
              each.featureArticle ?
                <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} /> : null
            ))
          }
          <Seperator />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          {
            SORTED_ARTICLES_BY_DATE.map((each, i) => (
              !each.featureArticle ?
                <ArticleCard article={each.preview} path={each.path} key={i} />
                : null
            ))
          }
        </div>
      </div>
    </PageLayout>
  )
}

export default Home