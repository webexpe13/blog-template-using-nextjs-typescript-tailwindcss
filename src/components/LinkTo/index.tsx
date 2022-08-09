import Link from "next/link"
import { transformPath } from "../../utils/utils"

const LinkTo = ({ href, passHref = true, newTab = false, children }: { href: string, passHref?: boolean, newTab?: boolean, children: any }) => {
    return (
        <>
            {
                newTab ?
                    <a href={transformPath(href)} target="_blank" rel="noopener noreferrer" className='text-[16px] block my-3 flex-wrap'>
                        {children}
                    </a> :
                    <Link href={transformPath(href)} passHref={passHref}>
                        {children}
                    </Link>
            }
        </>
    )
}

export default LinkTo