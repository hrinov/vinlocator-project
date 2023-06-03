import styled from "styled-components";
import { ReactComponent as CardTick } from '../../icons/card-tick.svg';
import { ReactComponent as Slide1 } from '../../images/first-3d-car.svg';
import { ReactComponent as Slide1Mobile } from '../../images/first-3d-car.svg';
import { ReactComponent as Slide3 } from '../../images/second-3d-car.svg';
import slide4 from '../../images/shield.png';
import { ReactComponent as Slide5 } from '../../images/third-3d-car.svg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './slide1Animation.css'
import './slide3Animation.css'
import './slide5Animation.css'
const GlobalStyle = createGlobalStyle`
.progress-block .progress-bar {
background-color: #3AD0E6;
}
`
const MainWrapper = styled.section`
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 40%, #dbf7fc 100%);
background-repeat: no-repeat;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {

};
@media (max-width: 424px) {

}
`
const SlidesBlock = styled.div`
margin: 30px auto;
height: 400px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
   margin: 20px auto;
};
@media (max-width: 767px) {
    height: 360px;
margin: 10px auto;
};
@media (max-width: 424px) {
    margin: 0px auto;
 height: 320px;
}
`
const Slide1Img = styled(Slide1)`
width: 570px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
   
};
@media (max-width: 767px) {
 width: 420px;
};
@media (max-width: 424px) {

}
`
const Slide1MobileImg = styled(Slide1Mobile)`
 width: 420px;
@media (max-width: 424px) {
  width: 320px;
}
`
const Slide3Img = styled(Slide3)`
transform: translateY(5%);
width: 360px;
`
const Slide4Img = styled.img`
height: 275px;
width: 320px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
   
};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
height: 250px;
width: 295px;
}
`
const Slide5Img = styled(Slide5)`
width: 440px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
   
};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
  width: 320px;
}
`
// 52+
const ProgressBlock = styled.div`
height: 60px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
height: 55px;
};
@media (max-width: 767px) {
height: 50px;
};
@media (max-width: 424px) {
height: 40px;
}
`
const ProgressStatus = styled(ProgressBar)`
margin: 0 auto;
width: 388px;
height: 6px !important;
background-color: rgba(0, 0, 0, 0.75);
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {

};
@media (max-width: 424px) {
width: 320px;
}
`
const Slide2Wrapper = styled.div`
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
width: 386px;
height: 290px;
border: 1px solid rgba(0, 0, 0, 0.5);;
box-shadow: 0px 30px 20px rgba(0, 0, 0, 0.04);
border-radius: 30px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
height: 270px;
};
@media (max-width: 424px) {
    height: 220px;
    padding-left: 18px;
    padding-right: 20px;
    width: 320px;
}
`
const Slide2Block = styled.div`
width: 300px;
display: grid;
grid-template-columns: 115px 180px;
grid-auto-rows: 32px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
grid-auto-rows: 28px;
};
@media (max-width: 424px) {
 grid-auto-rows: 26px;
}
`
const Slide2BlockData = styled.div`
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
    font-size: 13px;
    span {
        font-size: 13px;
    } 
};
@media (max-width: 424px) {
     font-size: 12px;
    span {
        font-size: 13px;
    } 
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
const DescriptionBlock = styled.div`
min-height: 280px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {

};
@media (max-width: 767px) {
min-height: 300px;
};
@media (max-width: 424px) {
min-height: 340px;
}
`
const Title = styled.div`
text-align: center;
font-weight: 600;
font-size: 26px;
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
font-size: 24px;
};
@media (max-width: 767px) {
font-size: 22px;
};
@media (max-width: 424px) {
font-size: 20px;
}
`
const Description = styled.div`
margin: 10px auto 165px auto;
text-align: center;
width: 750px;
font-weight: 400;
font-size: 14px;
line-height: 20px;
span {
    font-weight: 600
}
@media (max-width: 1439px) {

};
@media (max-width: 1023px) {
width: 706px;
};
@media (max-width: 767px) {
width: 422px;
font-size: 13px;
};
@media (max-width: 424px) {
    font-size: 12px;
width: 320px;
}
`
const Slide2 = () => {
    return (
        <Slide2Wrapper>
            <ListingsLabel><IconWrapper>
                <CardTick style={{ width: '100%', height: '100%' }} />
            </IconWrapper>Listings</ListingsLabel>
            <Slide2Block>
                <Slide2BlockData>Listed for</Slide2BlockData>
                <Slide2BlockData><span>$12.485</span></Slide2BlockData>
                <Slide2BlockData>Mileage</Slide2BlockData>
                <Slide2BlockData><span>125.959</span></Slide2BlockData>
                <Slide2BlockData>Listed by</Slide2BlockData>
                <Slide2BlockData><span>Peach State Motors Inc</span></Slide2BlockData>
                <Slide2BlockData>Type</Slide2BlockData>
                <Slide2BlockData><span>-</span></Slide2BlockData>
                <Slide2BlockData>Inventory Type</Slide2BlockData>
                <Slide2BlockData><span>Used</span></Slide2BlockData>
                <Slide2BlockData>Seller Type</Slide2BlockData>
                <Slide2BlockData><span>Dealer</span></Slide2BlockData>
                <Slide2BlockData>Listing URL</Slide2BlockData>
                <Slide2BlockData><span>Peachstatemotors.com</span></Slide2BlockData>
            </Slide2Block>
        </Slide2Wrapper>)
}
const Slide4 = () => {
    return (
        <Slide4Img src={slide4} />
    )
}
const Progress = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [descriptionData, setDescriptionData] = useState(
        {
            title: '',
            description: ''
        }
    );
    const [canFinish, setCanFinish] = useState(true);
    const [slideElement, setSlideElement] = useState();
    const slidesBlock = useRef();
    const descriptionBlock = useRef();
    const animatedBlocks = [slidesBlock, descriptionBlock];
    const Slide1Ref = useRef();
    const Slide3Ref = useRef();
    const Slide5Ref = useRef();
    const AnimatedSlide1 = <div className="firstAnimation"><Slide1Img ref={Slide1Ref} /></div>;
    const AnimatedSlide3 = <div className="thirdAnimation"><Slide3Img ref={Slide3Ref} /></div>;
    const AnimatedSlide5 = <div className="fifthAnimation"><Slide5Img ref={Slide5Ref} /></div>;
    const slides = [AnimatedSlide1, Slide2, AnimatedSlide3, Slide4, AnimatedSlide5];
    const startAnimation = (type) => {
        animatedBlocks.forEach((block) => {
            if (!type || type === 'center') {
                const animation = block.current.animate(
                    !type ? [
                        { opacity: "0" },
                        { opacity: "1" },
                        { opacity: "1" },
                        { opacity: "1" },
                        { opacity: "1" },
                        { opacity: "1" },
                        { opacity: "0" },
                    ] : [
                        { opacity: "0" },
                        { opacity: "1" },
                        { opacity: "1" },
                        { opacity: "1" },
                        { opacity: "1" }
                    ],
                    {
                        duration: !type ? 7200 : 4000,
                        iterations: 1,
                    }
                );
                animation.onfinish = () => {
                    if (type === 'center') { block.current.style.opacity = "1" }
                }
            }
            if (type === "away") {
                const animation = block.current.animate([
                    { opacity: "1" },
                    { opacity: "1" },
                    { opacity: "0" }
                ],
                    {
                        duration: 2000,
                        iterations: 1,
                    }
                );
                animation.onfinish = () => {
                    block.current.style.opacity = "0"
                }
            }
        })
    }
    useEffect(() => {
        let SlideElement;
        switch (progress) {
            case 0:
                SlideElement = slides[0];
                setSlideElement(SlideElement);
                setDescriptionData({
                    title: <div>Accident history</div>,
                    description: <div>In the event that your vehicle has been involved in an accident requiring intervention
                        from law enforcement or insurance companies, the relevant dates and detailed information about those
                        accidents may be included in your <span>Vinlocator</span> report. We make regular updates to our database
                        as new information becomes available, allowing you to check and revisit your accident history report as
                        often as needed to ensure you are up to date with the latest information.</div>
                })
                startAnimation();
                break;
            case 3:
                Slide1Ref.current.classList.add('active')
                break;
            case 20:
                SlideElement = slides[1];
                setSlideElement(<SlideElement />);
                setDescriptionData({
                    title: <div>Sales listings</div>,
                    description: <div>By conducting a VIN lookup or license plate search with <span>Vinlocator</span>, you can gain
                        access to a comprehensive sales history for the vehicle.This valuable information not only provides insight into
                        the vehicle's value but also serves as confirmation of the number of previous owners as stated by the current
                        seller. Understanding the complete sales history can enhance your understanding of the vehicle's background and
                        assist you in making an informed decision.</div>
                })
                startAnimation();
                break;
            case 40:
                SlideElement = slides[2];
                setSlideElement(SlideElement);
                setDescriptionData({
                    title: <div>Specifications and equipment</div>,
                    description: <div>If you're unsure whether the car you're interested in has a sunroof or blind spot detection as standard
                        features, conducting a make and model search with <span>Vinlocator</span> can provide you with a comprehensive display
                        of all the standard equipment in one convenient place. This saves you the trouble of having to track down manufacturer
                        specifications and read through numerous reviews. Additionally, by utilizing our VIN decoder, you can delve deeper and
                        potentially determine if a specific vehicle is lacking essential standard equipment. This way, you can make a more informed
                        decision when considering your vehicle options.</div>
                })
                startAnimation();
                break;
            case 43:
                Slide3Ref.current.classList.add('active')
                break;
            case 60:
                SlideElement = slides[3];
                setSlideElement(<SlideElement />);
                setDescriptionData({
                    title: <div>Vehicle safety</div>,
                    description: <div><span>Vinlocator</span> offers a comprehensive analysis of a vehicle's NHTSA safety ratings, which is a crucial
                        factor for many drivers prioritizing safety. Our platform provides a detailed overview of these ratings, helping you make an informed
                        decision about whether a particular vehicle meets your safety requirements. Additionally, we offer information on safety complaints
                        filed by consumers to the NHTSA, ensuring that you have access to all relevant safety details when considering a vehicle.</div>
                })
                startAnimation();
                break;
            case 80:
                SlideElement = slides[4];
                setSlideElement(SlideElement);
                setDescriptionData({
                    title: <div>Market Value</div>,
                    description: <div>Bumper analyzes past sales of similar vehicles to provide below, average and above market estimates for vehicles.</div>
                })
                startAnimation('center');
                break;
            case 83:
                Slide5Ref.current.classList.add('active')
                break;
            case 90:
                startAnimation('away');
                break;
            case 100:
                navigate('/payment')
                break;
            default:
                break;
        }
        if (progress <= 88 || canFinish) {
            // if (progress <= 10) {
            setTimeout(() => { setProgress(progress + 1) }, 350)
        }
    }, [progress]);
    return (
        <>
            <GlobalStyle />
            <MainWrapper>
                <SlidesBlock ref={slidesBlock}>
                    {slideElement}
                </SlidesBlock>
                <ProgressBlock className="progress-block">
                    <ProgressStatus now={progress} />
                </ProgressBlock>
                <DescriptionBlock ref={descriptionBlock} style={{ opacity: '0' }}>
                    <Title>
                        {descriptionData.title}
                    </Title>
                    <Description>
                        {descriptionData.description}
                    </Description>
                </DescriptionBlock>
            </MainWrapper>
        </>
    )
}
export default Progress;
