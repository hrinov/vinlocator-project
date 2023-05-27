import Header from "../components/mainPage/Header";
import MainTitle from "../components/mainPage/MainTitle";
import FirstSearchBlock from "../components/mainPage/FirstSearchBlock";
import ServiceDescription from "../components/mainPage/ServiceDescription";
import SecurityAssurence from "../components/mainPage/SecurityAssurence";
import Reviews from "../components/mainPage/Reviews";
import SecondSearchBlock from "../components/mainPage/SecondSearchBlock";
import Footer from "../components/mainPage/Footer";
const MainPage = () => {
    return (
        <>
            <Header />
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