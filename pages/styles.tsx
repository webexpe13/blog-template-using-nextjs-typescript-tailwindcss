import SectionSeperator from "../src/components/SectionSeperator"
import HomeLayout from "../src/layouts/HomeLayout"
import { SectionSeperatorTypes } from "../src/shared/enums"

const Styling = () => {
    const fontSizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 45, 48, 64, 66, 68, 70, 72, 76, 80];
    const colors = ["white", "offWhite", "gray", "darkGray", "black", "spaceGray", "darkSpaceGray", "blue", "darkBlue", "darkBlue2", "darkBlue1", "lightBlue", "grey"];
    const fontWeights = ["light", "regular", "medium", "semi", "bold"];
    const textAlign = ["left", "right", "center", "justify"];
    const spacing = [0, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 46, 48, 50, 52, 54, 56, 58, 60,
        64, 68, 70, 74, 78, 80, 90, 100, 110, 120];
    const widths = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

    return (
        <HomeLayout>
            <div className="container px-15">
                <h1>How to Style Classes available in the template</h1>
                <hr />
                <p>
                    <i>* all the values are in pixels (px)</i> <br />
                    <i>* breakpoints sm(mobile), md(tabs), lg(large desktop devices)</i>
                </p>
                <h3 className="mb-0 mt-30 font-26">
                    Font sizes, Fonts weights, Font colors, text alignments
                </h3>
                <p>
                    Available font sizes :  <br />
                    {
                        fontSizes.map((each, i) => <span key={i}>{each}, </span>)
                    }
                </p>
                <p>
                    Available font colors:  <br />
                    {
                        colors.map((each, i) => <span key={each}>{each}, </span>)
                    }
                </p>
                <p>
                    Available font weights:  <br />
                    {
                        fontWeights.map((each, i) => <span key={each}>{each}, </span>)
                    }
                </p>
                <p>
                    Available text alignments:  <br />
                    {
                        textAlign.map((each, i) => <span key={each}>{each}, </span>)
                    }
                </p>
                <p>
                    How to use: <br />
                    <b><i>font-12, font-18, font-blue, font-grey, font-semi, font-medium</i></b><br />
                </p>
                <p>
                    For font size on mobile or tab put sm for mobile and md for tab before the number <br />
                    <b><i>font-sm-12, font-md-18...</i></b>
                </p>
                <p className="bg-grey font-black px-15 py-10">

                    Example: <b>{'<p className="font-48 font-sm-18 font-md-22 font-lightBlue font-semi">Hello</p>'}</b> <br />
                    This will display Hello on size 48 in large devices, 18 in mobile devices and 22 in tablets, color will be light blue, and font weight will be semi bold
                </p>
                <SectionSeperator type={SectionSeperatorTypes.DOTS} />
                <h3 className="mb-0 mt-30 font-26">
                    Background Colors
                </h3>

                <p>
                    Available colors:  <br />
                    {
                        colors.map((each, i) => <span key={each}>{each}, </span>)
                    }
                </p>

                <p className="bg-grey font-black px-15 py-10">
                    How to use: <br />
                    <b><i>bg-blue, bg-grey</i></b><br />
                </p>

                <p>
                    Example: <b>{'<div className="bg-lightBlue">Hello</div>'}</b>
                </p>
                <SectionSeperator type={SectionSeperatorTypes.DOTS} />
                <h3 className="mb-0 mt-30 font-26">
                    Padding and Margins
                </h3>
                <p>
                    Available sizes :  <br />
                    {
                        spacing.map((each, i) => <span key={'space' + i}>{each}, </span>)
                    }
                </p>
                <p>
                    The classes are named using the format {'{property}{sides}-{size}'} for mobile and {'{property}{sides}-{breakpoint}-{size}'} for sm, md, lg.
                </p>

                <div className="d-flex flex-wrap justify-space-between">
                    <div>
                        <p>
                            Property
                            <ul>
                                <li>m - for classes that set margin</li>
                                <li>p - for classes that set padding</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <p>
                            sides
                            <ul>
                                <li>t - for classes that set margin-top or padding-top</li>
                                <li>b - for classes that set margin-bottom or padding-bottom</li>
                                <li>x - for classes that set both *-left and *-right</li>
                                <li>y - for classes that set both *-top and *-bottom</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="bg-grey font-black px-15 py-10">
                    <p>

                        Example: <b>{'<div className="px-15 py-10 mt-30 px-sm-5">Hello</div>'}</b> <br />
                        This will give a div/element a padding of 15 on left and right, padding 10 in top, bottom and 10 marging top and padding x of 5 in mobile devices
                    </p>
                </div>
                <SectionSeperator type={SectionSeperatorTypes.DOTS} />
                <h3 className="mb-0 mt-30 font-26">
                    Widths
                </h3>
                <p>
                    Available sizes :  <br />
                    {
                        widths.map((each, i) => <span key={'width' + i}>{each}, </span>)
                    }
                </p>
                <p>
                    The classes are named using the format {'width-{size}'} for mobile and {'width-{breakpoint}-{size}'} for sm, md, lg.
                </p>
                <div className="bg-grey font-black px-15 py-10">
                    <p>

                        Example: <b>{'<div className="width-lg-50 with-sm-80">Hello</div>'}</b> <br />
                        This will give a div/element of width 50% on desktop devices and of width 80% on mobile.
                    </p>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Styling