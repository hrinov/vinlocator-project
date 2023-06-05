import styled from "styled-components";
import { ReactComponent as $1 } from '../../images/$1.svg';
import { ReactComponent as Amex } from '../../icons/amex.svg';
import { ReactComponent as Discover } from '../../icons/discover.svg';
import { ReactComponent as GooglePay } from '../../icons/google-pay.svg';
import { ReactComponent as GooglePayWhiteBg } from '../../icons/google-pay-white-bg.svg';
import { ReactComponent as Mastercard } from '../../icons/mastercard.svg';
import { ReactComponent as Visa } from '../../icons/visa.svg';
import { ReactComponent as Paypal } from '../../icons/paypal.svg';
import { ReactComponent as PaypalWhiteBg } from '../../icons/paypal-white-bg.svg';
import { ReactComponent as Norton } from '../../icons/norton.svg';
import { ReactComponent as BuyWithGP } from '../../icons/BuyWithGP.svg';
import { useNavigate } from "react-router-dom";
const MainWrapper = styled.section`
margin: 35px auto 0 auto;
display: flex;
justify-content: space-between;
width: 1112px;
display: flex;
background-color: rgb(252, 253, 255);
margin-bottom: 150px;
@media (max-width: 1439px) {
    width: 900px;
};
@media (max-width: 1023px) {
     width: 706px; 
};
@media (max-width: 767px) {
    width: 420px; 
};
@media (max-width: 424px) {
    width: 320px;
}
`
const LeftSide = styled.div`
width: 48.5%;
`
const RightSide = styled.div`
width: 48.5%;
`
const TitleWrapper = styled.div`
display: flex;
`
const ListNumber = styled.div`
width: 24px;
height: 24px;
border-radius: 100%;
background-color: #3AD0E6;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 16px;
`
const TitleType1 = styled.div`
font-weight: 600;
font-size: 16px;
margin-left: 8px;
margin-bottom: 18px;
`
const FirstInfoBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
height: 96px;
padding-left: 33px;
padding-right: 105px;
box-shadow: 0px 0px 12px rgba(0, 5, 53, 0.08);
border-radius: 12px;
`
const FirstInfoBlockText = styled.div`
box-sizing: border-box;
font-weight: 500;
font-size: 18px;
span {
   font-weight: 300;
font-size: 16px; 
}
`
const FirstInfoBlockImg = styled($1)`
height: 78px;
width: 72px;
`
const FirstCreditCardIconsWrapper = styled.div`
margin: 0 auto;
width: 72%;
display: flex;
justify-content: space-between;
margin-top: 48px;
margin-bottom: 47px;
`
const CreditCardIconWrapper = styled.div`
height: 32px;
width: 56px;
margin-left: 8px;
`
const SecondInfoBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
height: 338px;
padding-left: 0px;
box-shadow: 0px 0px 12px rgba(0, 5, 53, 0.08);
border-radius: 12px;
font-weight: 500;
font-size: 16px;
margin-bottom: 30px;
li {
    list-style: none;
    list-style-position: inside;
    padding-left: 0px;
    margin-bottom: 3px;
    ::before{
        content: '•';
        font-size: 15px;
        margin-right: 7px;
    }
}
`
const SelectCardBlock = styled.div`
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
height: 96px;
padding-left: 33px;
padding-right: 20px;
box-shadow: 0px 0px 12px rgba(0, 5, 53, 0.08);
border-radius: 12px;
margin-bottom: 12px;
`
const RadioInput = styled.input`
   margin-left: 4px;
    margin-right: 15px;
    accent-color: black !important;
    background-size: cover !important;
    border: 3px solid white !important;
    border-radius: 100%;
  outline: 4px solid rgb(229,230,233) !important;
:checked {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%) !important;
    background-size: cover !important;
    background-repeat: repeat !important;
    border: 3px solid white !important;
        border-radius: 100%;
    border-color: white !important;
    background-color: white !important;
    outline: 4px solid rgb(229,230,233) !important;
}
:focus {
 box-shadow: none !important;   
}
:active {
      filter: unset !important;
}
`
const CheckElementAndTitle = styled.div`
display: flex;
font-weight: 600;
font-size: 16px;
background-image: black;
`
const GooglePayCard = styled(GooglePayWhiteBg)`
width: 100px;
height: 63px;
`
const PayPalCard = styled(PaypalWhiteBg)`
width: 100px;
height: 63px;
`
const SecondCreditCardIconsWrapper = styled.div`
width: 256px;
display: flex;
justify-content: end;
margin-top: 48px;
margin-bottom: 47px;
`
const NortonIcon = styled(Norton)`
margin-top: 20px;
margin-bottom: 12px;
width: 80px;
height: 45px;
margin-left: 33px;
`
const TitleType2 = styled.div`
font-weight: 600;
font-size: 16px;
margin-left: 33px;
margin-bottom: 18px;
`
const CheckBox = styled.div`
padding-left: 33px;
`
const TextInput = styled.input`
height: 58px;
width: 100%;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 12px;
padding-left: 33px;
padding-right: 12px;
margin-bottom: 35px;
::placeholder{
    font-weight: 200;
    font-size: 16px;
}
:focus{
    outline: 4px solid #b3f5ff
}
`
const CheckElementAndDescription = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 40px;
`
const CheckBlock = styled.div`
display: flex;
`
const CheckElementWrapper = styled.div`
padding-top: 5px;
display: flex;
align-items: start;
justify-content: center;
margin-right: 12px;
`
const CheckBoxInput = styled.input`
    margin-left: 4px;
    margin-right: 15px !important;
    accent-color: black !important;
    background-size: cover !important;
    border: 3px solid white !important;
    border-radius: 32% !important;
   outline: 2px solid rgba(0, 0, 0, 0.9) !important;
