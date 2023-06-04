import styled from "styled-components";
import { useRef } from "react";
import { ReactComponent as MagnifyingGlass } from '../../icons/magnifying-glass.svg';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as Letters } from '../../images/letters.svg';
import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';
import { ReactComponent as Union } from '../../icons/union.svg';
import secondBlueLineralGr from '../../images/second-blue-lineral-gr.svg'
import { useNavigate } from "react-router-dom";
const GradientBlock = styled.div`
position: absolute;
width: 1440px;
left: 50vw;
transform: translateX(-50%);
height: 700px;
z-index: -10;
background-image: url(${secondBlueLineralGr});
background-size: contain;
background-repeat: no-repeat;
@media (max-width: 1439px) {
    width: 100%;
height: 672px;
};
@media (max-width: 1023px) {
height: 491px;
};
@media (max-width: 767px) {
  height: 354px;
};
@media (max-width: 424px) {
   height: 200px;
}
`
const MainWrapper = styled.section`
box-sizing: border-box;
position: relative;
padding-top: 80px;
    height: 675px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1439px) {

};
@media (max-width: 1023px) {
    padding-top: 40px;
height: 650px;
};
@media (max-width: 767px) {
    height: 430px;
};
@media (max-width: 424px) {
      height: 409px;
}
`
const LettersImg = styled(Letters)`
width: 483px;
height: 172px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
width: 340px;
};
@media (max-width: 424px) {
    width: 300px;
}
`
const InputWrapper = styled.section`
margin: 0 auto;
height: 395px;
width: 536px;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 1439px) {
    height: 395px;
};
@media (max-width: 1023px) {
    height: 320px;
};
@media (max-width: 767px) {
    height: 250px;
    width: 380px;
};
@media (max-width: 424px) {
    height: 220px;
    width: 310px;
}
`
const Input = styled.input`
margin: 0 auto;
box-sizing: border-box;
width: 100%;
height: 60px;
border-radius: 40px;
padding-left: 60px;
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
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
 height: 55px;
  ::placeholder{
    font-size: 16px;
}
};
@media (max-width: 424px) {
 height: 52px;
padding-left: 40px;
 padding-right: 90px;
  ::placeholder{
    font-size: 15px;
}
}
`
const MagnifyingGlassIcon = styled(MagnifyingGlass)`
top: 18px;
left: 17px;
position: absolute;
width: 24px;
height: 24px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
    top: 16px;
    left: 14px;
    width: 20px;
    height: 20px;
}
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
    font-size: 15px;
    width: 76px;
    height: 35px;
    font-weight: 500;
}
`
const AdditionalText = styled.div`
margin-bottom: 11px;
font-weight: 400;
font-size: 14px;
text-align: center;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
font-size: 13px;
}
`
const ReviewsMainWrapper = styled.section`
position: relative;
margin: 0 auto;
width: 1184px;
overflow: hidden;
@media (max-width: 1439px) {
width: 900px;
};
@media (max-width: 1023px) {
   width: 706px;
};
@media (max-width: 767px) {
   width: 100vw;
};
@media (max-width: 424px) {

}
`
const ArrowLeftIcon = styled(ArrowLeft)`
display: block;
position: absolute;
left: 0px;
top: 174px;
height: 52px;
width: 52px;
cursor: pointer;
z-index: 10;
background-color: white;
border-radius: 100%;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
height: 45px;
width: 45px;
top: 136px;
left: 7px;
};
@media (max-width: 424px) {
top: 101px;
height: 32px;
width: 32px;
}
`
const ArrowRightIcon = styled(ArrowRight)`
position: absolute;
right: 0px;
top: 174px;
height: 52px;
width: 52px;
cursor: pointer;
z-index: 10;
background-color: white;
border-radius: 100%;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
height: 45px;
width: 45px;
top: 136px;
right: 7px;
};
@media (max-width: 424px) {
top: 101px;
height: 32px;
width: 32px;
}
`
const ReviewBlocks = styled.div`
transform: translateX(-1184px);
display: flex;
width: 300%;
`
const ReviewBlock = styled.div`
margin: 0 auto;
width: 1184px;
min-height: 445px;
display: flex;
align-items: center;
flex-direction: column;
padding-bottom: 10px;
@media (max-width: 1439px) {
    width: 900px;
    min-height: 420px;
};
@media (max-width: 1023px) {
    min-height: 405px;
    width: 800px;
};
@media (max-width: 767px) {
    min-height: 330px;
    width: 100vw;
};
@media (max-width: 424px) {
        min-height: 283px;

}
`
const ReviewHolder = styled.div`
width: 840px;
font-weight: 500;
font-size: 40px;
line-height: 44px;
margin-top: 50px;
text-align: center;
@media (max-width: 1439px) {
    width: 800px;
    font-size: 34px;
};
@media (max-width: 1023px) {
    margin-top: 40px;
    width: 550px;
    font-size: 28px;
};
@media (max-width: 767px) {
    width: 310px;
    font-size: 20px;
    line-height: 33px;
};
@media (max-width: 424px) {
        width: 250px;
    font-size: 16px;
    line-height: 25px;
   margin-top: 25px;
}
`
const ReviewAuthor = styled.div`
margin-top: 10px;
font-weight: 400;
font-size: 15px;
margin-top: 50px;
text-align: center;
font-family: 'Roboto', sans-serif;
span{
    display: block;
    margin-top: 5px;
    font-size: 13px;
    color: #D5DBE1;
}
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
margin-top: 32px;
};
@media (max-width: 424px) {
    font-size: 14px;
   margin-top: 22px;
   span{
    margin-top: 2px;
}
}
`
const Nav = styled.div`
margin: 0 auto;
width: 89px;
height: 16px;
display: flex;
justify-content: space-between;
margin-bottom: 180px;

@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
margin-bottom: 150px;
};
@media (max-width: 424px) {
    margin-bottom: 120px;
width: 70px;
}
`
const NavElement = styled.div`
width: 16px;
height: 16px;
border-radius: 100%;
border: 2px solid #D5DBE1;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
width: 14px;
height: 14px;
};
@media (max-width: 424px) {
   width: 13px;
height: 13px;
}
`
const UnionIcon = styled(Union)`
width: 64px;
height: 52px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
height: 45px;
};
@media (max-width: 767px) {
height: 35px;
};
@media (max-width: 424px) {
height: 31px;
}
`
const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [reviewsElements, setReviewsElements] = useState();
    const reviewBlocks = useRef();
    const handleClick = (type) => {
        reviewBlocks.current.style.transitionDuration = '800ms';
        setBtnDisabled(true);
        const blockWidth = getComputedStyle(reviewBlocks.current).width.replace('px', '') / 3;
        if (type === 'left') {
            reviewBlocks.current.style.transform = 'translateX(0%)'
            if (currentReview > 0) {
                setCurrentReview(currentReview - 1)
            } else { setCurrentReview(3) }
        }
        if (type === 'right') {
            reviewBlocks.current.style.transform = `translateX(-${blockWidth * 2}px)`;
            if (currentReview < 3) {
                setCurrentReview(currentReview + 1)
            } else { setCurrentReview(0) }
        }
    }
    const reviewsData = [
        {
            text: "This platform is awesome! I've been waiting for a tool that actually enables us to source candidates easily using referrals.This is the future!",
            author: 'BRIAN BROWN',
            authorOrganization: 'UPS'
        },
        {
            text: "This platform is awesome! I've been waiting for a tool that actually enables us to source candidates easily using referrals.This is the future!",
            author: 'BRIAN BROWN',
            authorOrganization: 'UPS'
        },
        {
            text: "This platform is awesome! I've been waiting for a tool that actually enables us to source candidates easily using referrals.This is the future!",
            author: 'BRIAN BROWN',
            authorOrganization: 'UPS'
        },
        {
            text: "This platform is awesome! I've been waiting for a tool that actually enables us to source candidates easily using referrals.This is the future!",
            author: 'BRIAN BROWN',
            authorOrganization: 'UPS'
        }
    ];
    useEffect(() => {
        const blockWidth = getComputedStyle(reviewBlocks.current).width.replace('px', '') / 3;
        let reviewSet = [];
        let index = currentReview;
        setTimeout(() => {
            reviewBlocks.current.style.transitionDuration = 'unset';
            for (let i = -1; i < 2; i++) {
                reviewSet.push(
                    <ReviewBlock key={index}>
                        <UnionIcon />
                        <ReviewHolder>
                            {reviewsData[index].text}
                        </ReviewHolder>
                        <ReviewAuthor>
                            {reviewsData[index].author}
                            <br />
                            <span>{reviewsData[index].authorOrganization}</span>
                        </ReviewAuthor>
                    </ReviewBlock>
                )
                if (index < 3) {
                    index = index + 1;
                } else { index = 0 }
                reviewBlocks.current.style.transform = `translateX(-${blockWidth}px)`
            }
            setReviewsElements(reviewSet);
            setBtnDisabled(false);
        }, reviewsElements ? 800 : 0)

    }, [currentReview])
    return (
        <ReviewsMainWrapper>
            <ArrowLeftIcon onClick={() => { if (!btnDisabled) { handleClick('left') } }} />
            <ArrowRightIcon onClick={() => { if (!btnDisabled) { handleClick('right') } }} />

            <ReviewBlocks ref={reviewBlocks}>
                {reviewsElements}
            </ReviewBlocks>
            <Nav>
                <NavElement style={currentReview === 3 ? { backgroundColor: '#D5DBE1' } : null} />
                <NavElement style={currentReview === 0 ? { backgroundColor: '#D5DBE1' } : null} />
                <NavElement style={currentReview === 1 ? { backgroundColor: '#D5DBE1' } : null} />
                <NavElement style={currentReview === 2 ? { backgroundColor: '#D5DBE1' } : null} />
            </Nav>
        </ReviewsMainWrapper>
    )
}
const EnterEmail = ({ setDisappear }) => {
    const navigate = useNavigate();
    const [validation, setValidation] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm();
    const userData = watch("userData") ? watch("userData") : "";
    const onSubmit = (data) => {
        console.log(data.userData);
        setDisappear(true)
        setTimeout(() => { navigate('/search') }, 600)
    };
    useEffect(() => {
        if (validation) {
            setValidation(false)
        }
    }, [userData])
    return (
        <>
            <GradientBlock />
            <MainWrapper>
                <LettersImg />
                <AdditionalText>
                    Enter your email please. We will email your results
                </AdditionalText>
                <InputWrapper>
                    <form style={{ width: '100%', position: "relative" }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <MagnifyingGlassIcon />
                        <Button onClick={() => { setValidation(true) }}>
                            Submit
                        </Button>
                        <Input
                            value={userData}
                            {...register("userData", {
                                required: true
                            })}
                            onChange={(event) => {
                                setValue("userData", event.target.value, { shouldValidate: true });
                            }}
                            placeholder="Enter your E-mail"
                            style={
                                validation && errors.userData ?
                                    { outline: "4px solid rgba(255, 206, 227, 0.7)" } : null}
                        />
                    </form>
                </InputWrapper>
            </MainWrapper>
            <Reviews />
        </>
    )
}
export default EnterEmail;
