import styled from "styled-components";
import firstBlueLineralGr from '../images/first-blue-lineral-gr.svg'
import Header from "../components/mainPage/Header";
import MainTitle from "../components/mainPage/MainTitle";
import FirstSearchBlock from "../components/mainPage/FirstSearchBlock";
import ServiceDescription from "../components/mainPage/ServiceDescription";
import SecurityAssurence from "../components/mainPage/SecurityAssurence";
import Reviews from "../components/mainPage/Reviews";
import SecondSearchBlock from "../components/mainPage/SecondSearchBlock";
import Footer from "../components/mainPage/Footer";
const MainWrapper = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
min-height: 100vh;
width: 1440px;
`
const Gradient = styled.div`
font-family: 'Montserrat', sans-serif;
margin: 0 auto;
width: 1440px;
height: 1318px;
background-image: url(${firstBlueLineralGr});
`
const MainPage = () => {
    return (
        <MainWrapper>
            <Gradient>
                <Header />
                <MainTitle />
                <FirstSearchBlock />
                <ServiceDescription />
                <SecurityAssurence />
                <Reviews />
                <SecondSearchBlock />
                <Footer />
            </Gradient>
        </MainWrapper>)
}
export default MainPage;