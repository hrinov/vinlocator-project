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
width: 590px;
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
height: 200px;
width: 100%;
background-color: red;
transform: translateX(-100%)
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
const Progress = () => {
    const [progress, setProgress] = useState(0);
    const progressBarElement = useRef();
    useEffect(() => {
        setTimeout(() => {
            if (progress <= 88) {
                setTimeout(() => { setProgress(progress + 1) }, 200)
            }
        }, !progress ? 400 : 0)
    }, [progress])
    return (
        <MainWrapper>
            <GlobalStyle />
            <Title>
                We{"'"}re fueling up to search for <span>1M1AK06Y96N008881</span>
            </Title>
            <CarBlock>

            </CarBlock>
            <ProgressBlock className="progress-block">
                <ProgressStatus now={progress} ref={progressBarElement} />
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