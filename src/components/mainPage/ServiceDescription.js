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
import { ReactComponent as Second3dCar } from '../../images/second-3d-car.svg';
import firstBlueLineralGr from '../../images/first-blue-lineral-gr.svg'
const GradientBlock = styled.div`
position: absolute;
top: -284px;
width: 1440px;
left: 50%;
transform: translateX(-50%);
height: 974px;
z-index: -10;
background-image: url(${firstBlueLineralGr});
background-size: contain;
@media (max-width: 1439px) {
    width: 100vw;
    top: -186px;
    height: 774px;
};
@media (max-width: 1023px) {
    top: -137px;
    height: 634px;
};
@media (max-width: 767px) {
    top: -203px;
    height: 645px;
};
@media (max-width: 424px) {
    top: -98px;
    height: 382px;
}
`
const MainWrapper = styled.section`
margin: 0 auto;
width: 1112px;
display: flex;
flex-direction: column;
align-items: center;
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
    width: 316px;
}
`
const MainTitle = styled.h2`
font-weight: 600;
font-size: 32px;
text-align: center;
width: 756px;
@media (max-width: 1439px) {
       
};
@media (max-width: 1023px) {
    width: 706px;
    font-size: 28px;
 };
@media (max-width: 767px) {
     width: 420px;
     font-size: 20px;
};
@media (max-width: 424px) {
    width: 315px;
    font-size: 18px;
}
`
const AdditionalTitle = styled.div`
margin-top: 5px;
text-align: center;
font-weight: 400;
font-size: 18px;
line-height: 26px;
width: 933px;
    h1{
    font-size: 16px;
    display: inline;
    font-weight: 400;
    font-weight: 700;  
}
@media (max-width: 1439px) {
        line-height: 22px;
font-size: 16px;
   h1{
    font-size: 16px;
}};
@media (max-width: 1023px) {
    width: 706px;
    font-size: 14px;
    h1{
    font-size: 14px;
}};
@media (max-width: 767px) {
     width: 330px;
};
@media (max-width: 424px) {
 
}
`
const FirstBlock = styled.div`
width: 100%;
height: 430px;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 1439px) {
  
};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
    margin-top: 45px;
    flex-direction: column;
    height: 460px;
};
@media (max-width: 424px) {
  height: 530px;
}
`
const InfoBlockWrapper = styled.div`
width: 491px;
display: flex;
flex-direction: column;
span{
    font-weight: 700
}
@media (max-width: 1439px) {
   width: 340px; 
};
@media (max-width: 1023px) {
   width: 279px; 
};
@media (max-width: 767px) {
    width: 420px; 
    text-align: center;
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
font-size: 18px;
};
@media (max-width: 424px) {

}
`
const InfoBlock = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.015em;
@media (max-width: 1439px) {
font-size: 12px; 
};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
font-size: 12px; 
};
@media (max-width: 424px) {

}
`
const FirstGraphicBlock = styled.div`
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
  @media (max-width: 1439px) {
    .first-row {
    grid-template-columns: 190px 130px 153px;
    }
    .second-row {
    grid-template-columns: 34px 110px 106px 170px;
    }
    .third-row {
    grid-template-columns: 79px 158px 114px 143px;
    }
    .fourth-row {
    grid-template-columns: 46px 114px 114px 130px;
  }
    .fifth-row {
    grid-template-columns: 10px 158px 150px 105px;
  }
};
@media (max-width: 1023px) {
    grid-auto-rows: 36px;
    row-gap: 11px;
  .first-row {
    grid-template-columns: 156px 103px 125px;
    }
    .second-row {
    grid-template-columns: 14px 87px 85px 139px;
    }
    .third-row {
    grid-template-columns: 32px 130px 90px 112px;
    }
    .fourth-row {
    grid-template-columns: 26px 91px 91px 104px;
  }
    .fifth-row {
    grid-template-columns: 12px 129px 125px 85px;
  }
};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
  display: none
}
`;
const FirstGraphicBlockMobile = styled.div`
display: none;
    @media (max-width: 424px) {
    display: grid;
    grid-auto-rows: 35px;
    row-gap: 10px;
    .first-row-mobile {
        column-gap: 7px;
        display: grid;
        grid-template-columns: 15px 151px 99px;
    }
    .second-row-mobile {
        column-gap: 7px;
        display: grid;
        grid-template-columns: 29px 84px 82px 81px;
    }
    .third-row-mobile {
        column-gap: 7px;
        display: grid;
        grid-template-columns: 126px 87px 87px;
    }
    .fourth-row-mobile{
        column-gap: 7px;
        display: grid;
        grid-template-columns: 3px 87px 108px 100px;
    }
    .fifth-row-mobile {
        column-gap: 7px;
        display: grid;
        grid-template-columns: 9px 124px 120px;
    }
    .sixth-row-mobile {
        column-gap: 7px;
        display: grid;
        grid-template-columns: 9px 121px 134px;
    }}
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
@media (max-width: 1439px) {
padding-left: 16px;
padding-right: 16px;
};
@media (max-width: 1023px) {
font-size: 9px;
letter-spacing: 0.027rem;
padding-left: 11px;
padding-right: 11px;
};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
padding-left: 10px;
padding-right: 10px;
}
`
const SecondBlock = styled.div`
width: 100%;
height: 645px;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 1439px) {
       
};
@media (max-width: 1023px) {
    height: 430px;
 };
