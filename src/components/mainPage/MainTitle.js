import styled from "styled-components";
const MainWrapper = styled.section`
height: 240px;
padding-top: 20px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
const TextBlock = styled.h1`
font-weight: 600;
font-size: 40px;
text-align: center;
letter-spacing: 0.02em;
text-transform: capitalize;
`
const MainTitle = () => {
    return (
        <MainWrapper>
            <TextBlock>
                Discover additional information about
                <br />
                a vehicle that you currently possess
                <br />
                or intend to buy:
            </TextBlock>
        </MainWrapper>
    )
}
export default MainTitle;