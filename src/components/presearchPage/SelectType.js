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
import { useState } from "react";
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
            numbeOfOwners: false,
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
    const handleClick = (option) => {
        let newOptions = options;
        switch (option) {
            case 'numbeOfOwners':
                newOptions.numbeOfOwners = !newOptions.numbeOfOwners;
                break;
            case 'accidents':
                newOptions.accidents = !newOptions.accidents;
                break;
            case 'value':
                newOptions.value = !newOptions.value;
                break;
            case 'specifications':
                newOptions.specifications = !newOptions.specifications;
                break;
            case 'recalls':
                newOptions.recalls = !newOptions.recalls;
                break;
            case 'warranties':
                newOptions.warranties = !newOptions.warranties;
                break;
            case 'photos':
                newOptions.photos = !newOptions.photos;
                break;
            case 'thefts':
                newOptions.thefts = !newOptions.thefts;
                break;
            case 'cost':
                newOptions.cost = !newOptions.cost;
                break;
            case 'listings':
                newOptions.listings = !newOptions.listings;
                break;
            case 'salvage':
                newOptions.salvage = !newOptions.salvage;
                break;
            case 'insurance':
                newOptions.insurance = !newOptions.insurance;
                break;
            case 'safety':
                newOptions.safety = !newOptions.safety;
                break;
            case 'plate':
                newOptions.plate = !newOptions.plate;
                break;
            case 'model':
                newOptions.model = !newOptions.model;
                break;
            default:
                break;
        }
        setOptions(newOptions);
        console.log(options)
    }
    return (
        <MainWrapper>
            <OptionsBlock>
                <div className="first-row">
                    <Option onClick={() => { handleClick('numbeOfOwners') }}
                        style={options.numbeOfOwners ? { background: '#3AD0E6' } : null}>
                        <IconWrapper><UserSquare /></IconWrapper>
                        number of owners
                    </Option>
                    <Option onClick={() => { handleClick('accidents') }}
                        style={options.accidents ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><SmartCar /></IconWrapper>
                        accidents
                    </Option>
                    <Option onClick={() => { handleClick('value') }}
                        style={options.value ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><Shop /></IconWrapper>market
                        value
                    </Option>
                    <Option onClick={() => { handleClick('specifications') }}
                        style={options.specifications ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><Subtitle /></IconWrapper>
                        specifications
                    </Option>
                    <Option onClick={() => { handleClick('recalls') }}
                        style={options.recalls ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><Danger /></IconWrapper>
                        recalls
                    </Option>
                    <Option onClick={() => { handleClick('warranties') }}
                        style={options.warranties ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><Danger /></IconWrapper>
                        warranties
                    </Option>
                </div>

                <div className="second-row">
                    <Option onClick={() => { handleClick('photos') }}
                        style={options.photos ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><Gallery /></IconWrapper>
                        photos
                    </Option>
                    <Option onClick={() => { handleClick('thefts') }}
                        style={options.thefts ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><LockSlash /></IconWrapper>
                        thefts
                    </Option>
                    <Option onClick={() => { handleClick('cost') }}
                        style={options.cost ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><DollarSquare /></IconWrapper>ownership
                        cost
                    </Option>
                    <Option onClick={() => { handleClick('listings') }}
                        style={options.listings ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><CardTick /></IconWrapper>
                        listings
                    </Option>
                    <Option onClick={() => { handleClick('salvage') }}
                        style={options.salvage ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><Car /></IconWrapper>
                        salvage
                    </Option>
                    <Option onClick={() => { handleClick('insurance') }}
                        style={options.insurance ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><ShieldCross /></IconWrapper>
                        insurance
                    </Option>
                </div>

                <div className="third-row">
                    <Option onClick={() => { handleClick('safety') }}
                        style={options.safety ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><ShieldTick /></IconWrapper>Vehicle
                        safety
                    </Option>
                    <Option onClick={() => { handleClick('plate') }}
                        style={options.plate ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><Rectangle511 /></IconWrapper>license
                        plate
                    </Option>
                    <Option onClick={() => { handleClick('model') }}
                        style={options.model ? { backgroundColor: '#3AD0E6' } : null}>
                        <IconWrapper><SearchFavorite /></IconWrapper>
                        model
                    </Option>
                </div>
            </OptionsBlock>
        </MainWrapper >)
}
export default SelectType;