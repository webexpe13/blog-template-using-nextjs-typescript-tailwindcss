import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import FeaturedArticle from '../src/components/ArticleCards/FeaturedArticle';
import { ARTICLES_LIST } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import HomeLayout from '../src/layouts/HomeLayout';
import SectionSeperator from '../src/components/SectionSeperator';
import { TextAs } from '../src/shared/enums';
import Text from '../src/components/Text';
import Link from 'next/link';


const Home = () => {
  return (
    <HomeLayout className="md:pt-0">
      <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'>
        <div className="container text-center px-3">
          <Text title className='text-3xl'>
            Blog template using Next Js, Typescript and Taildwind CSS
          </Text>

          <Text p className="mt-3 text-xl">
            This is a simple and static component based blog template.
          </Text>

          <div className='flex justify-center mt-5 flex-wrap '>
            <a href="https://github.com/nmayur/nextjs-simple-blog-template" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <i className='icon-2-z text-[28px]' /> <span className='text-xl pl-2 pt-2 block'>Github</span>
            </a>
            <Link href="/about-us" passHref>
              <a className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
                <span className='text-xl pt-2 block'>About</span>
              </a>
            </Link>

            <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Support Us</span>
            </a>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <div className={'flex flex-wrap'}>
          {
            ARTICLES_LIST.map((each, i) => (
              each.featureArticle ?
                <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} /> : null
            ))
          }
          <SectionSeperator />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          {
            ARTICLES_LIST.map((each, i) => (
              !each.featureArticle ?
                <ArticleCard article={each.preview} path={each.path} key={i} />
                : null
            ))
          }
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home