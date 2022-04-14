import { NavbarLayouts, ContainerWidths } from "../../shared/enums";
import SimpleNavbar from './SimpleNavbar';


interface iNavbar {
    type?: NavbarLayouts;
    showSocialMedia?: boolean
    container?: ContainerWidths;
    setsearchStr?: any
}

const Navbar = ({ type = NavbarLayouts.DEFAULT,
    showSocialMedia = true,
    container = ContainerWidths.DEFAULT,
    setsearchStr
}: iNavbar) => {

    const openSearch = () => {
        setsearchStr && setsearchStr(true);
    }

    return (
        <>
            {(() => {
                switch (type) {
                    case NavbarLayouts.DEFAULT:
                        return (<SimpleNavbar container={container} showSocial={showSocialMedia} openSearch={openSearch} />);
                    default:
                        return (<SimpleNavbar showSocial={showSocialMedia} openSearch={openSearch} />);
                }
            })()}
        </>
    )
}

export default Navbar