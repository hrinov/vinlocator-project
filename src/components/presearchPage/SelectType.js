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
import { useEffect, useRef, useState } from "react";
const MainWrapper = styled.section`
    height: 675px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    background: #3AD0E6;
}
`
const IconWrapper = styled.div`
width: 24px;
height: 24px
`
const SelectType = () => {
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
    const numberOfOwners = useRef();
    const accidents = useRef();
    const value = useRef();
    const specifications = useRef();
    const recalls = useRef();
    const warranties = useRef();
    const photos = useRef();
    const thefts = useRef();
    const cost = useRef();
    const listings = useRef();
    const salvage = useRef();
    const insurance = useRef();
    const safety = useRef();
    const plate = useRef();
    const model = useRef();
    const handleClick = (option) => {
        let newOptions = options;
        const defaultColor = 'linear-gradient(180deg, #FFFFFF 0%, #DBDEE7 100%)';
        switch (option) {
            case 'numbeOfOwners':
                newOptions.numberOfOwners = !newOptions.numberOfOwners;
                numberOfOwners.current.style.background = newOptions.numberOfOwners ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'accidents':
                newOptions.accidents = !newOptions.accidents;
                accidents.current.style.background = newOptions.accidents ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'value':
                newOptions.value = !newOptions.value;
                value.current.style.background = newOptions.value ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'specifications':
                newOptions.specifications = !newOptions.specifications;
                specifications.current.style.background = newOptions.specifications ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'recalls':
                newOptions.recalls = !newOptions.recalls;
                recalls.current.style.background = newOptions.recalls ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'warranties':
                newOptions.warranties = !newOptions.warranties;
                warranties.current.style.background = newOptions.warranties ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'photos':
                newOptions.photos = !newOptions.photos;
                photos.current.style.background = newOptions.photos ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'thefts':
                newOptions.thefts = !newOptions.thefts;
                thefts.current.style.background = newOptions.thefts ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'cost':
                newOptions.cost = !newOptions.cost;
                cost.current.style.background = newOptions.cost ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'listings':
                newOptions.listings = !newOptions.listings;
                listings.current.style.background = newOptions.listings ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'salvage':
                newOptions.salvage = !newOptions.salvage;
                salvage.current.style.background = newOptions.salvage ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'insurance':
                newOptions.insurance = !newOptions.insurance;
                insurance.current.style.background = newOptions.insurance ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'safety':
                newOptions.safety = !newOptions.safety;
                safety.current.style.background = newOptions.safety ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'plate':
                newOptions.plate = !newOptions.plate;
                plate.current.style.background = newOptions.plate ?
                    '#3AD0E6' : defaultColor;
                break;
            case 'model':
                newOptions.model = !newOptions.model;
                model.current.style.background = newOptions.model ?
                    '#3AD0E6' : defaultColor;
                break;
            default:
                break;
        }
        setOptions(newOptions);
    }
    useEffect(() => {

    }, [options])
    return (
        <>
            < MainWrapper >
                <OptionsBlock>
                    <div className="first-row">
                        <Option onClick={() => {
                            handleClick('numbeOfOwners')
                        }}
                            ref={numberOfOwners}>
                            <IconWrapper><UserSquare /></IconWrapper>
                            number of owners
                        </Option>
                        <Option onClick={() => { handleClick('accidents') }}
                            ref={accidents}>
                            <IconWrapper><SmartCar /></IconWrapper>
                            accidents
                        </Option>
                        <Option onClick={() => { handleClick('value') }}
                            ref={value}>
                            <IconWrapper><Shop /></IconWrapper>market
                            value
                        </Option>
                        <Option onClick={() => { handleClick('specifications') }}
                            ref={specifications}>
                            <IconWrapper><Subtitle /></IconWrapper>
                            specifications
                        </Option>
                        <Option onClick={() => { handleClick('recalls') }}
                            ref={recalls}>
                            <IconWrapper><Danger /></IconWrapper>
                            recalls
                        </Option>
                        <Option onClick={() => { handleClick('warranties') }}
                            ref={warranties}>
                            <IconWrapper><Danger /></IconWrapper>
                            warranties
                        </Option>
                    </div>

                    <div className="second-row">
                        <Option onClick={() => { handleClick('photos') }}
                            ref={photos}>
                            <IconWrapper><Gallery /></IconWrapper>
                            photos
                        </Option>
                        <Option onClick={() => { handleClick('thefts') }}
                            ref={thefts}>
                            <IconWrapper><LockSlash /></IconWrapper>
                            thefts
                        </Option>
                        <Option onClick={() => { handleClick('cost') }}
                            ref={cost}>
                            <IconWrapper><DollarSquare /></IconWrapper>
                            ownership cost
                        </Option>
                        <Option onClick={() => { handleClick('listings') }}
                            ref={listings}>
                            <IconWrapper><CardTick /></IconWrapper>
                            listings
                        </Option>
                        <Option onClick={() => { handleClick('salvage') }}
                            ref={salvage}>
                            <IconWrapper><Car /></IconWrapper>
                            salvage
                        </Option>
                        <Option onClick={() => { handleClick('insurance') }}
                            ref={insurance}>
                            <IconWrapper><ShieldCross /></IconWrapper>
                            insurance
                        </Option>
                    </div>

                    <div className="third-row">
                        <Option onClick={() => { handleClick('safety') }}
                            ref={safety}>
                            <IconWrapper><ShieldTick /></IconWrapper>Vehicle
                            safety
                        </Option>
                        <Option onClick={() => { handleClick('plate') }}
                            ref={plate}>
                            <IconWrapper><Rectangle511 /></IconWrapper>license
                            plate
                        </Option>
                        <Option onClick={() => { handleClick('model') }}
                            ref={model}>
                            <IconWrapper><SearchFavorite /></IconWrapper>
                            model
                        </Option>
                    </div>
                </OptionsBlock>
            </MainWrapper>
        </>)
}
export default SelectType;