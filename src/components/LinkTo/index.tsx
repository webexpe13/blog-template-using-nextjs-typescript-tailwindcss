import Link from "next/link"
import { transformPath } from "../../utils/utils"

const LinkTo = ({ href, passHref = true, newTab = false, external = false, children, className }: { href: string, passHref?: boolean, newTab?: boolean, children?: any, external?: boolean, className?: any }) => {
    return (
        <>
            {
                newTab || external ?
                    <a href={transformPath(href)} className={className} target="_blank" rel="noopener noreferrer">
                        {children}
                    </a> :
                    <Link href={transformPath(href)} passHref={passHref}>
                        <a className={className}>
                            {children}
                        </a>
                    </Link>
            }
        </>
    )
}

export default LinkTo