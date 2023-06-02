import Header from "../components/common/Header";
import PaymentOptions from "../components/paymentPage/PaymentOptions";
import Footer from "../components/common/Footer";
const PaymentPage = () => {
    return (
        <>
            <Header borderLine={false} />
            <PaymentOptions />
            <Footer withoutInput={true} />
        </>
    )
}
export default PaymentPage;