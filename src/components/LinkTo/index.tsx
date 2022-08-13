import Link from "next/link"
import { combineClasses, transformPath } from "../../utils/utils"

const LinkTo = ({ href, passHref = true, newTab = false, external = false, children, className }: { href: string, passHref?: boolean, newTab?: boolean, children?: any, external?: boolean, className?: string }) => {
    return (
        <>
            {
                newTab || external ?
                    <a href={transformPath(href)} className={className} target="_blank" rel="noopener noreferrer">
                        {children}
                    </a> :
                    <Link href={transformPath(href)} passHref={passHref}>
                        <a className={combineClasses(className, 'cursor-pointer')}>
                            {children}
                        </a>
                    </Link>
            }
        </>
    )
}

export default LinkTo