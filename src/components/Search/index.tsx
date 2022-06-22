import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { combineClasses, getTheme } from "../../utils/utils";
import classes from './Search.module.scss';
import SearchArticleCard from "../ArticleCards/SearchArticleCard";
import ARTICLES_LIST from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { THEMES } from "../../shared/enums";

interface ISearch {
    setShowSearch: Dispatch<SetStateAction<boolean>>
}
const Search = ({ setShowSearch }: ISearch) => {
    const [searchStr, setSearchStr] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const handleSearch = () => {
        const data = [...ARTICLES_LIST];
        const results = data.filter((article) => (article.preview.tags.join().indexOf(searchStr) >= 0
            || article.preview.articleTitle.indexOf(searchStr) >= 0)
        );
        setSearchResults(results)
        console.log(searchResults);
        
    }

    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        <div className={combineClasses('bg-offWhite', classes?.search_container, theme === THEMES.DARK ? classes.dark : null)}>
            <div className="container">
                <div className={combineClasses('d-flex justify-space-between align-center px-10')}>
                    <h1 className={'font-45'}>Search</h1>
                    <button type="button" className={classes.search_close_icon} onClick={() => setShowSearch(false)}><span></span></button>
                </div>
                <div className="px-10 mb-40">
                    <input
                        className={combineClasses(classes?.search_input, 'font-20')}
                        placeholder="Enter keywords and seperate with commas"
                        value={searchStr}
                        onChange={(e) => setSearchStr(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>

                {searchResults?.length > 0 && <div className='articles_cont d-flex'>
                    {
                        searchResults?.length > 0 && searchResults?.map((article, i) => (
                            <SearchArticleCard article={article.preview} key={i} theme={theme} path={article.path} />
                        ))
                    }
                </div>}

            </div>
        </div>
    )
};

export default Search;