import styled from "styled-components";
import { ReactComponent as Logo } from '../../icons/logo-white.svg';
const MainWrapper = styled.div`
box-sizing: border-box;
position: relative;
height: 740px;
padding-top: 220px;
background-color: black;

`
const DataWrapper = styled.section`
overflow: hidden;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
width: 1112px;
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
`
const InfoBlock = styled.div`
font-weight: 500;
font-size: 14px;
margin-left: 10px;
`
const LogoIcon = styled.div`
height: 125px;
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
`
const Rights = styled.div`
font-weight: 400;
`
const LinksWrapper = styled.div`
width: 255px;
display: flex;
justify-content: space-between;
a {
    display: block;
    font-weight: 500; 
    text-decoration: none;
    cursor: pointer;
}
`
const Footer = () => {
    return (
        <MainWrapper>
            <DataWrapper>
                <LogoButtonsWrapper>
                    <LogoBlock>
                        <LogoIcon>
                            <Logo style={{ height: '100%' }} />
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
                        <a>Terms & Conditions</a>
                        <a>Privacy Policy</a>
                    </LinksWrapper>
                </EndBlock>
            </DataWrapper>
        </MainWrapper>

    )
}
export default Footer;