import Header from "../components/common/Header";
import PaymentOptions from "../components/paymentPage/PaymentOptions";
import Footer from "../components/common/Footer";
import { Transition } from "react-transition-group";
const PaymentPage = () => {
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
            <Header borderLine={false} />
            <Transition in={true} timeout={0} appear={true}>
                {state => (
                    <div
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                        <PaymentOptions />
                        <Footer withoutInput={true} />
                    </div>
                )}
            </Transition>
        </>
    )
}
export default PaymentPage;