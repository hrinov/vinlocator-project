import styled from "styled-components";
import { ReactComponent as Logo } from '../../icons/logo.svg';
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
border: 1px solid #000000;
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
const LogoIcon = styled(Logo)`
height: 140%;
transform: translateX(-25px)
`
const Header = () => {
    return (
        <MainWrapper>
            <LogoBlock>
                <LogoIcon />
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