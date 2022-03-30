import { BlogLayouts } from '../../shared/enums';
import Centered from './Centered';
import WithSidebar from './WithSidebar';

const BlogLayout = ({ layout = BlogLayouts.WITH_SIDEBAR, children }: any) => {
    return (
        <>
            {(() => {
                switch (layout) {
                    case BlogLayouts.WITH_SIDEBAR:
                        return (<WithSidebar children={children} />);
                    case BlogLayouts.CENTERED:
                        return (<Centered children={children} />);
                    default:
                        return (<WithSidebar children={children} />);
                }
            })()}
        </>
    )
}
export default BlogLayout;