:checked {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%) !important;
    background-size: cover !important;
    background-repeat: repeat !important;
    border: 3px solid white !important;
    outline: 2px solid rgba(0, 0, 0, 0.9) !important;
     border-radius: 32% !important;
}
:focus {
     box-shadow: none !important;
}
:active {
      filter: unset !important;
}
`
const Description = styled.div`
font-weight: 300;
font-size: 14px;
line-height: 24px;
margin-bottom: 16px;
span {
    cursor: pointer;
    text-decoration: underline;
}
a {
    cursor: pointer;
    color: unset;
    text-decoration: underline;
    text-decoration-color: unset;
}
`
const BuyWithGPIcon = styled(BuyWithGP)`
width: 180px;
height: 40px;
`
const OrderSummaryBlock = styled.div`
box-sizing: border-box;
width: 100%;
height: 276px;
background-color: #D5DBE133;
margin-top: 42px;
border-radius: 12px;
padding: 25px 20px 55px 20px;
margin-bottom: 35px;
`
const Line = styled.div`
height: 1px;
margin-top: 10px;
margin-bottom: 10px;
width: 100%;
background-color: #D5DBE1;
`
const OrderSummaryData = styled.div`
display: flex;
justify-content: space-between;
font-weight: 400;
font-size: 16px;
span {
    font-weight: 700;
    font-size: 16px;
}
`
const TitleType3 = styled.div`
font-weight: 600;
font-size: 16px;
margin-bottom: 8px;
`
const PaymentOptions = () => {
    const navigate = useNavigate();
    return (
        <form>
            <MainWrapper>
                <LeftSide>
                    <div className="firstBlock">
                        <TitleWrapper>
                            <ListNumber>
                                1
                            </ListNumber>
                            <TitleType1>
                                Special $1 trial offer
                            </TitleType1>
                        </TitleWrapper>
                        <FirstInfoBlock>
                            <FirstInfoBlockText>
                                7 DAY MEMBERSHIP TRIAL
                                <br />
                                <span>Run 50 reports per month!</span>
                            </FirstInfoBlockText>
                            <FirstInfoBlockImg />
                        </FirstInfoBlock>
                        <FirstCreditCardIconsWrapper>
                            <CreditCardIconWrapper><GooglePay style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                            <CreditCardIconWrapper><Paypal style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                            <CreditCardIconWrapper><Visa style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                            <CreditCardIconWrapper><Mastercard style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                            <CreditCardIconWrapper><Amex style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                            <CreditCardIconWrapper><Discover style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                        </FirstCreditCardIconsWrapper>
                    </div>
                    <div className="secondBlock">
                        <TitleWrapper>
                            <ListNumber>
                                2
                            </ListNumber>
                            <TitleType1>
                                Your membership benefits include
                            </TitleType1>
                        </TitleWrapper>
                        <SecondInfoBlock>
                            <ul>
                                <li>VIN Lookups </li>
                                <li>Accident** $ Salvage Lookups </li>
                                <li>Theft Records Lookups </li>
                                <li>Sales & Background Searches </li>
                                <li>Title Checks </li>
                                <li>Specifications & Equipment Details </li>
                                <li>Market Values & Ownership Cost </li>
                                <li>Ways to search. Search by VIN, License, Plate, and Model </li>
                                <li>Different cars and Download PDF Reports </li>
                            </ul>
                        </SecondInfoBlock>
                    </div>
                    <div className="thirdBlock">
                        <TitleWrapper>
                            <ListNumber>
                                3
                            </ListNumber>
                            <TitleType1>
                                Final step - Just enter your details
                            </TitleType1>
                        </TitleWrapper>
                        <SelectCardBlock>
                            <CheckElementAndTitle>
                                <RadioInput type="radio" name="selectCard" className="form-check-input" />
                                Google Pay
                            </CheckElementAndTitle>
                            <GooglePayCard />
                        </SelectCardBlock>
                        <SelectCardBlock>
                            <CheckElementAndTitle>
                                <RadioInput type="radio" name="selectCard" className="form-check-input" />
                                Pay Pal
                            </CheckElementAndTitle>
                            <PayPalCard />
                        </SelectCardBlock>
                        <SelectCardBlock>
                            <CheckElementAndTitle>
                                <RadioInput type="radio" name="selectCard" className="form-check-input" />
                                Credit or Debit Card
                            </CheckElementAndTitle>
                            <SecondCreditCardIconsWrapper>
                                <CreditCardIconWrapper><Visa style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                                <CreditCardIconWrapper><Mastercard style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                                <CreditCardIconWrapper><Amex style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                                <CreditCardIconWrapper><Discover style={{ width: '100%', height: '100%' }} /></CreditCardIconWrapper>
                            </SecondCreditCardIconsWrapper>
                        </SelectCardBlock>
                    </div>
                    <NortonIcon />
                    <div className="fourthBlock">
                        <TitleType2>Account information</TitleType2>
                        <TextInput placeholder="Enter Email address" />
                        <CheckBox>
                            <CheckElementAndDescription>
                                <CheckBlock>
                                    <CheckElementWrapper>
                                        <CheckBoxInput type="checkbox" className="form-check-input" defaultChecked />
                                    </CheckElementWrapper>
                                    <Description>
                                        You understand that the trial is limited to running 50reports during the trial period,
                                        which lasts until 6/5/2023. If you would like to cancel before your trial ends, you may
                                        do so for any reason. Simply call 1-332-225-9745, email support@bumper.com or use our
                                        Contact Us form. Otherwise, your trial will end on 6/5/2023, at which time you will be
                                        charged the standard monthly rate of $19.99 plus applicable sales tax. Your membership
                                        will automatically renew every 30 days thereafter until you cancel, and your membership
                                        is limited to running 50 reports per month.
                                    </Description>
                                </CheckBlock>
                                <CheckBlock>
                                    <CheckElementWrapper>
                                        <CheckBoxInput type="checkbox" className="form-check-input" defaultChecked />
                                    </CheckElementWrapper>
                                    <Description>
                                        By clicking the checkbox, you represent that you are over 18 years of age and agree to the  <span onClick={() => { navigate('/terms-of-use') }}>
                                            Terms of Service</span>, <a href="https://www.bumper.com/nmvtis-disclaimer/">NMVTIS Disclaimer</a> and <span onClick={() => { navigate('/privacy-policy') }}>
                                            Privacy Policy</span>, and you agree to receive email from Bumper.com. You also understand that Bumper does not guarantee that it has information on
                                        any particular vehicle, and vehicle history reports are based solely on information supplied to Bumper.
                                    </Description>
                                </CheckBlock>
                            </CheckElementAndDescription>
                        </CheckBox>
                    </div>
                    <BuyWithGPIcon />
                </LeftSide>

                <RightSide>
                    <div className='sixthBlock'>
                        <OrderSummaryBlock>
                            <TitleType1>ORDER SUMMARY</TitleType1>
                            <Line />
                            <OrderSummaryData>
                                <div>7 Day trial membership</div>
                            </OrderSummaryData>
                            <Line />
                            <OrderSummaryData>
                                <div>All-Access</div>
                                <div>3 Search Types</div>
                            </OrderSummaryData>
                            <Line />
                            <OrderSummaryData>
                                <div></div>
                                <span>Total Today: $1.oo*</span>
                            </OrderSummaryData>
                            <Line />
                            <OrderSummaryData>
                                <div></div>
                                <div>Plus applicable sales tax</div>
                            </OrderSummaryData>
                        </OrderSummaryBlock>
                    </div>
                    <div className="seventhBlock">
                        <TitleType3>FAQ</TitleType3>
                        <Line />
                        <Description>
                            *Cancel anytime by calling <span>1-332-225-9745</span>, or online by simply emailing <span>support@bumper.com</span>.
                            Your 7-day membership trial is limited to running 50 reports during the trial period. After your 7 day trial, you will
                            be billed $19.99 plus applicable sales tax per month and your plan will be limited to running 50 reports per month.
                        </Description>
                        <Line />
                        <TitleType3>WHY AREN'T MY REPORTS FREE?</TitleType3>
                        <Description>
                            "Public" records are not necessarily "free". We pay for expensive bulk data in order to offer you vehicle reports.
                        </Description>
                        <Line />
                        <TitleType3>WHAT VEHICLES CAN I SEARCH?</TitleType3>
                        <Description>
                            Our data includes vehicles after 1981 when the standard 17-digit VIN was created. Automobiles, motorcycles,
                            trucks, buses, motor homes and truck tractors may have vehicle history records. Unfortunately, we don't have
                            history reports for tractors and trailers.
                        </Description>
                    </div>
                </RightSide>
            </MainWrapper>
        </form >
    )
}
export default PaymentOptions;