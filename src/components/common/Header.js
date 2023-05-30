import styled from "styled-components";
import { ReactComponent as Logo } from '../../icons/logo-black.svg';
import { useNavigate } from "react-router-dom";
const MainWrapper = styled.section`
overflow: hidden;
margin: 0 auto;
display: flex;
justify-content: space-between;
width: 1112px;
height: 88px;
border-bottom: ${props => props.borderLine ? '1px solid #D5DBE1' : 'none'};
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
 
}
`
const LogoBlock = styled.div`
display: flex;
align-items: center;
height: 100%;
cursor: pointer;
`
const EndBlock = styled.div`
display: flex;
align-items: center;
height: 100%;
`
const Button = styled.button`
width: 108px;
height: 37px;
background-color: #3AD0E6;
border: 1px solid rgba(0, 0, 0, 0.5);
font-size: 13px;
font-weight: 600;
border-radius: 40px;
margin-left: 10px;
cursor: pointer;
:hover{
    background-color: #50dff5
}
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
    font-size: 12px;
width: 80px;
height: 35px;
};
@media (max-width: 424px) {
 
}
`
const InfoBlock = styled.div`
font-weight: 500;
font-size: 14px;
margin-left: 10px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
 display: none
};
@media (max-width: 424px) {
 
}
`
const LogoIcon = styled.div`
height: 125px;
transform: translateX(-37px)
`
const Header = ({ borderLine }) => {
    const navigate = useNavigate();
    return (
        <MainWrapper borderLine={borderLine}>
            <LogoBlock onClick={() => { navigate('/') }}>
                <LogoIcon>
                    <Logo style={{ height: '100%' }} />
                </LogoIcon>
            </LogoBlock>

            <EndBlock>
                <InfoBlock>Questions?</InfoBlock>
                <InfoBlock>X-XXX-XXX-XXXX</InfoBlock>
                <Button>Login In</Button>
                <Button>Sign Up</Button>
            </EndBlock>
        </MainWrapper>
    )

}
export default Header;