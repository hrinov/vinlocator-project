import Header from "../components/common/Header";
import PrivacyTermsQuestionsNavbar from "../components/common/PrivacyTermsQuestionsNavbar";
import SecondSearchBlock from "../components/common/SecondSearchBlock";
import Footer from "../components/common/Footer";
import MainText from "../components/commonQuestionsPage/MainText";
const CommonQuestionsPage = () => {
    return (
        <>
            <Header borderLine={false} />
            <PrivacyTermsQuestionsNavbar activePage='common-questions' />
            <MainText />
            <SecondSearchBlock />
            <Footer />
        </>
    )
}
export default CommonQuestionsPage;