@media (max-width: 767px) {
    height: 600px;
    flex-direction: column-reverse;
};
@media (max-width: 424px) {
 
}
`
const SecondGraphicBlockElement = styled(First3dCar)`
width: 694px;
height: 480px;
@media (max-width: 1439px) {
       
};
@media (max-width: 1023px) {
    width: 415px;
 };
@media (max-width: 767px) {

};
@media (max-width: 424px) {
 width: 316px;
}
`
const ThirdBlock = styled.div`
position: relative;
bottom: 0px;
box-sizing: border-box;
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
border: 1px solid rgba(0, 0, 0, 0.5);;
box-shadow: 0px 30px 20px rgba(0, 0, 0, 0.04);
border-radius: 30px;
@media (max-width: 1439px) {
    height: 300px;
    padding-left: 40px;
    padding-right: 60px;
   width: 900px; 
};
@media (max-width: 1023px) {
    margin-top: 25px;
    height: 265px;
    padding-left: 22px;
    padding-right: 20px;
    width: 706px; 
};
@media (max-width: 767px) {
    margin-top: 90px;
    height: 250px;
    width: 420px; 
};
@media (max-width: 424px) {
    padding-left: 18px;
    padding-right: 20px;
    width: 316px;
    height: 216px;
}
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
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
    top: -18px;
    padding-left: 15px;
    padding-right: 15px;
    height: 36px;
    width: 108px;
};
@media (max-width: 767px) {
     top: -18px;
    padding-left: 15px;
    padding-right: 15px;
    height: 34px;
    width: 104px;
};
@media (max-width: 424px) {
    width: 103px;
    left: unset;
    right: 21px;
}
`
const SalseListingLeftSideWrapper = styled.div`
width: 300px;
display: grid;
grid-template-columns: 115px 180px;
grid-auto-rows: 32px;
@media (max-width: 1439px) {
grid-auto-rows: 28px;
};
@media (max-width: 1023px) {
  grid-auto-rows: 25px;
};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
 
}
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
@media (max-width: 1439px) {
span {
font-weight: 500;
font-size: 13px;
color: rgba(0, 0, 0, 0.95);
}
};
@media (max-width: 1023px) {
    span {
    font-weight: 500;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.95);
    } 
};
@media (max-width: 767px) {
    font-size: 14px;
    span {
        font-size: 14px;
    } 
};
@media (max-width: 424px) {
     font-size: 13px;
    span {
        font-size: 13px;
    } 
}
`
const SalesListingRightSideWrapper = styled.div`
width: 581px;
display: flex;
flex-direction: column;
span{
    font-weight: 700
}
@media (max-width: 1439px) {
width: 440px;
};
@media (max-width: 1023px) {
  width: 360px;
};
@media (max-width: 767px) {
   display: none
};
@media (max-width: 424px) {
 
}
`
const ThirdBlockMobileInfoWrapper = styled.div`
margin-top: 75px;
width: 420px; 
text-align: center;
display: none;
flex-direction: column;
margin-bottom: 55px;
span{
    font-weight: 700
}
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
 
};
@media (max-width: 767px) {
display: flex;
};
@media (max-width: 424px) {
    margin-top: 85px;
width: 316px; 
}
`
const FourthBlock = styled.div`
position: relative;
box-sizing: border-box;
width: 1112px;
height: 850px;
padding-top: 150px;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 1439px) {
    height: 717px;
    width: 900px; 
};
@media (max-width: 1023px) {
        height: 600px;
      width: 706px; 
};
@media (max-width: 767px) {
    width: 420px;
    padding-top: 40px;
    height: 638px;
    flex-direction: column-reverse;
};
@media (max-width: 424px) {
    width: 316px;
     height: 717px;
}
`
const FourthGraphicBlockElement = styled(Second3dCar)`
width: 536px;
height: 659px;
@media (max-width: 1439px) {
     width: 440px;  
};
@media (max-width: 1023px) {
    width: 360px;
 };
