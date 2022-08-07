import HomeLayout from "../../../src/layouts/HomeLayout";
import Text from "../../../src/components/Text";
import { TextAs } from "../../../src/shared/enums";

const HomeLayoutExample = () => {

    return (
        <HomeLayout>
            <div className={"container mt-10 pt-5 md:pt-0 px-3"}>
                <Text className="" title>
                    Home layout Example
                </Text>
            </div>
        </HomeLayout>
    )
}

export default HomeLayoutExample