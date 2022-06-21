import { iconsArray } from "../src/constants/appConstants";
import HomeLayout from "../src/layouts/HomeLayout";
import { combineClasses } from "../src/utils/utils";

const Icons = () => {
    return (
        <HomeLayout>
            <div className="container">
                <div className="px-15">
                    <h1 className="font-light mb-0">
                        Icons
                    </h1>
                    <p className="mb-32 mt-5">To use these icons, simply copy the text below the icon and paste in className in {"<i />"} tag, and to change the size and color of the icon use font attributes like font-12 and font-blue in className.

                        <br /> <br />
                        Example: {'<i className="icon-A font-48 font-lightBlue" />'}
                        <br />
                        <i className="icon-A font-48 font-lightBlue" />
                    </p>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-space-around">
                    {
                        iconsArray.map((icon,i) => {
                            return (
                                <div key={icon + i} className="d-flex flex-column text-center px-46 px-sm-30 py-15" style={{ flexShrink: 0, minWidth: "100px" }} >
                                    
                                    <i className={combineClasses(icon, 'font-80')} />
                                    <p className="font-light font-14">{icon}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default Icons;