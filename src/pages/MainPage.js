import styled from "styled-components";
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
height: 1318px;
z-index: -10;
background-image: url(${firstBlueLineralGr});
`
const MainPage = () => {
    return (
        <>
            <GradientBlock />
            <Header borderLine={true} />
            <MainTitle />
            <FirstSearchBlock />
            <ServiceDescription />
            <SecurityAssurence />
            <Reviews />
            <SecondSearchBlock />
            <Footer />
        </>
    )
}
export default MainPage;