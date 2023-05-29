import styled from "styled-components";
import { ReactComponent as Car1 } from '../../images/animated-car-1.svg';
import { ReactComponent as Car2 } from '../../images/animated-car-2.svg';
import { ReactComponent as Car3 } from '../../images/animated-car-3.svg';
import { ReactComponent as Car4 } from '../../images/animated-car-4.svg';
import { ReactComponent as Car5 } from '../../images/animated-car-5.svg';
import { ReactComponent as Car6 } from '../../images/animated-car-6.svg';
import { ReactComponent as Car7 } from '../../images/animated-car-7.svg';
import { ReactComponent as Car8 } from '../../images/animated-car-8.svg';
import { ReactComponent as Car9 } from '../../images/animated-car-9.svg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components";
import { useEffect, useRef, useState } from "react";
const GlobalStyle = createGlobalStyle`
.progress-block .progress-bar {
background-color: #3AD0E6;
}
`
const MainWrapper = styled.section`
margin: 0 auto;
height: 675px;
width: 650px;
overflow: hidden;
`
const Title = styled.div`
text-align: center;
margin-top: 115px;
font-weight: 400;
font-size: 20px;
span{
    color: #FF0000;
}
`
const CarBlock = styled.div`
height: 180px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
transform: translateX(-100%)
`
const Car1Img = styled(Car1)`
width: 180px;
height: 74px;
transform: rotate(-2deg);
`
const Car2Img = styled(Car2)`
width: 180px;
height: 86px;
transform: rotate(-2deg);
`
const Car3Img = styled(Car3)`
width: 130px;
height: 76px;
transform: rotate(-2deg);
`
const Car4Img = styled(Car4)`
width: 200px;
height: 61px;
transform: rotate(-2deg);
`
const Car5Img = styled(Car5)`
width: 180px;
height: 68px;
transform: rotate(-2deg);
`
const Car6Img = styled(Car6)`
width: 230px;
height: 78px;
transform: rotate(-2deg);
`
const Car7Img = styled(Car7)`
width: 230px;
height: 85px;
transform: rotate(-2deg);
`
const Car8Img = styled(Car8)`
width: 200px;
height: 83px;
transform: rotate(-2deg);
`
const Car9Img = styled(Car9)`
width: 230px;
height: 91px;
transform: rotate(-2deg);
`
const ProgressBlock = styled.div`
height: 100px;
`
const ProgressStatus = styled(ProgressBar)`
margin: 0 auto;
width: 388px;
height: 6px !important;
background-color: rgba(0, 0, 0, 0.75);
`
const DescriptionBlock = styled.div`
margin: 10px auto 165px auto;
text-align: center;
width: 100%;
font-weight: 400;
font-size: 24px;
line-height: 38px;
`
const Progress = ({ changeScene }) => {
    const [progress, setProgress] = useState(0);
    const [canFinish, setCanFinish] = useState(true);
    const [carElement, setCarElement] = useState()
    const carBlock = useRef();
    const cars = [Car1Img, Car2Img, Car3Img, Car4Img, Car5Img, Car6Img, Car7Img, Car8Img, Car9Img];
    const startAnimation = (type) => {
        if (!type || type === 'center') {
            const animation = carBlock.current.animate(
                !type ? [
                    { transform: "translateX(-100%)" },
                    { transform: "translateX(-50%) rotate(1deg)" },
                    { transform: "translateX(0%) rotate(2deg)" },
                    { transform: "translateX(100%)" },
                ] : [
                    { transform: "translateX(-100%)" },
                    { transform: "translateX(-50%) rotate(1deg)" },
                    { transform: "translateX(0%) rotate(2deg)" },
                ],
                {
                    duration: !type ? 1900 : 1000,
                    easing: !type ? 'cubic-bezier(0.7, 1, 0.6, 0.4)' : 'cubic-bezier(0.7, 1, 1, 1)',
                    iterations: 1,
                }
            );
            animation.onfinish = () => {
                if (type === 'center') { carBlock.current.style.transform = "translateX(0%) rotate(2deg)" }
            }
        }
        if (type === "away") {
            const animation = carBlock.current.animate([
                { transform: "translateX(0%) rotate(2deg)" },
                { transform: "translateX(100%) rotate(0deg)" },
            ],
                {
                    duration: 850,
                    easing: 'cubic-bezier(1, 1, 0.6, 0.3)',
                    iterations: 1,
                }
            );
            animation.onfinish = () => {
                carBlock.current.style.transform = "translateX(100%) rotate(-2deg)"
            }
        }
    }
    useEffect(() => {
        let CarElement;
        setTimeout(() => {
            switch (progress) {
                case 0:
                    CarElement = cars[0];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 11:
                    CarElement = cars[1];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 22:
                    CarElement = cars[2];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 33:
                    CarElement = cars[3];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 44:
                    CarElement = cars[4];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 55:
                    CarElement = cars[5];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 66:
                    CarElement = cars[6];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 77:
                    CarElement = cars[7];
                    setCarElement(<CarElement />);
                    startAnimation();
                    break;
                case 88:
                    CarElement = cars[8];
                    setCarElement(<CarElement />);
                    startAnimation('center');
                    break;
                case 94:
                    startAnimation('away');
                    break;
                case 100:
                    changeScene();
                    break;
                default:
                    break;
            }
            if (progress <= 88 || canFinish) {
                setTimeout(() => { setProgress(progress + 1) }, 200)
            }

        }, !progress ? 400 : 0);
    }, [progress]);
    return (
        <MainWrapper>
            <GlobalStyle />
            <Title>
                We{"'"}re fueling up to search for <span>1M1AK06Y96N008881</span>
            </Title>
            <CarBlock ref={carBlock}>
                {carElement}
            </CarBlock>
            <ProgressBlock className="progress-block">
                <ProgressStatus now={progress} />
            </ProgressBlock>
            <DescriptionBlock>
                Looking up millions of records
                <br />
                Please wait while we try to identify your vehicle
            </DescriptionBlock>
        </MainWrapper>
    )
}
export default Progress;