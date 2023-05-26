import styled from "styled-components"
import { ReactComponent as MagnifyingGlass } from '../../icons/magnifying-glass.svg';
import { useState } from "react";
const MainWrapper = styled.section`
margin: 0 auto;
height: 290px;
width: 1280px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(234deg, #FFFFFF -15.85%, #3AD0E6 97.11%);
border-radius: 6px;
`
const SearchType = styled.div`
width: 536px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
padding-left: 50px;
padding-right: 50px;
margin: 30px auto 20px auto;
font-weight: 700;
font-size: 20px;
`
const VinBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 163px;
height: 33px;
border-bottom: 2px solid ${props => (props.bottomLine)};
`
const LicenseBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 163px;
height: 33px;
border-bottom: 2px solid ${props => (props.bottomLine)};
`
const Form = styled.form`
position: relative;
width: 536px;
`
const Input = styled.input`
display: block;
margin: 0 auto;
box-sizing: border-box;
width: 536px;
height: 60px;
border-radius: 40px;
padding-left:60px;
padding-right: 140px;
border: 1px solid #000000;
box-shadow: 0px 0px 0px 6px rgba(0, 0, 0, 0.04), inset 0px 4px 4px rgba(0, 0, 0, 0.2);
:focus{
    outline: 2px solid #72ecff
}
    ::placeholder{
    font-family: 'Roboto';
    font-weight: 200;
    font-size: 20px;
    color: #3A3A3A;
}
`
const MagnifyingGlassIcon = styled(MagnifyingGlass)`
top: 18px;
left: 17px;
position: absolute;
width: 24px;
height: 24px;
`
const Button = styled.button`
top: 9px;
right: 9px;
position: absolute;
width: 124px;
height: 44px;
background-color: #3AD0E6;
border: 1px solid #000000;
font-weight: 700;
font-size: 18px;
border-radius: 40px;
margin-left: 10px;
cursor: pointer;
:hover{
   background-color: #50dff5; 
}
`
const AdditionalText = styled.div`
margin-top: 11px;
font-weight: 400;
font-size: 14px;
text-align: center;
`
const SecondSearchBlock = () => {
    const [searchType, setSearchType] = useState('VIN');
    return (
        <MainWrapper>
            <SearchType>
                <VinBlock
                    bottomLine={searchType === 'VIN' ? 'rgba(0, 0, 0, 0.95)' : 'transparent'}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => { setSearchType('VIN') }}>
                        VIN
                    </div>
                </VinBlock>
                <LicenseBlock
                    bottomLine={searchType === 'LICENSE-PLATE' ? 'rgba(0, 0, 0, 0.95)' : 'transparent'}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => { setSearchType('LICENSE-PLATE') }}>
                        LICENSE PLATE
                    </div>
                </LicenseBlock>
            </SearchType>
            <Form>
                <MagnifyingGlassIcon />
                <Button>Search</Button>
                <Input placeholder="Enter a VIN Number" />
            </Form>
            <AdditionalText>
                Don’t have a VIN? START HERE, search later.
            </AdditionalText>
        </MainWrapper >
    )
}

export default SecondSearchBlock;