import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { combineClasses, isDarkTheme } from "../../utils/utils";
import classes from './Search.module.scss';
import SearchArticleCard from "../ArticleCards/SearchArticleCard";
import { ARTICLES_LIST } from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';

interface ISearch {
    setShowSearch: Dispatch<SetStateAction<boolean>>
}
const Search = ({ setShowSearch }: ISearch) => {
    const [searchStr, setSearchStr] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const handleSearch = () => {
        const data = [...ARTICLES_LIST];
        const results = data.filter((article) => (article.preview.tags.split(',').join().indexOf(searchStr) >= 0
            || article.preview.articleTitle.indexOf(searchStr) >= 0)
        );
        setSearchResults(results)
        console.log(searchResults);

    }

    const [isDark, setTheme] = useState(false);
    useEffect(() => {
        setTheme(isDarkTheme());
    }, [isDark]);

    return (
        <div className={combineClasses('bg-slate-100', classes?.search_container, isDark ? classes.dark : null)}>
            <div className="container mx-auto">
                <div className="px-3">
                    <div className={combineClasses('flex justify-between items-center')}>
                        <h1 className={'text-[45px] font-bold pt-10'}>Search</h1>
                        <button type="button" className={classes.search_close_icon} onClick={() => setShowSearch(false)}><span></span></button>
                    </div>
                    <div className="mb-[40px] mt-3">
                        <input
                            className={combineClasses('text-[20px] w-full bg-inherit border-b border-gray-400 p-2')}
                            placeholder="Enter keywords and seperate with commas"
                            value={searchStr}
                            onChange={(e) => setSearchStr(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </div>
                </div>

                {searchResults?.length > 0 && <div className='flex flex-wrap'>
                    {
                        searchResults?.length > 0 && searchResults?.map((article, i) => (
                            <SearchArticleCard article={article.preview} key={i} isDark={isDark} path={article.path} />
                        ))
                    }
                </div>}

            </div>
        </div>
    )
};

export default Search;