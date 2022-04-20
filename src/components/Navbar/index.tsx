import { NavbarLayouts, ContainerWidths, THEMES } from "../../shared/enums";
import SimpleNavbar from './SimpleNavbar';
import CenteredNavbar from './Centered';
import { useEffect, useState } from "react";
import { getTheme, isMobileDevice } from "../../utils/utils";
import NavSidebar from './NavSideBar';

interface iNavbar {
    type?: NavbarLayouts;
    showSocialMedia?: boolean
    container?: ContainerWidths;
}

const Navbar = ({ type = NavbarLayouts.DEFAULT, showSocialMedia = true, container = ContainerWidths.DEFAULT }: iNavbar) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    const [isMobile, setIsMobile] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);


    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    const changeTheme = () => {
        localStorage.setItem("theme", theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
        location.reload();
    };

    const [scrolled, setScrolled] = useState(false);
    let lastScrollTop = 0;
    useEffect(() => {
        window.onscroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const scrollYDistance = window.scrollY;
            if (scrollYDistance > 100 && st > lastScrollTop) {
                setScrolled(true);
            } else if (scrollYDistance > 50 && st < lastScrollTop) {
                setScrolled(false);
            }
            lastScrollTop = st <= 0 ? 0 : st;
            // if (scrollYDistance > 50) {
            //     setScrolled(true);
            // } else {
            //     setScrolled(false);
            // }
        };

        setIsMobile(isMobileDevice());

        return () => {
            setScrolled(false);
        };
    }, []);

    const openSearch = () => {
        console.log('open search');
    }

    const toggleSideMenu = () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <>
            {
                isMobile ? <SimpleNavbar
                    container={container}
                    showSocial={showSocialMedia}
                    openSearch={openSearch}
                    scrolled={scrolled}
                    theme={theme}
                    changeTheme={changeTheme}
                    toggleSideMenu={toggleSideMenu}
                    openSidebar={openSidebar}
                /> :
                    (() => {
                        switch (type) {
                            case NavbarLayouts.DEFAULT:
                                return (
                                    <SimpleNavbar
                                        container={container}
                                        showSocial={showSocialMedia}
                                        openSearch={openSearch}
                                        scrolled={scrolled}
                                        theme={theme}
                                        changeTheme={changeTheme}
                                        toggleSideMenu={toggleSideMenu}
                                        openSidebar={openSidebar}
                                    />);
                            case NavbarLayouts.CENTERED:
                                return (
                                    <CenteredNavbar
                                        container={container}
                                        showSocial={showSocialMedia}
                                        openSearch={openSearch}
                                        scrolled={scrolled}
                                        theme={theme}
                                        changeTheme={changeTheme}
                                    />);
                            default:
                                return (
                                    <SimpleNavbar
                                        container={container}
                                        showSocial={showSocialMedia}
                                        openSearch={openSearch}
                                        scrolled={scrolled}
                                        theme={theme}
                                        changeTheme={changeTheme}
                                        toggleSideMenu={toggleSideMenu}
                                        openSidebar={openSidebar}
                                    />
                                );
                        }
                    })()
            }

            <NavSidebar openSidebar={openSidebar} theme={theme} closeNavSidebar={() => setOpenSidebar(false)} />
        </>
    )
}

export default Navbar