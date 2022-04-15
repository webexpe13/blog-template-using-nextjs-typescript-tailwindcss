import { useState } from "react";
import { combineClasses } from "../../utils/utils";
import classes from './Search.module.scss';
import Article from "../ArticleCards/SearchArticleCard";
import ARTICLES_LIST from '../../../pages/_ARTICLES_LIST';

const Search = () => {
    console.log('hello');
    const [searchStr, setSearchStr] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const handleSearch = () => {
        console.log(searchStr);
        const data = [...ARTICLES_LIST];
        const results = data.filter((article) => (article.component.preview.tags.join().indexOf(searchStr) >= 0
            || article.component.preview.articleTitle.indexOf(searchStr) >= 0)
        );
        console.log(results);

        setSearchResults(results)
    }
    return (
        <div className="bg-offWhite">
            <div className="container">
                <div className={combineClasses('d-flex justify-space-between align-center px-10')}>
                    <h1 className={'font-45'}>Search</h1>
                    <div>X</div>
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
                            <Article article={article.component.preview} key={i} />
                        ))
                    }
                </div>}

            </div>
        </div>
    )
};

export default Search;