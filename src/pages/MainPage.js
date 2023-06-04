import styled from "styled-components";
import { useState } from "react";
import { Transition } from "react-transition-group";
import Header from "../components/common/Header";
import MainTitle from "../components/mainPage/MainTitle";
import FirstSearchBlock from "../components/mainPage/FirstSearchBlock";
import ServiceDescription from "../components/mainPage/ServiceDescription";
import SecurityAssurence from "../components/mainPage/SecurityAssurence";
import Reviews from "../components/mainPage/Reviews";
import SecondSearchBlock from "../components/common/SecondSearchBlock";
import Footer from "../components/common/Footer";
import firstBlueLineralGr from '../images/first-blue-lineral-gr.svg'
const GradientBlock = styled.div`
position: absolute;
width: 1440px;
left: 50vw;
transform: translateX(-50%);
height: 1322px;
z-index: -10;
background-image: url(${firstBlueLineralGr});
background-size: cover;
background-repeat: no-repeat;
@media (max-width: 1439px) {
    width: 100%;
    height: 1307px;
};
@media (max-width: 1023px) {
    height: 1172px;
};
@media (max-width: 767px) {
    height: 882px;
};
@media (max-width: 424px) {
    height: 477px;
}
`
const MainPage = () => {
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
        <Transition in={!disappear} timeout={0} appear={true}>
            {state => (
                <div
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                    <GradientBlock />
                    <Header borderLine={true} />
                    <MainTitle />
                    <FirstSearchBlock setDisappear={setDisappear} />
                    <ServiceDescription />
                    <SecurityAssurence />
                    <Reviews />
                    <SecondSearchBlock setDisappear={setDisappear} />
                    <Footer withoutInput={false} />
                </div>)}
        </Transition>
    )
}
export default MainPage;