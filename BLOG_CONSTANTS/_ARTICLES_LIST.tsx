import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { CARRIE, MACKENZIE } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  
  {
    path: "/pages/blog/unfair_rob_fair.tsx",
    preview: {
      author: CARRIE,
      date: "February 14 2023",
      articleTitle: "Unfair for Rob Fair - Longform Narrative",
      shortIntro:
        "I wanted to write about Rob’s story in hopes of connecting my readers to his experience, with the intent of humanizing the issue of homelessness.",
      tags: "homelessness,  activist, housing, housing crisis, compassion",
      thumbnail: "/public/images/published/homeless.jpg",
      category: "narratives",
    },
    seo: {
      keywords:
        "homelessness,  activist, housing, housing crisis, single family, struggle, food, insecurity, aide",
      ogImage: "/public/images/carrie.jpg",
    },
  },
  {
    path: "/pages/blog/published_work.tsx",
    preview: {
      author: CARRIE,
      date: "February 13 2023",
      articleTitle: "Published Work",
      shortIntro:
        "Here you can find links to a few of my previously published articles.",
      tags: "published work, published, past, article, blog, new, hot",
      thumbnail: "/public/images/csmith.jpg",
      category: "narratives",
    },
    seo: {
      keywords:
        "published work, published, past, article, blog, new, hot, interview, producer, dmv, new, music, hot, maryland, dc, montgomery county, famous, new single",
      ogImage: "/public/images/zac_gulbranson_interview.jpg",
    },
  },
  {
    path: "/pages/blog/zac_gulbranson_interview.tsx",
    preview: {
      author: CARRIE,
      date: "February 12 2023",
      articleTitle: "Zac Gulbranson Interview",
      shortIntro:
        "Natural-Born Producer Zac Gulbranson Leaves Fans in Awe with New Single.",
      tags: "zac gulbranson, interview, producer, dmv, music, new, hot",
      thumbnail: "/public/images/zac_gulbranson_interview.jpg",
      category: "interviews",
    },
    seo: {
      keywords:
        "zac gulbranson, interview, producer, dmv, new, music, hot, maryland, dc, montgomery county, famous, new single",
      ogImage: "/public/images/zac_gulbranson_interview.jpg",
    },
  },

];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
