import styled from "styled-components";
import { ReactComponent as Logo } from '../../icons/logo-black.svg';
import firstBlueLineralGr from '../../images/first-blue-lineral-gr.svg'
const GradientBlock = styled.div`
position: absolute;
width: 1440px;
left: 50vw;
transform: translateX(-50%);
height: 1318px;
z-index: -10;
background-image: url(${firstBlueLineralGr});
`
const MainWrapper = styled.section`
overflow: hidden;
margin: 0 auto;
display: flex;
justify-content: space-between;
width: 1112px;
height: 88px;
border-bottom: 1px solid #D5DBE1;
`
const LogoBlock = styled.div`
display: flex;
align-items: center;
height: 100%;
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
`
const InfoBlock = styled.div`
font-weight: 500;
font-size: 14px;
margin-left: 10px;
`
const LogoIcon = styled.div`
height: 125px;
transform: translateX(-37px)
`
const Header = () => {
    return (
        <>
            <GradientBlock />
            <MainWrapper>
                <LogoBlock>
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
        </>
    )

}
export default Header;