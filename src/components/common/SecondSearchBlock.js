import styled from "styled-components"
import { ReactComponent as MagnifyingGlass } from '../../icons/magnifying-glass.svg';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const MainWrapper = styled.section`
position: relative;
margin: 0 auto;
height: 290px;
width: 1280px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(234deg, #FFFFFF -15.85%, #3AD0E6 97.11%);
border-radius: 6px;
transform: translateY(137px);
z-index: 10;
@media (max-width: 1439px) {
width: 900px;
};
@media (max-width: 1023px) {
    height: 260px;
    width: 706px;
};
@media (max-width: 767px) {
        height: 220px;
width: 410px;
};
@media (max-width: 424px) {

}
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
@media (max-width: 1439px) {
 
};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
    width: 380px;
    margin: 0px auto 15px auto;
    font-size: 15px;
   padding-top: 5px; 
};
@media (max-width: 424px) {

}
`
const VinBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 163px;
height: 33px;
border-bottom: 2px solid ${props => (props.bottomLine)};
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
width: 126px;
};
@media (max-width: 424px) {

}
`
const LicenseBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 163px;
height: 33px;
border-bottom: 2px solid ${props => (props.bottomLine)};
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
width: 126px;
};
@media (max-width: 424px) {

}
`
const Form = styled.form`
position: relative;
width: 536px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
    width: 380px;
};
@media (max-width: 424px) {

}
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
border: 1px solid rgba(0, 0, 0, 0.5);
box-shadow: 0px 0px 0px 6px rgba(0, 0, 0, 0.04), inset 0px 4px 4px rgba(0, 0, 0, 0.2);
:focus{
    outline: 4px solid #b3f5ff
}
    ::placeholder{
    font-family: 'Roboto';
    font-weight: 200;
    font-size: 20px;
    color: #3A3A3A;
}
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
    width: 380px;
    height: 55px;
    ::placeholder{
    font-size: 16px;
}
};
@media (max-width: 424px) {

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
border: 1px solid rgba(0, 0, 0, 0.5);
font-weight: 700;
font-size: 18px;
border-radius: 40px;
margin-left: 10px;
cursor: pointer;
:hover{
   background-color: #50dff5; 
}
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
    font-weight: 600;
    font-size: 18px;
width: 96px;
height: 39px;
};
@media (max-width: 424px) {

}
`
const AdditionalText = styled.div`
margin-top: 11px;
font-weight: 400;
font-size: 14px;
text-align: center;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
    font-size: 13px;
}
@media (max-width: 424px) {

}
`
const SecondSearchBlock = () => {
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
            <Form
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
            </Form>
            <AdditionalText>
                Don’t have a VIN? START HERE, search later.
            </AdditionalText>
        </MainWrapper >
    )
}

export default SecondSearchBlock;