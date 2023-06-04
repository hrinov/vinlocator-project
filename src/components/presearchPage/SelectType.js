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
import { useRef, useState } from "react";
const MainWrapper = styled.section`
    height: 675px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1439px) {

};
@media (max-width: 1023px) {
height: 650px;
};
@media (max-width: 767px) {
    height: 630px;
};
@media (max-width: 424px) {
      height: 600px;
}
`
const OptionsBlock = styled.div`
display: grid;
row-gap: 14px;
grid-auto-rows: 40px;
.first-row {
    margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 200px 140px 163px 168px 124px 153px;
    }
.second-row {
    margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 120px 116px 180px 124px 124px 140px;
    }
.third-row {
    margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 168px 160px 115px ;
  }
  @media (max-width: 1439px) {
    .first-row {
    grid-template-columns: 190px 127px 152px 157px 114px 136px;
    }
    .second-row {
    grid-template-columns: 110px 106px 167px 114px 114px 130px;
    }
    .third-row {
    grid-template-columns: 155px 150px 106px ;
  }
};
@media (max-width: 1023px) {
display: none;
};
@media (max-width: 767px) {
   
};
@media (max-width: 424px) {
     
}
`;

const OptionsBlockMobile = styled.div`
display: none;
@media (max-width: 1439px) {
   
};
@media (max-width: 1023px) {
display: grid;
row-gap: 14px;
grid-auto-rows: 40px;
.first-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 188px 128px 111px;
    }
.second-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 152px 106px 168px;
    }
.third-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 158px 152px 105px ;
  }
  .fourth-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 158px 114px 139px ;
  }
  .fifth-row-mobile{
        margin: 0 auto;
    display: grid;
    column-gap: 8px;
    grid-template-columns: 114px 114px 128px;
  }
};
@media (max-width: 767px) {
    row-gap: 12px;
   .first-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 6px;
    grid-template-columns: 176px 115px 98px;
    }
.second-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 6px;
    grid-template-columns: 138px 91px 155px;
    }
.third-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 6px;
    grid-template-columns: 143px 137px 92px ;
  }
  .fourth-row-mobile {
    margin: 0 auto;
    display: grid;
    column-gap: 6px;
    grid-template-columns: 144px 100px 128px ;
  }
  .fifth-row-mobile{
        margin: 0 auto;
    display: grid;
    column-gap: 6px;
    grid-template-columns: 102px 102px 118px;
  }
};
@media (max-width: 424px) {
     display: none
}
`;
const OptionsBlockExtraMobile = styled.div`
display: none;
    @media (max-width: 424px) {
    display: grid;
    grid-auto-rows: 34px;
    row-gap: 9px;
    .first-row-extra-mobile {
        column-gap: 6px;
        display: grid;
        grid-template-columns: 15px 164px 103px;
    }
    .second-row-extra-mobile {
        column-gap: 6px;
        display: grid;
        grid-template-columns: 30px 85px 82px 81px;
    }
    .third-row-extra-mobile {
        column-gap: 6px;
        display: grid;
        grid-template-columns: 130px 86px 87px;
    }
    .fourth-row-extra-mobile{
        column-gap: 6px;
        display: grid;
        grid-template-columns: 0px 88px 111px 103px;
    }
    .fifth-row-extra-mobile {
        column-gap: 6px;
        display: grid;
        grid-template-columns: 34px 133px 127px;
    }
    .sixth-row-extra-mobile {
        column-gap: 6px;
        display: grid;
        grid-template-columns: 9px 128px 144px;
    }}
`;
const Option = styled.div`
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
cursor: pointer;
:hover{
    background: #50dff5;
}
    @media (max-width: 1439px) {
padding-left: 16px;
padding-right: 16px;
};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
padding-left: 12px;
padding-right: 12px;
};
@media (max-width: 424px) {
    font-weight: 500;
padding-left: 7px;
padding-right: 7px;
}
`
const IconWrapper = styled.div`
width: 24px;
height: 24px;
    @media (max-width: 1439px) {
width: 22px;
height: 22px;
};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
width: 18px;
height: 18px;
};
@media (max-width: 424px) {

}
`
const ButtonsHolder = styled.div`
display: flex;
justify-content: center;
width: 256px;
margin-top: 100px;
    @media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
margin-top: 70px;
};
@media (max-width: 424px) {
  margin-top: 60px;   
}
`
const NextButton = styled.button`
background: #D5DBE1;
width: 75px;
height: 37px;
border: 1px solid rgba(0, 0, 0, 0.5);
font-size: 13px;
font-weight: 600;
border-radius: 40px;
margin-left: 10px;
transition-duration: 300ms;
cursor: pointer;
:hover{
    background-color: #50dff5
}
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
width: 70px;
height: 34px;
}
`
const SelectAllButton = styled.button`
background: #D5DBE1;
width: 128px;
height: 37px;
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

};
@media (max-width: 424px) {
width: 120px;
height: 34px;
}
`
const SelectType = ({ changeScene }) => {
    const [canGoNext, setCanGoNext] = useState(false);
    const [options, setOptions] = useState(
        {
            numberOfOwners: false,
            accidents: false,
            value: false,
            specifications: false,
            recalls: false,
            warranties: false,
            photos: false,
            thefts: false,
            cost: false,
            listings: false,
            salvage: false,
            insurance: false,
            safety: false,
            plate: false,
            model: false
        }
    );
    const buttons = ['numberOfOwners', 'accidents', 'value', 'specifications', 'recalls', 'warranties', 'photos', 'thefts', 'cost', 'listings', 'salvage', 'insurance', 'safety', 'plate', 'model']
    const numberOfOwners = useRef();
    const numberOfOwnersMobile = useRef();
    const numberOfOwnersExtraMobile = useRef();
    const accidents = useRef();
    const accidentsMobile = useRef();
    const accidentsExtraMobile = useRef();
    const value = useRef();
    const valueMobile = useRef();
    const valueExtraMobile = useRef();
    const specifications = useRef();
    const specificationsMobile = useRef();
    const specificationsExtraMobile = useRef();
    const recalls = useRef();
    const recallsMobile = useRef();
    const recallsExtraMobile = useRef();
    const warranties = useRef();
    const warrantiesMobile = useRef();
    const warrantiesExtraMobile = useRef();
    const photos = useRef();
    const photosMobile = useRef();
    const photosExtraMobile = useRef();
    const thefts = useRef();
    const theftsMobile = useRef();
    const theftsExtraMobile = useRef();
    const cost = useRef();
    const costMobile = useRef();
    const costExtraMobile = useRef();
    const listings = useRef();
    const listingsMobile = useRef();
    const listingsExtraMobile = useRef();
    const salvage = useRef();
    const salvageMobile = useRef();
    const salvageExtraMobile = useRef();
    const insurance = useRef();
    const insuranceMobile = useRef();
    const insuranceExtraMobile = useRef();
    const safety = useRef();
    const safetyMobile = useRef();
    const safetyExtraMobile = useRef();
    const plate = useRef();
    const plateMobile = useRef();
    const plateExtraMobile = useRef();
    const model = useRef();
    const modelMobile = useRef();
    const modelExtraMobile = useRef();
    const nextBtn = useRef();
    const handleSelectAll = () => {
        setOptions(
            {
                numberOfOwners: true,
                accidents: true,
                value: true,
                specifications: true,
                recalls: true,
                warranties: true,
                photos: true,
                thefts: true,
                cost: true,
                listings: true,
                salvage: true,
                insurance: true,
                safety: true,
                plate: true,
                model: true
            }
        )
        buttons.forEach((e) => { if (!options[e]) { handleClick(e) } })
    }
    const handleClick = (option) => {
        let newOptions = options;
        const defaultColor = 'linear-gradient(180deg, #FFFFFF 0%, #DBDEE7 100%)';
        switch (option) {
            case 'numberOfOwners':
                newOptions.numberOfOwners = !newOptions.numberOfOwners;
                numberOfOwners.current.style.background = newOptions.numberOfOwners ?
                    '#3AD0E6' : defaultColor;
                numberOfOwnersMobile.current.style.background = newOptions.numberOfOwners ?
                    '#3AD0E6' : defaultColor;
                numberOfOwnersExtraMobile.current.style.background = newOptions.numberOfOwners ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'accidents':
                newOptions.accidents = !newOptions.accidents;
                accidents.current.style.background = newOptions.accidents ?
                    '#3AD0E6' : defaultColor;
                accidentsMobile.current.style.background = newOptions.accidents ?
                    '#3AD0E6' : defaultColor;
                accidentsExtraMobile.current.style.background = newOptions.accidents ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'value':
                newOptions.value = !newOptions.value;
                value.current.style.background = newOptions.value ?
                    '#3AD0E6' : defaultColor;
                valueMobile.current.style.background = newOptions.value ?
                    '#3AD0E6' : defaultColor;
                valueExtraMobile.current.style.background = newOptions.value ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'specifications':
                newOptions.specifications = !newOptions.specifications;
                specifications.current.style.background = newOptions.specifications ?
                    '#3AD0E6' : defaultColor;
                specificationsMobile.current.style.background = newOptions.specifications ?
                    '#3AD0E6' : defaultColor;
                specificationsExtraMobile.current.style.background = newOptions.specifications ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'recalls':
                newOptions.recalls = !newOptions.recalls;
                recalls.current.style.background = newOptions.recalls ?
                    '#3AD0E6' : defaultColor;
                recallsMobile.current.style.background = newOptions.recalls ?
                    '#3AD0E6' : defaultColor;
                recallsExtraMobile.current.style.background = newOptions.recalls ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'warranties':
                newOptions.warranties = !newOptions.warranties;
                warranties.current.style.background = newOptions.warranties ?
                    '#3AD0E6' : defaultColor;
                warrantiesMobile.current.style.background = newOptions.warranties ?
                    '#3AD0E6' : defaultColor;
                warrantiesExtraMobile.current.style.background = newOptions.warranties ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'photos':
                newOptions.photos = !newOptions.photos;
                photos.current.style.background = newOptions.photos ?
                    '#3AD0E6' : defaultColor;
                photosMobile.current.style.background = newOptions.photos ?
                    '#3AD0E6' : defaultColor;
                photosExtraMobile.current.style.background = newOptions.photos ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'thefts':
                newOptions.thefts = !newOptions.thefts;
                thefts.current.style.background = newOptions.thefts ?
                    '#3AD0E6' : defaultColor;
                theftsMobile.current.style.background = newOptions.thefts ?
                    '#3AD0E6' : defaultColor;
                theftsExtraMobile.current.style.background = newOptions.thefts ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'cost':
                newOptions.cost = !newOptions.cost;
                cost.current.style.background = newOptions.cost ?
                    '#3AD0E6' : defaultColor;
                costMobile.current.style.background = newOptions.cost ?
                    '#3AD0E6' : defaultColor;
                costExtraMobile.current.style.background = newOptions.cost ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'listings':
                newOptions.listings = !newOptions.listings;
                listings.current.style.background = newOptions.listings ?
                    '#3AD0E6' : defaultColor;
                listingsMobile.current.style.background = newOptions.listings ?
                    '#3AD0E6' : defaultColor;
                listingsExtraMobile.current.style.background = newOptions.listings ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'salvage':
                newOptions.salvage = !newOptions.salvage;
                salvage.current.style.background = newOptions.salvage ?
                    '#3AD0E6' : defaultColor;
                salvageMobile.current.style.background = newOptions.salvage ?
                    '#3AD0E6' : defaultColor;
                salvageExtraMobile.current.style.background = newOptions.salvage ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'insurance':
                newOptions.insurance = !newOptions.insurance;
                insurance.current.style.background = newOptions.insurance ?
                    '#3AD0E6' : defaultColor;
                insuranceMobile.current.style.background = newOptions.insurance ?
                    '#3AD0E6' : defaultColor;
                insuranceExtraMobile.current.style.background = newOptions.insurance ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'safety':
                newOptions.safety = !newOptions.safety;
                safety.current.style.background = newOptions.safety ?
                    '#3AD0E6' : defaultColor;
                safetyMobile.current.style.background = newOptions.safety ?
                    '#3AD0E6' : defaultColor;
                safetyExtraMobile.current.style.background = newOptions.safety ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'plate':
                newOptions.plate = !newOptions.plate;
                plate.current.style.background = newOptions.plate ?
                    '#3AD0E6' : defaultColor;
                plateMobile.current.style.background = newOptions.plate ?
                    '#3AD0E6' : defaultColor;
                plateExtraMobile.current.style.background = newOptions.plate ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'model':
                newOptions.model = !newOptions.model;
                model.current.style.background = newOptions.model ?
                    '#3AD0E6' : defaultColor;
                modelMobile.current.style.background = newOptions.model ?
                    '#3AD0E6' : defaultColor;
                modelExtraMobile.current.style.background = newOptions.model ?
                    '#3AD0E6' : defaultColor;
                break;
            default:
                break;
        }
        for (let key in newOptions) {
            if (newOptions[key] === true) {
                nextBtn.current.style.background = '#3AD0E6';
                setCanGoNext(true)
                break;
            } else {
                setCanGoNext(false)
                nextBtn.current.style.background = '#D5DBE1';
            }
        }
        setOptions(newOptions);
    }
    const handleSubmit = () => {
        if (canGoNext) {
            changeScene(options)
        }
    }
    return (
        <>
            < MainWrapper >
                <OptionsBlock>
                    <div className="first-row">
                        <Option onClick={() => {
                            handleClick('numberOfOwners')
                        }}
                            ref={numberOfOwners}>
                            <IconWrapper><UserSquare style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            number of owners
                        </Option>
                        <Option onClick={() => { handleClick('accidents') }}
                            ref={accidents}>
                            <IconWrapper><SmartCar style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            accidents
                        </Option>
                        <Option onClick={() => { handleClick('value') }}
                            ref={value}>
                            <IconWrapper><Shop style={{ width: '100%', height: '100%' }} /></IconWrapper>market
                            value
                        </Option>
                        <Option onClick={() => { handleClick('specifications') }}
                            ref={specifications}>
                            <IconWrapper><Subtitle style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            specifications
                        </Option>
                        <Option onClick={() => { handleClick('recalls') }}
                            ref={recalls}>
                            <IconWrapper><Danger style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            recalls
                        </Option>
                        <Option onClick={() => { handleClick('warranties') }}
                            ref={warranties}>
                            <IconWrapper><Danger style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            warranties
                        </Option>
                    </div>

                    <div className="second-row">
                        <Option onClick={() => { handleClick('photos') }}
                            ref={photos}>
                            <IconWrapper><Gallery style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            photos
                        </Option>
                        <Option onClick={() => { handleClick('thefts') }}
                            ref={thefts}>
                            <IconWrapper><LockSlash style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            thefts
                        </Option>
                        <Option onClick={() => { handleClick('cost') }}
                            ref={cost}>
                            <IconWrapper><DollarSquare style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            ownership cost
                        </Option>
                        <Option onClick={() => { handleClick('listings') }}
                            ref={listings}>
                            <IconWrapper><CardTick style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            listings
                        </Option>
                        <Option onClick={() => { handleClick('salvage') }}
                            ref={salvage}>
                            <IconWrapper><Car style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            salvage
                        </Option>
                        <Option onClick={() => { handleClick('insurance') }}
                            ref={insurance}>
                            <IconWrapper><ShieldCross style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            insurance
                        </Option>
                    </div>

                    <div className="third-row">
                        <Option onClick={() => { handleClick('safety') }}
                            ref={safety}>
                            <IconWrapper><ShieldTick style={{ width: '100%', height: '100%' }} /></IconWrapper>Vehicle
                            safety
                        </Option>
                        <Option onClick={() => { handleClick('plate') }}
                            ref={plate}>
                            <IconWrapper><Rectangle511 style={{ width: '100%', height: '100%' }} /></IconWrapper>license
                            plate
                        </Option>
                        <Option onClick={() => { handleClick('model') }}
                            ref={model}>
                            <IconWrapper><SearchFavorite style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            model
                        </Option>
                    </div>
                </OptionsBlock>

                <OptionsBlockMobile>
                    <div className="first-row-mobile">
                        <Option onClick={() => {
                            handleClick('numberOfOwners')
                        }}
                            ref={numberOfOwnersMobile}>
                            <IconWrapper><UserSquare style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            number of owners
                        </Option>
                        <Option onClick={() => { handleClick('accidents') }}
                            ref={accidentsMobile}>
                            <IconWrapper><SmartCar style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            accidents
                        </Option>
                        <Option onClick={() => { handleClick('photos') }}
                            ref={photosMobile}>
                            <IconWrapper><Gallery style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            photos
                        </Option>
                    </div>

                    <div className="second-row-mobile">
                        <Option onClick={() => { handleClick('value') }}
                            ref={valueMobile}>
                            <IconWrapper><Shop style={{ width: '100%', height: '100%' }} /></IconWrapper>market
                            value
                        </Option>
                        <Option onClick={() => { handleClick('thefts') }}
                            ref={theftsMobile}>
                            <IconWrapper><LockSlash style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            thefts
                        </Option>
                        <Option onClick={() => { handleClick('cost') }}
                            ref={costMobile}>
                            <IconWrapper><DollarSquare style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            ownership cost
                        </Option>
                    </div>

                    <div className="third-row-mobile">
                        <Option onClick={() => { handleClick('safety') }}
                            ref={safetyMobile}>
                            <IconWrapper><ShieldTick style={{ width: '100%', height: '100%' }} /></IconWrapper>Vehicle
                            safety
                        </Option>
                        <Option onClick={() => { handleClick('plate') }}
                            ref={plateMobile}>
                            <IconWrapper><Rectangle511 style={{ width: '100%', height: '100%' }} /></IconWrapper>license
                            plate
                        </Option>
                        <Option onClick={() => { handleClick('model') }}
                            ref={modelMobile}>
                            <IconWrapper><SearchFavorite style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            model
                        </Option>
                    </div>

                    <div className="fourth-row-mobile">
                        <Option onClick={() => { handleClick('specifications') }}
                            ref={specificationsMobile}>
                            <IconWrapper><Subtitle style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            specifications
                        </Option>
                        <Option onClick={() => { handleClick('recalls') }}
                            ref={recallsMobile}>
                            <IconWrapper><Danger style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            recalls
                        </Option>
                        <Option onClick={() => { handleClick('warranties') }}
                            ref={warrantiesMobile}>
                            <IconWrapper><Danger style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            warranties
                        </Option>
                    </div>

                    <div className="fifth-row-mobile">
                        <Option onClick={() => { handleClick('listings') }}
                            ref={listingsMobile}>
                            <IconWrapper><CardTick style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            listings
                        </Option>
                        <Option onClick={() => { handleClick('salvage') }}
                            ref={salvageMobile}>
                            <IconWrapper><Car style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            salvage
                        </Option>
                        <Option onClick={() => { handleClick('insurance') }}
                            ref={insuranceMobile}>
                            <IconWrapper><ShieldCross style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            insurance
                        </Option>
                    </div>
                </OptionsBlockMobile>

                <OptionsBlockExtraMobile>
                    <div className="first-row-extra-mobile">
                        <div className="gap"></div>
                        <Option onClick={() => {
                            handleClick('numberOfOwners')
                        }}
                            ref={numberOfOwnersExtraMobile}>
                            <IconWrapper><UserSquare style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            number of owners
                        </Option>
                        <Option onClick={() => { handleClick('accidents') }}
                            ref={accidentsExtraMobile}>
                            <IconWrapper><SmartCar style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            accidents
                        </Option>
                    </div>
                    <div className="second-row-extra-mobile">
                        <div className="gap"></div>
                        <Option onClick={() => { handleClick('photos') }}
                            ref={photosExtraMobile}>
                            <IconWrapper><Gallery style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            photos
                        </Option>
                        <Option onClick={() => { handleClick('thefts') }}
                            ref={theftsExtraMobile}>
                            <IconWrapper><LockSlash style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            thefts
                        </Option>
                        <Option onClick={() => { handleClick('model') }}
                            ref={modelExtraMobile}>
                            <IconWrapper><SearchFavorite style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            model
                        </Option>
                    </div>
                    <div className="third-row-extra-mobile">
                        <Option onClick={() => { handleClick('specifications') }}
                            ref={specificationsExtraMobile}>
                            <IconWrapper><Subtitle style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            specifications
                        </Option>
                        <Option onClick={() => { handleClick('recalls') }}
                            ref={recallsExtraMobile}>
                            <IconWrapper><Danger style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            recalls
                        </Option>
                        <Option onClick={() => { handleClick('listings') }}
                            ref={listingsExtraMobile}>
                            <IconWrapper><CardTick style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            listings
                        </Option>
                    </div>
                    <div className="fourth-row-extra-mobile">
                        <div className="gap"></div>
                        <Option onClick={() => { handleClick('salvage') }}
                            ref={salvageExtraMobile}>
                            <IconWrapper><Car style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            salvage
                        </Option>
                        <Option onClick={() => { handleClick('warranties') }}
                            ref={warrantiesExtraMobile}>
                            <IconWrapper><Danger style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            warranties
                        </Option>
                        <Option onClick={() => { handleClick('insurance') }}
                            ref={insuranceExtraMobile}>
                            <IconWrapper><ShieldCross style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            insurance
                        </Option>
                    </div>
                    <div className="fifth-row-extra-mobile">
                        <div className="gap"></div>
                        <Option onClick={() => { handleClick('safety') }}
                            ref={safetyExtraMobile}>
                            <IconWrapper><ShieldTick style={{ width: '100%', height: '100%' }} /></IconWrapper>Vehicle
                            safety
                        </Option>
                        <Option onClick={() => { handleClick('plate') }}
                            ref={plateExtraMobile}>
                            <IconWrapper><Rectangle511 style={{ width: '100%', height: '100%' }} /></IconWrapper>license
                            plate
                        </Option>
                    </div>
                    <div className="sixth-row-extra-mobile">
                        <div className="gap"></div>
                        <Option onClick={() => { handleClick('value') }}
                            ref={valueExtraMobile}>
                            <IconWrapper><Shop style={{ width: '100%', height: '100%' }} /></IconWrapper>market
                            value
                        </Option>
                        <Option onClick={() => { handleClick('cost') }}
                            ref={costExtraMobile}>
                            <IconWrapper><DollarSquare style={{ width: '100%', height: '100%' }} /></IconWrapper>
                            ownership cost
                        </Option>
                    </div>
                </OptionsBlockExtraMobile>
                <ButtonsHolder>
                    <SelectAllButton onClick={handleSelectAll}>Select all</SelectAllButton>
                    <NextButton ref={nextBtn} onClick={handleSubmit}>Next</NextButton>
                </ButtonsHolder>
            </MainWrapper>
        </>)
}
export default SelectType;