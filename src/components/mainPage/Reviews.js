import styled from "styled-components";
import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';
import { ReactComponent as Union } from '../../icons/union.svg';
import { useEffect, useRef, useState } from "react";
const MainWrapper = styled.section`
position: relative;
margin: 0 auto;
margin-top: 160px;
width: 1184px;
overflow: hidden;
@media (max-width: 1439px) {
width: 900px;
};
@media (max-width: 1023px) {
   width: 706px;
};
@media (max-width: 767px) {

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
@media (max-width: 1439px) {
    width: 900px;
};
@media (max-width: 1023px) {
    min-height: 405px;
   width: 800px;
};
@media (max-width: 767px) {

};
@media (max-width: 424px) {

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

};
@media (max-width: 424px) {

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
`
const Nav = styled.div`
margin: 0 auto;
width: 89px;
height: 16px;
display: flex;
justify-content: space-between;
margin-bottom: 5px;
`
const NavElement = styled.div`
width: 16px;
height: 16px;
border-radius: 100%;
border: 2px solid #D5DBE1;
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

};
@media (max-width: 424px) {

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
        <MainWrapper>
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
        </MainWrapper>
    )
}
export default Reviews;