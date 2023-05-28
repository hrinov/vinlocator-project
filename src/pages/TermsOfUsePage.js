import Header from "../components/common/Header";
import PrivacyTermsQuestionsNavbar from "../components/common/PrivacyTermsQuestionsNavbar";
import SecondSearchBlock from "../components/common/SecondSearchBlock";
import Footer from "../components/common/Footer";
import MainText from "../components/termsOfUsePage/MainText";
const TermsOfUsePage = () => {
    return (
        <>
            <Header borderLine={false} />
            <PrivacyTermsQuestionsNavbar activePage='terms-of-use' />
            <MainText />
            <SecondSearchBlock />
            <Footer />
        </>
    )
}
export default TermsOfUsePage;