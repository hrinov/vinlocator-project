import { Transition } from "react-transition-group";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Progress from "../components/searchPage/Progress";
import { useState } from "react";
const SearchPage = () => {
    const [disappear, setDisappear] = useState(false);
    const defaultStyle = {
        opacity: 0,
        transition: `opacity 500ms ease-in-out`,
    }
    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };
    return (
        <>
            <Header borderLine={true} />
            <Transition in={!disappear} timeout={0} appear={true}>
                {state => (
                    <div
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                        <Progress setDisappear={setDisappear} />
                        <Footer withoutInput={true} />
                    </div>
                )
                }
            </Transition>
        </>
    )
}
export default SearchPage;