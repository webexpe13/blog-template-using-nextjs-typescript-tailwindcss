import { combineClasses } from "../../utils/utils"

const ArticleTags = ({ tags, center = false }: { tags: string, center?: boolean }) => {
    return (
        <div className={combineClasses('md:mt-2 flex flex-wrap', center && 'justify-center')}>
            {
                tags.split(',').map((each, i) => (
                    <p key={i} className="text-[12px] font-normal mr-2 mb-1 inline-block text-gray-500 dark:text-gray-400" >#{each.trim()}</p>
                ))
            }
        </div>
    )
}

export default ArticleTags