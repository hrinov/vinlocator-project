import styled from "styled-components";
const MainWrapper = styled.section`
height: 200px;
padding-top: 70px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 1439px) {
    padding-top: 60px;
};
@media (max-width: 1023px) {
    height: 180px;
  padding-top: 45px;
};
@media (max-width: 767px) {
     height: 120px;
  padding-top: 35px;
};
`
const TextBlock = styled.h1`
display: block;
width: 850px;
font-weight: 600;
font-size: 40px;
text-align: center;
letter-spacing: 0.02em;
text-transform: capitalize;
@media (max-width: 1439px) {
    width: 710px;
    font-size: 34px;
};
@media (max-width: 1023px) {
    font-size: 30px;
};
@media (max-width: 767px) {
     width: 420px;
     font-size: 20px;
};
@media (max-width: 424px) {
        width: 280px;
      font-size: 18px;
}
`
const MainTitle = () => {
    return (
        <MainWrapper>
            <TextBlock>
                Discover additional information about
                a vehicle that you currently possess
                or intend to buy:
            </TextBlock>
        </MainWrapper>
    )
}
export default MainTitle;