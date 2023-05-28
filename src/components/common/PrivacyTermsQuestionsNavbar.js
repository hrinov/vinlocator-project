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
`
const NavElement = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #D5DBE1;
font-weight: 700;
font-size: 18px;
cursor: pointer;
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