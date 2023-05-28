import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Progress from "../components/presearchPage/Progress";
const PresearchPage = () => {
    return (
        <>
            <Header borderLine={true} />
            <Progress />
            <Footer />
        </>

    )
}
export default PresearchPage;