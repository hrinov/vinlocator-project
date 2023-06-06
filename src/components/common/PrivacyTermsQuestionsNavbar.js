import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const MainWrapper = styled.section`
margin: 0 auto;
margin-top: 7px;
height: 64px;
width: 1112px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: rgba(0, 0, 0, 0.5);
column-gap: 1px;
border: 1px solid rgba(0, 0, 0, 0.5);
@media (max-width: 1439px) {
width: 900px;
};
@media (max-width: 1023px) {
    height: 60px;
  width: 706px;
};
@media (max-width: 767px) {
    grid-template-columns: 0.9fr 0.85fr 1.25fr;
        height: 53px;
 width: 420px;
};
@media (max-width: 424px) {
    grid-template-columns: 0.9fr 0.84fr 1.26fr;
  width: 320px;
  height: 55px;
}
`
const NavElement = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #D5DBE1;
font-weight: 700;
font-size: 18px;
cursor: pointer;
@media (max-width: 1439px) {
    font-weight: 600;
font-size: 17px;
};
@media (max-width: 1023px) {
  font-weight: 600;
font-size: 16px;
};
@media (max-width: 767px) {
  font-weight: 500;
font-size: 14px;
};
@media (max-width: 424px) {
font-size: 12px;
}
`
const PrivacyTermsQuestionsNavbar = ({ activePage }) => {
    const navigate = useNavigate();
    return (
        <MainWrapper>
            <NavElement
                onClick={() => { navigate('/privacy-policy') }}
                style={activePage === 'privacy-policy' ? { backgroundColor: '#3AD0E6' } : null}>
                Privacy Policy
            </NavElement>
            <NavElement
                onClick={() => { navigate('/terms-of-use') }}
                style={activePage === 'terms-of-use' ? { backgroundColor: '#3AD0E6' } : null}>
                Terms of Use
            </NavElement>
            <NavElement
                onClick={() => { navigate('/common-questions') }}
                style={activePage === 'common-questions' ? { backgroundColor: '#3AD0E6' } : null}>
                Common Questions
            </NavElement>
        </MainWrapper>
    )
}
export default PrivacyTermsQuestionsNavbar;