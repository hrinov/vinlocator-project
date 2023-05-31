import styled from "styled-components";
import shield from '../../images/shield.png';
const MainWrapper = styled.div`
margin: 0 auto;
width: 1030px;
height: 430px;
display: flex;
justify-content: space-between;
@media (max-width: 1439px) {
    width: 900px;
    height: 320px;
};
@media (max-width: 1023px) {
    margin-top: 100px;
    width: 706px;
    height: 290px;
};
@media (max-width: 767px) {
    text-align: center;
    height: 500px;
    width: 420px;
    flex-direction: column;
   align-items: center;
};
@media (max-width: 424px) {
    margin-top: 80px;
}
`
const ShieldIcon = styled.img`
height: 357px;
width: 470px;
@media (max-width: 1439px) {
    width: 400px;
};
@media (max-width: 1023px) {
    height: 287px;
    width: 345px;
};
@media (max-width: 767px) {

};
@media (max-width: 424px) {

}
`
const InfoBlockWrapper = styled.div`
margin-top: 84px;
width: 491px;
display: flex;
flex-direction: column;
span{
    font-weight: 700
}
@media (max-width: 1439px) {
margin-top: 80px;
};
@media (max-width: 1023px) {
margin-top: 20px;
};
@media (max-width: 767px) {
    width: 420px;
margin: 40px auto 0 auto;
};
@media (max-width: 424px) {
  width: 316px;
}
`
const InfoBlockTitle = styled.div`
font-weight: 600;
font-size: 26px;
margin-bottom: 10px;
@media (max-width: 1439px) {
font-size: 20px;
};
@media (max-width: 1023px) {
font-size: 17px;
};
@media (max-width: 767px) {
width: 420px;
};
@media (max-width: 424px) {
width: 316px;
}
`
const InfoBlock = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.015em;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
width: 420px;
};
@media (max-width: 424px) {
width: 316px;
}
`
const SecurityAssurence = () => {
    return (
        <MainWrapper>
            <ShieldIcon src={shield} />
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