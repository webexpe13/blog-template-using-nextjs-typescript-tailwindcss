/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo, Slider, VideoPlayer } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import image from "next/image";


const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'>
      <div className="container text-center px-3" >
        <Text title className='text-3xl'>
          Stereo Punch!
        </Text>

        <Text p className="mt-3 text-xl">
          A multi media music magazine
        </Text>

        <div className='flex justify-center mt-5 flex-wrap '>
          <a href="https://carriesmith.work/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
            <span className='text-xl pt-2 block'>CarrieSmith.work</span>
          </a>
          <LinkTo href="/pages/about-us.tsx" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
            <span className='text-xl pt-2 block'>About</span>
          </LinkTo>
          <LinkTo href="/pages/blog" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
            <span className='text-xl pt-2 block'>Articles</span>
          </LinkTo>

          <a href="https://carriesmith.work/playlist" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
            <span className='text-xl pt-2 block'>Listen Now</span>
          </a>
        </div>
                <VideoPlayer url="/public/videos/mov_bbb.mp4" />
      </div>
    </section><div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout some of my past work!</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home