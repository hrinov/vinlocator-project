import styled from "styled-components";
const MainWrapper = styled.section`
margin: 0 auto;
width: 1112px;
display: flex;
@media (max-width: 1439px) {
    width: 900px;
};
@media (max-width: 1023px) {
     width: 706px; 
};
@media (max-width: 767px) {
    width: 420px; 
};
@media (max-width: 424px) {
    width: 320px;
}
`
const LeftSide = styled.div`
width: 50%;
`
const RightSide = styled.div`
width: 50%;
`
const PaymentOptions = () => {
    return (
        <MainWrapper>
            <LeftSide>
                Left side
            </LeftSide>

            <RightSide>
                Right side
            </RightSide>
        </MainWrapper>
    )
}
export default PaymentOptions;