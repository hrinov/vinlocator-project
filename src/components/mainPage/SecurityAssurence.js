import styled from "styled-components";
import { ReactComponent as Shield } from '../../images/shield.svg';
const MainWrapper = styled.div`
margin: 0 auto;
width: 1030px;
height: 430px;
display: flex;
justify-content: space-between;
`
const ShieldIcon = styled(Shield)`
height: 387px;
width: 470px;
`
const InfoBlockWrapper = styled.div`
margin-top: 150px;
width: 491px;
display: flex;
flex-direction: column;
span{
    font-weight: 700
}
`
const InfoBlockTitle = styled.div`
font-weight: 600;
font-size: 26px;
margin-bottom: 10px;
`
const InfoBlock = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.015em;
`
const SecurityAssurence = () => {
    return (
        <MainWrapper>
            <ShieldIcon />
            <InfoBlockWrapper>
                <InfoBlockTitle>Vehicle safety</InfoBlockTitle>
                <InfoBlock>
                    <span>Vinlocator</span> offers a comprehensive analysis of a vehicle's NHTSA safety ratings,
                    which is a crucial factor for many drivers prioritizing safety. Our platform provides
                    a detailed overview of these ratings, helping you make an informed decision about whether
                    a particular vehicle meets your safety requirements. Additionally, we offer information
                    on safety complaints filed by consumers to the NHTSA, ensuring that you have access to all
                    relevant safety details when considering a vehicle.
                </InfoBlock>
            </InfoBlockWrapper>

        </MainWrapper>
    )
}
export default SecurityAssurence;