@media (max-width: 767px) {
    height: 359px;
     width: 330px;
};
@media (max-width: 424px) {
}
`
const IconWrapper = styled.div`
width: 24px;
height: 24px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
    width: 18px;
    height: 18px;
};
@media (max-width: 767px) {
 
};
@media (max-width: 424px) {
     width: 17px;
    height: 17px;
}
`
const ServiceDescription = () => {
    return (
        <MainWrapper>
            <MainTitle>
                What information can I find in my Vinlocator
                vehicle history report?
            </MainTitle>
            <AdditionalTitle>
                When running a VIN, license plate, or make and model search on <h1>Vinlocator</h1>, you can expect
                to receive a comprehensive vehicle history report that covers nearly 15 different categories. Here
                are some examples of the reports you might receive:
            </AdditionalTitle>

            <FirstBlock>
                <FirstGraphicBlock>
                    <div className="first-row">
                        <FirstGraphicBlockElement><IconWrapper>
                            <UserSquare style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>Number of owners</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <SmartCar style={{ width: '100%', height: '100%' }} /></IconWrapper>accidents
                        </FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Shop style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>market value</FirstGraphicBlockElement>
                    </div>
                    <div className="second-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Gallery style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>Photos</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <LockSlash style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>thefts</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <DollarSquare style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>ownership cost</FirstGraphicBlockElement>
                    </div>
                    <div className="third-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Subtitle style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>specifications</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Danger style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>recalls</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Danger style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>warranties</FirstGraphicBlockElement>
                    </div>
                    <div className="fourth-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Car style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>salvage</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <ShieldCross style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>insurance</FirstGraphicBlockElement>
                    </div>
                    <div className="fifth-row">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <ShieldTick style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>Vehicle safety</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Rectangle511 style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>license plate</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <SearchFavorite style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>model</FirstGraphicBlockElement>
                    </div>
                </FirstGraphicBlock>
                <FirstGraphicBlockMobile>
                    <div className="first-row-mobile">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <UserSquare style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>Number of owners</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <SmartCar style={{ width: '100%', height: '100%' }} /></IconWrapper>accidents
                        </FirstGraphicBlockElement>
                    </div>
                    <div className="second-row-mobile">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Gallery style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>Photos</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <LockSlash style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>thefts</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <SearchFavorite style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>model</FirstGraphicBlockElement>
                    </div>
                    <div className="third-row-mobile">
                        <FirstGraphicBlockElement><IconWrapper>
                            <Subtitle style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>specifications</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Danger style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>recalls</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <CardTick style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>Listings</FirstGraphicBlockElement>
                    </div>
                    <div className="fourth-row-mobile">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Car style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>salvage</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Danger style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>warranties</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <ShieldCross style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>insurance</FirstGraphicBlockElement>
                    </div>
                    <div className="fifth-row-mobile">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <ShieldTick style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>Vehicle safety</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Rectangle511 style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>license plate</FirstGraphicBlockElement>
                    </div>
                    <div className="sixth-row-mobile">
                        <div className="gap"></div>
                        <FirstGraphicBlockElement><IconWrapper>
                            <Shop style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>market value</FirstGraphicBlockElement>
                        <FirstGraphicBlockElement><IconWrapper>
                            <DollarSquare style={{ width: '100%', height: '100%' }} />
                        </IconWrapper>ownership cost</FirstGraphicBlockElement>
                    </div>
                </FirstGraphicBlockMobile>
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
                <ListingsLabel><IconWrapper>
                    <CardTick style={{ width: '100%', height: '100%' }} />
                </IconWrapper>Listings</ListingsLabel>
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
            <ThirdBlockMobileInfoWrapper>
                <InfoBlockTitle>Sales listings</InfoBlockTitle>
                <InfoBlock>By conducting a VIN lookup or license plate search with <span>Vinlocator</span>, you can gain access to a comprehensive
                    sales history for the vehicle. This valuable information not only provides insight into the vehicle's value but also serves as
                    confirmation of the number of previous owners as stated by the current seller. Understanding the complete sales history can enhance
                    your understanding of the vehicle's background and assist you in making an informed decision.</InfoBlock>
            </ThirdBlockMobileInfoWrapper>

            <FourthBlock>
                <GradientBlock />
                <InfoBlockWrapper>
                    <InfoBlockTitle>Specifications and equipment</InfoBlockTitle>
                    <InfoBlock>If you're unsure whether the car you're interested in has a sunroof or blind spot detection as standard features, conducting
                        a make and model search with Vinlocator can provide you with a comprehensive display of all the standard equipment in one convenient place.
                        This saves you the trouble of having to track down manufacturer specifications and read through numerous reviews. Additionally, by utilizing
                        our VIN decoder, you can delve deeper and potentially determine if a specific vehicle is lacking essential standard equipment. This way,
                        you can make a more informed decision when considering your vehicle options.</InfoBlock>
                </InfoBlockWrapper>
                <FourthGraphicBlockElement />
            </FourthBlock>

        </MainWrapper>
    )
}
export default ServiceDescription;