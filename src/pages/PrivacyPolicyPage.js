import Header from "../components/common/Header";
import PrivacyTermsQuestionsNavbar from "../components/common/PrivacyTermsQuestionsNavbar";
import SecondSearchBlock from "../components/common/SecondSearchBlock";
import Footer from "../components/common/Footer";
import MainText from "../components/privacyPolicyPage/MainText";
const PrivacyPolicyPage = () => {
    return (
        <>
            <Header borderLine={false} />
            <PrivacyTermsQuestionsNavbar activePage='privacy-policy' />
            <MainText />
            <SecondSearchBlock />
            <Footer />
        </>
    )
}
export default PrivacyPolicyPage;