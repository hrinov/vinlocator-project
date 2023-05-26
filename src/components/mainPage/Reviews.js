import styled from "styled-components";
import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';
import { ReactComponent as Union } from '../../icons/union.svg';
import { useEffect, useRef, useState } from "react";
const MainWrapper = styled.section`
position: relative;
margin: 0 auto;
width: 1184px;
margin-bottom: 125px;
overflow: hidden;
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
transform: translateX(-25%);
display: flex;
width: 400%;
transition-duration: 800ms;
`
const ReviewBlock = styled.div`
margin: 0 auto;
width: 1184px;
min-height: 445px;
display: flex;
align-items: center;
flex-direction: column;
`
const ReviewHolder = styled.div`
width: 840px;
font-weight: 500;
font-size: 40px;
line-height: 44px;
margin-top: 50px;
text-align: center;
`
const ReviewAuthor = styled.div`
margin-top: 10px;
width: 840px;
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
`
const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(2);
    const reviewBlocks = useRef();
    const handleClick = (type) => {
        if (type === 'left') {
            if (currentReview > 1) {
                setCurrentReview(currentReview - 1)
            }
        }
        if (type === 'right') {
            if (currentReview < 4) {
                setCurrentReview(currentReview + 1)
            }
        }
    }
    useEffect(() => {
        switch (currentReview) {
            case 1:
                reviewBlocks.current.style.transform = 'translateX(0%)';
                break;
            case 2:
                reviewBlocks.current.style.transform = 'translateX(-25%)';
                break;
            case 3:
                reviewBlocks.current.style.transform = 'translateX(-50%)';
                break;
            case 4:
                reviewBlocks.current.style.transform = 'translateX(-75%)';
                break;
            default:
                break;
        }
    }, [currentReview])
    return (
        <MainWrapper>
            <ArrowLeftIcon onClick={() => { handleClick('left') }} />
            <ArrowRightIcon onClick={() => { handleClick('right') }} />

            <ReviewBlocks ref={reviewBlocks}>
                <ReviewBlock>
                    <UnionIcon />
                    <ReviewHolder>
                        This platform is awesome! I've been waiting for a tool that actually enables
                        us to source candidates easily using referrals. This is the future!
                    </ReviewHolder>
                    <ReviewAuthor>
                        BRIAN BROWN
                        <br />
                        <span>UPS</span>
                    </ReviewAuthor>
                </ReviewBlock>
                <ReviewBlock>
                    <UnionIcon />
                    <ReviewHolder>
                        This platform is awesome! I've been waiting for a tool that actually enables
                        us to source candidates easily using referrals. This is the future!
                    </ReviewHolder>
                    <ReviewAuthor>
                        BRIAN BROWN
                        <br />
                        <span>UPS</span>
                    </ReviewAuthor>
                </ReviewBlock>
                <ReviewBlock>
                    <UnionIcon />
                    <ReviewHolder>
                        This platform is awesome! I've been waiting for a tool that actually enables
                        us to source candidates easily using referrals. This is the future!
                    </ReviewHolder>
                    <ReviewAuthor>
                        BRIAN BROWN
                        <br />
                        <span>UPS</span>
                    </ReviewAuthor>
                </ReviewBlock>
                <ReviewBlock>
                    <UnionIcon />
                    <ReviewHolder>
                        This platform is awesome! I've been waiting for a tool that actually enables
                        us to source candidates easily using referrals. This is the future!
                    </ReviewHolder>
                    <ReviewAuthor>
                        BRIAN BROWN
                        <br />
                        <span>UPS</span>
                    </ReviewAuthor>
                </ReviewBlock>
            </ReviewBlocks>
            <Nav>
                <NavElement style={currentReview === 1 ? { backgroundColor: '#D5DBE1' } : null} />
                <NavElement style={currentReview === 2 ? { backgroundColor: '#D5DBE1' } : null} />
                <NavElement style={currentReview === 3 ? { backgroundColor: '#D5DBE1' } : null} />
                <NavElement style={currentReview === 4 ? { backgroundColor: '#D5DBE1' } : null} />
            </Nav>
        </MainWrapper>
    )
}
export default Reviews;