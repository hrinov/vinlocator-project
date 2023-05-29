import styled from "styled-components"
import { ReactComponent as MagnifyingGlass } from '../../icons/magnifying-glass.svg';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const MainWrapper = styled.section`
margin: 0 auto;
height: 284px;
width: 536px;
display: flex;
flex-direction: column;
align-items: center;
`
const SearchType = styled.div`
width: 100%;
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
color: ${props => (props.color)};
`
const LicenseBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 163px;
height: 33px;
border-bottom: 2px solid ${props => (props.bottomLine)};
color: ${props => (props.color)};
`
const Input = styled.input`
margin: 0 auto;
box-sizing: border-box;
width: 100%;
height: 60px;
border-radius: 40px;
padding-left:60px;
padding-right: 140px;
border: 1px solid rgba(0, 0, 0, 0.5);
box-shadow: 0px 0px 4px 6px rgba(0, 0, 0, 0.04), inset 0px 4px 4px rgba(0, 0, 0, 0.2);
:focus{
    outline: 4px solid #b4f5ff
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
border: 1px solid rgba(0, 0, 0, 0.5);;
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
const FirstSearchBlock = () => {
    const [searchType, setSearchType] = useState('VIN');
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm();
    const userData = watch("userData") ? watch("userData") : "";
    const onSubmit = (data) => {
        console.log(searchType, data.userData);
        setTimeout(() => {
            navigate('/pre-search');
        }, 300)
    };
    useEffect(() => {
        if (validation) {
            setValidation(false)
        }
    }, [userData])
    return (
        <MainWrapper>
            <SearchType>
                <VinBlock
                    bottomLine={searchType === 'VIN' ? '#3AD0E6' : 'transparent'}
                    color={searchType === 'VIN' ? '#3AD0E6' : 'unset'}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => { setSearchType('VIN') }}>
                        VIN
                    </div>
                </VinBlock>
                <LicenseBlock
                    bottomLine={searchType === 'LICENSE-PLATE' ? '#3AD0E6' : 'transparent'}
                    color={searchType === 'LICENSE-PLATE' ? '#3AD0E6' : 'unset'}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => { setSearchType('LICENSE-PLATE') }}>
                        LICENSE PLATE
                    </div>
                </LicenseBlock>
            </SearchType>
            <form style={{ width: '100%', position: "relative" }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <MagnifyingGlassIcon />
                <Button onClick={() => { setValidation(true) }}>
                    Search
                </Button>
                <Input
                    value={userData}
                    {...register("userData", {
                        required: true
                    })}
                    onChange={(event) => {
                        setValue("userData", event.target.value, { shouldValidate: true });
                    }}
                    placeholder="Enter a VIN Number"
                    style={
                        validation && errors.userData ?
                            { outline: "4px solid rgba(255, 206, 227, 0.7)" } : null}
                />
            </form>
            <AdditionalText>
                Don’t have a VIN? START HERE, search later.
            </AdditionalText>
        </MainWrapper >
    )
}

export default FirstSearchBlock;