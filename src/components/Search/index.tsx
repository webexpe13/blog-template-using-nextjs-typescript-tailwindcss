import { combineClasses } from "../../utils/utils";

interface iSearch {
    searchStr?: any
    setSearchStr?: any
}

const Search = ({ searchStr, setSearchStr }: iSearch) => {
    console.log('hello');
    return (
        <div>
            <div className={combineClasses('d-flex', 'justify-space-between', 'align-center')}>
                <h1 className={'font-45'}>Search</h1>
                <div>X</div>
            </div>
            <input
                value={searchStr}
                onChange={(e) => setSearchStr(e?.target?.value)}
            />
        </div>
    )
};

export default Search;