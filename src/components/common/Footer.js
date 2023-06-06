import styled from "styled-components";
import { ReactComponent as Logo } from '../../icons/logo-white.svg';
import { useNavigate } from "react-router-dom";
const MainWrapper = styled.div`
box-sizing: border-box;
position: relative;
padding-top: 220px;
background-color: black;
padding-bottom: 40px;
@media (max-width: 1439px) {
    padding-top: 200px;
};
@media (max-width: 1023px) {
    padding-top: 180px;
};
@media (max-width: 424px) {
    padding-top: 165px;
}
`
const DataWrapper = styled.section`
overflow: hidden;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
width: 1112px;
@media (max-width: 1439px) {
width: 900px;
};
@media (max-width: 1023px) {
width: 706px;
};
@media (max-width: 767px) {
width: 400px;
};
@media (max-width: 424px) {
width:320px;
}
`
const LogoButtonsWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
`
const LogoBlock = styled.div`
display: flex;
align-items: center;
height: 100%;
`
const ButtonsBlock = styled.div`
display: flex;
align-items: center;
height: 100%;
color: white;
`
const Button = styled.button`
width: 108px;
height: 37px;
background-color: #3AD0E6;
border: none;
font-size: 13px;
font-weight: 600;
border-radius: 40px;
margin-left: 10px;
cursor: pointer;
:hover{
    background-color: #50dff5
}
@media (max-width: 1023px) {
    font-size: 12px;
};
@media (max-width: 767px) {
    font-size: 12px;
    width: 80px;
    height: 35px;
};
@media (max-width: 424px) {
    width: 75px;
    height: 34px;
    font-weight: 500;
}
`
const InfoBlock = styled.div`
font-weight: 500;
font-size: 14px;
margin-left: 10px;
@media (max-width: 1439px) {
font-size: 13px;
};
@media (max-width: 1023px) {
font-size: 12px;
};
@media (max-width: 767px) {
display: none;
};
`
const LogoIcon = styled.div`
height: 125px;
width: 155px;
@media (max-width: 424px) {
 height: 90px;
width: 135px;
}
`
const DescriptionBlock = styled.div`
margin-top:30px;
font-weight: 700;
font-size: 14px;
line-height: 21px;
letter-spacing: 0.02em;
color: white;
 font-weight: 400;
span{
    font-weight: 700;
}
@media (max-width: 1439px) {
font-size: 13px;
};
@media (max-width: 1023px) {
font-size: 12px;
};
@media (max-width: 424px) {
margin-top:25px;
}
`
const EndBlock = styled.div`
margin-top: 90px;
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
color: white;
font-size: 12px;
font-weight: 500;
@media (max-width: 1023px) {
    margin-top: 50px;
    flex-direction: column
};
@media (max-width: 767px) {
    margin-top: 60px;
    font-size: 10px;
};
@media (max-width: 424px) {
    font-size: 11px;
    margin-top: 40px;
}
`
const Rights = styled.div`
font-weight: 400;
`
const LinksWrapper = styled.div`
width: 230px;
display: flex;
justify-content: space-between;
font-size: 14px;
span {
    text-align: end;
    text-decoration-color: none;
    display: block;
    font-weight: 500; 
    text-decoration: none;
    color: white !important;
    cursor: pointer;
    @media (max-width: 1439px) {
        width: 208px;
font-size: 13px;
};
@media (max-width: 1023px) {
margin-top: 30px;
    text-align: center;
text-decoration: underline;
text-underline-offset: 4px;
};
}
`
const Footer = ({ withoutInput }) => {
    const navigate = useNavigate();
    const handleClick = (link) => {
        navigate(link);
    }
    return (
        <MainWrapper style={withoutInput ? { paddingTop: '20px' } : null}>
            <DataWrapper>
                <LogoButtonsWrapper>
                    <LogoBlock>
                        <LogoIcon>
                            <Logo style={{ height: '100%', width: '100%' }} />
                        </LogoIcon>
                    </LogoBlock>
                    <ButtonsBlock>
                        <InfoBlock>Questions?</InfoBlock>
                        <InfoBlock>X-XXX-XXX-XXXX</InfoBlock>
                        <Button>Login In</Button>
                        <Button>Sign Up</Button>
                    </ButtonsBlock>
                </LogoButtonsWrapper>
                <DescriptionBlock>
                    <span>Vinlocator</span> is not a licensed agency or broker and does not provide insurance quotes. Bumper
                    connects users with licensed providers and agencies, like Jerry. Statements and information provided by
                    Bumper are for general information only and are not intended to take the place of professional advice from
                    a licensed insurance agent. The products offered on Bumper are from partners, from which Bumper may receive
                    compensation.
                    <br />
                    <br />
                    <span>Advertising disclaimer:</span>
                    <br />
                    Certain products and services, including vehicle purchase/sale opportunities, provided above include offers
                    from third parties and/or external partners from whom we may receive limited compensation. Please be advised
                    that these offers are provided as a convenience and are a sample, but do not necessarily include ALL offers,
                    products or services available in the marketplace.
                </DescriptionBlock>
                <EndBlock>
                    <Rights>
                        © 2023 Vinlocator.com, all rights reserved. Bumper™, and the BUMPER logo are trademarks of Bumper LLC.
                    </Rights>
                    <LinksWrapper>
                        <span onClick={() => { handleClick('/terms-of-use') }}>Terms of use</span>
                        <span onClick={() => { handleClick('/privacy-policy') }}>Privacy Policy</span>
                    </LinksWrapper>
                </EndBlock>
            </DataWrapper>
        </MainWrapper>
    )
}
export default Footer;