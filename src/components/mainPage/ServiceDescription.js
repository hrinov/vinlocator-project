import styled from "styled-components";
import { ReactComponent as UserSquare } from '../../icons/user-square.svg';
import { ReactComponent as SmartCar } from '../../icons/smart-car.svg';
import { ReactComponent as Shop } from '../../icons/shop.svg';
import { ReactComponent as Gallery } from '../../icons/gallery.svg';
import { ReactComponent as LockSlash } from '../../icons/lock-slash.svg';
import { ReactComponent as DollarSquare } from '../../icons/dollar-square.svg';
import { ReactComponent as Subtitle } from '../../icons/subtitle.svg';
import { ReactComponent as Danger } from '../../icons/danger.svg';
import { ReactComponent as CardTick } from '../../icons/card-tick.svg';
import { ReactComponent as Car } from '../../icons/car.svg';
import { ReactComponent as ShieldCross } from '../../icons/shield-cross.svg';
import { ReactComponent as ShieldTick } from '../../icons/shield-tick.svg';
import { ReactComponent as Rectangle511 } from '../../icons/rectangle511.svg';
import { ReactComponent as SearchFavorite } from '../../icons/search-favorite.svg';
import { ReactComponent as First3dCar } from '../../images/first-3d-car.svg';
import secondBlueLineralGr from '../../images/second-blue-lineral-gr.svg';
const MainWrapper = styled.section`
margin: 0 auto;
width: 1112px;
display: flex;
flex-direction: column;
align-items: center;
`
const MainTitle = styled.h2`
font-weight: 600;
font-size: 32px;
text-align: center;
`
const AdditionalTitle = styled.div`
text-align: center;
font-weight: 400;
font-size: 18px;
line-height: 26px;
    h1{
    display: inline;
    font-weight: 400;
    font-size: 18px;
    font-weight: 700;  
}
`
const FirstBlock = styled.div`
width: 100%;
height: 430px;
display: flex;
align-items: center;
justify-content: space-between;
`
const InfoBlockWrapper = styled.div`
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
const FirstGraphicBlock = styled.div`
width: 545px;
display: grid;
row-gap: 14px;
grid-auto-rows: 40px;
    .first-row {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 200px 140px 163px;
    }
    .second-row {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 44px 120px 116px 180px;
    }
    .third-row {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 89px 168px 124px 153px;
    }
    .fourth-row {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 56px 124px 124px 140px;
  }
    .fifth-row {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 20px 168px 160px 115px;
  }
`;
const FirstGraphicBlockElement = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 21px;
padding-right: 21px;
background: linear-gradient(180deg, #FFFFFF 0%, #DBDEE7 100%);
box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
border-radius: 20px;
font-weight: 600;
font-size: 11px;
text-transform: uppercase;
`
const SecondBlock = styled.div`
width: 100%;
height: 645px;
display: flex;
align-items: center;
justify-content: space-between;`
const SecondGraphicBlockElement = styled(First3dCar)`
width: 694px;
height: 480px;
`
const ThirdBlock = styled.div`
box-sizing: border-box;
position: relative;
background-color: white;
z-index: 10;
margin: 0 auto;
padding-left: 50px;
padding-right: 70px;
display: flex;
align-items: center;
justify-content: space-between;
width: 1112px;
height: 332px;
border: 1px solid #000000;
box-shadow: 0px 30px 20px rgba(0, 0, 0, 0.04);
border-radius: 30px;
`
const ListingsLabel = styled.div`
position: absolute;
top: -20px;
left: 32px;
box-sizing: border-box;
height: 40px;
width: 124px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 21px;
padding-right: 21px;
background: linear-gradient(180deg, #FFFFFF 0%, #DBDEE7 100%);
box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
border-radius: 20px;
font-weight: 600;
font-size: 11px;
text-transform: uppercase;
`
const SalseListingLeftSideWrapper = styled.div`
width: 300px;
display: grid;
grid-template-columns: 115px 180px;
grid-auto-rows: 32px;
`
const SalesListingLeftSideBlock = styled.div`
font-weight: 400;
font-size: 12px;
color: rgba(0, 0, 0, 0.6);
span {
font-weight: 500;
font-size: 14px;
color: rgba(0, 0, 0, 0.95);
}
`
const SalesListingRightSideWrapper = styled.div`
width: 581px;
display: flex;
flex-direction: column;
span{
    font-weight: 700
}
`
const FourthBlock = styled.div`
box-sizing: border-box;
width: 1440px;
height: 890px;
padding-left: 164px;
display: flex;
align-items: center;
justify-content: space-between;
background-image: url(${secondBlueLineralGr});
transform: translateY(-157px)
`



