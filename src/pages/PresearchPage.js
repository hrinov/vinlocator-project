import { Transition } from "react-transition-group";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Progress from "../components/presearchPage/Progress";
import SelectType from "../components/presearchPage/SelectType";
import { useState } from "react";
const PresearchPage = () => {
    const [disappear, setDisappear] = useState(false);
    const [scene, setScene] = useState('progress');
    const changeScene = () => {
        setDisappear(true);
        setTimeout(() => {
            setScene('SelectType')
            setDisappear(false);
        }, 900)
    }
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

                        {scene === 'progress' ?
                            <Progress changeScene={changeScene} /> :
                            <SelectType />}
                    </div>
                )
                }
            </Transition>
            <Footer />
        </>

    )
}
export default PresearchPage;