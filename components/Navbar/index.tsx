import { NavbarLayouts, ContainerWidths } from "../../shared/enums";
import SimpleNavbar from './SimpleNavbar';


interface iNavbar {
    type?: NavbarLayouts;
    showSocialMedia?: boolean
    container?: ContainerWidths;
}

const Navbar = ({ type = NavbarLayouts.DEFAULT, showSocialMedia = true, container = ContainerWidths.DEFAULT }: iNavbar) => {
    const openSearch = () => {
        console.log('open search');
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