const IconWrapper = styled.div`
width: 24px;
height: 24px`
const ServiceDescription = () => {
    return (
        <MainWrapper>
            <MainTitle>
                What information can I find in my Vinlocator
                <br />
                vehicle history report?
            </MainTitle>
            <AdditionalTitle>
                When running a VIN, license plate, or make and model search on <h1>Vinlocator</h1>, you can expect
                <br />
                to receive a comprehensive vehicle history report that covers nearly 15 different categories. Here
                <br />
                are some examples of the reports you might receive:
            </AdditionalTitle>

            <FirstBlock>
                <FirstGraphicBlock>
                    <div className="first-row">
                        <FirstGraphicBlockElement><IconWrapper><UserSquare /></IconWrapper>Number of owners</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><SmartCar /></IconWrapper>accidents</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><Shop /></IconWrapper>market value</FirstGraphicBlockElement>
                    </div>
                    <div className="second-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper><Gallery /></IconWrapper>Photos</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><LockSlash /></IconWrapper>thefts</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><DollarSquare /></IconWrapper>ownership cost</FirstGraphicBlockElement>
                    </div>
                    <div className="third-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper><Subtitle /></IconWrapper>specifications</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><Danger /></IconWrapper>recalls</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><Danger /></IconWrapper>warranties</FirstGraphicBlockElement>
                    </div>
                    <div className="fourth-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper><CardTick /></IconWrapper>Listings</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><Car /></IconWrapper>salvage</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><ShieldCross /></IconWrapper>insurance</FirstGraphicBlockElement>
                    </div>
                    <div className="fifth-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper><ShieldTick /></IconWrapper>Vehicle safety</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><Rectangle511 /></IconWrapper>license plate</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper><SearchFavorite /></IconWrapper>model</FirstGraphicBlockElement>
                    </div>
                </FirstGraphicBlock>
                <InfoBlockWrapper>
                    <InfoBlockTitle>Detailed vehicle history</InfoBlockTitle>
                    <InfoBlock>At <span>Vinlocator</span>, our focus is on providing you with the most pertinent information
                        right from the start, placing it where you need it the most. In our detailed vehicle history reports
                        generated through VIN or license plate searches, we present all significant events we have gathered
                        for the specific vehicle. This includes comprehensive details on accidents, salvage records, theft
                        incidents, and sales listings.</InfoBlock>
                </InfoBlockWrapper>
            </FirstBlock>

            <SecondBlock>
                <InfoBlockWrapper>
                    <InfoBlockTitle>Accident history</InfoBlockTitle>
                    <InfoBlock>In the event that your vehicle has been involved in an accident requiring intervention from law
                        enforcement or insurance companies, the relevant dates and detailed information about those accidents may be
                        included in your <span>Vinlocator </span> report. We make regular updates to our database as new information becomes available,
                        allowing you to check and revisit your accident history report as often as needed to ensure you are up to date
                        with the latest information.</InfoBlock>
                </InfoBlockWrapper>
                <SecondGraphicBlockElement />
            </SecondBlock>

            <ThirdBlock>
                <ListingsLabel><IconWrapper><CardTick /></IconWrapper>Listings</ListingsLabel>
                <SalseListingLeftSideWrapper>
                    <SalesListingLeftSideBlock>Listed for</SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock><span>$12.485</span></SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock>Mileage</SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock><span>125.959</span></SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock>Listed by</SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock><span>Peach State Motors Inc</span></SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock>Type</SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock><span>-</span></SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock>Inventory Type</SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock><span>Used</span></SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock>Seller Type</SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock><span>Dealer</span></SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock>Listing URL</SalesListingLeftSideBlock>
                    <SalesListingLeftSideBlock><span>Peachstatemotors.com</span></SalesListingLeftSideBlock>
                </SalseListingLeftSideWrapper>
                <SalesListingRightSideWrapper>
                    <InfoBlockTitle>Sales listings</InfoBlockTitle>
                    <InfoBlock>By conducting a VIN lookup or license plate search with <span>Vinlocator</span>, you can gain access to a comprehensive
                        sales history for the vehicle. This valuable information not only provides insight into the vehicle's value but also serves as
                        confirmation of the number of previous owners as stated by the current seller. Understanding the complete sales history can enhance
                        your understanding of the vehicle's background and assist you in making an informed decision.</InfoBlock>
                </SalesListingRightSideWrapper>
            </ThirdBlock>

            <FourthBlock>
                <InfoBlockWrapper>
                    <InfoBlockTitle>Specifications and equipment</InfoBlockTitle>
                    <InfoBlock>If you're unsure whether the car you're interested in has a sunroof or blind spot detection as standard features, conducting
                        a make and model search with Vinlocator can provide you with a comprehensive display of all the standard equipment in one convenient place.
                        This saves you the trouble of having to track down manufacturer specifications and read through numerous reviews. Additionally, by utilizing
                        our VIN decoder, you can delve deeper and potentially determine if a specific vehicle is lacking essential standard equipment. This way,
                        you can make a more informed decision when considering your vehicle options.</InfoBlock>
                </InfoBlockWrapper>
            </FourthBlock>

        </MainWrapper>
    )
}
export default ServiceDescription;