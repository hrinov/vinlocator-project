import styled from "styled-components";
const MainWrapper = styled.section`
padding-top: 35px;
padding-bottom: 120px;
margin: 0 auto;
width: 1112px;
@media (max-width: 1439px) {
    padding-bottom: 100px;
width: 900px;
};
@media (max-width: 1023px) {
        padding-bottom: 90px;
  width: 706px;
};
@media (max-width: 767px) {
            padding-bottom: 70px;
 width: 420px;
};
@media (max-width: 424px) {
        padding-bottom: 20px;
  width: 320px;
}
`
const Title = styled.div`
font-weight: 600;
font-size: 40px;
text-transform: capitalize;
margin-bottom: 15px;
@media (max-width: 1439px) {
font-size: 35px;
};
@media (max-width: 1023px) {
font-size: 30px;
};
@media (max-width: 424px) {
font-size: 24px;
}
`
const Text = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.02em;
span{
font-weight: 700;
font-size: 16px;
}
@media (max-width: 1439px) {
font-size: 15px;
};
@media (max-width: 767px) {
 font-size: 14px;
 span{
font-weight: 600;
font-size: 15px;
 }
 };
@media (max-width: 424px) {
 font-size: 12px;
 span{
font-weight: 600;
font-size: 13px;
 }
}
`
const MainText = () => {
    return (
        <MainWrapper>
            <Title>Common Questions</Title>
            <Text>
                <span>1. What is a VIN?</span>
                <br />
                A vehicle identification number (VIN) is a unique 17-digit number that serves as the vehicle's equivalent of a social security number. Manufacturers worldwide adhere to standardized criteria to ensure the uniqueness of each VIN. However, vehicles manufactured before the implementation of these standards in 1981 may not have distinct VIN numbers.
                Locating your VIN is a straightforward process, and there are multiple places where you can find it:
                <br />
                <br />
                On the vehicle itself:
                <br />
                - The VIN plate is typically situated on the driver's side of the dashboard, visible through the windshield. This official VIN plate
                is provided by the manufacturer.
                <br />
                - On the frame or unibody: When you open the driver's side door, look inside the door jamb at a low or high position on the pillar for a sticker displaying
                the VIN along with other essential vehicle information.
                <br />
                - On the engine, according to the manufacturer's specifications.
                <br />
                <br />
                Official paperwork:
                <br />
                - Vehicle title and/or plate registration.
                <br />
                - Insurance paperwork.
                <br />
                - Warranty paperwork.
                <br />
                - Maintenance or repair records.
                <br />
                <br />
                For older vehicles, motorcycles, and Powersport vehicles, the VIN might be located in other areas. It is recommended to contact the vehicle's
                manufacturer for further guidance.
                <br />
                <br />
                <span>2. Where does the vehicle data in the VINLOCATOR History Reports originate from?</span>
                The data in the VINLOCATOR History Reports is compiled from various sources, including records from the National Motor Vehicle Title Information
                System (NMVTIS), police records, fire and insurance records, vehicle valuation providers, state and federal databases, data aggregators,
                and other proprietary sources.
                <br />
                <br />
                NMVTIS is a database overseen by the US Department of Justice and administered by the American Association of Motor Vehicle Administrators (AAMVA).
                It is the only nationwide vehicle history database where all states, insurance carriers, and junk salvage yards are legally mandated to report their data.
                State DMVs often consult this database for out-of-state vehicle titling and historical information. The information provided in our reports
                aligns with your state's DMV records.
                <br />
                <br />
                <span>3. What does it mean when no data is available for my VIN?</span>
                When no data is available for the requested VIN, it indicates that VINLOCATOR History does not possess sufficient information. In such cases, you will
                not receive a report, and you will not be charged. However, you may see an authorization on your credit card for the report's amount. This authorization
                is temporary and will be released by VINLOCATOR History within 24 hours, although specific hold times may vary depending on individual banks.
                <br />
                <br />
                Possible reasons for this response include:
                <br />
                <br />
                - The vehicle is titled in a non-participating state from NMVTIS, which includes Washington DC, HI, KS, TN, and VT.
                <br />
                - No junkyard, salvage auction, or insurance company has reported data for that particular VIN.
                <br />
                - The vehicle is not titled within the United States.
                <br />
                - The vehicle is considered new and has never been titled.
                <br />
                - Incorrect or fabricated VIN entry.
                <br />
                <br />
                <span>4. What do "Active Theft" or "Recovered Theft" records mean, and what actions should I take?</span>
                <br />
                If your report indicates "Active Theft," it means that the vehicle is currently reported as stolen. This implies that the theft has been reported to law enforcement and/or an insurance company. To determine whom to contact in the event of an active theft, refer to the "Other information section"
                of the report. If an "ISO file number" is provided, you should contact the National Insurance Crime Bureau (NICB) and be prepared to provide
                the VIN and ISO file number from the VINLOCATOR History Report.
                <br />
                <br />
                If the VINLOCATOR History Report does not contain an ISO number, please reach out to VINLOCATOR History customer service for assistance.
                If the record states "Recovered Theft," no further action is required, but please be aware that the vehicle was previously reported as stolen and has since been recovered. VINLOCATOR History reports this information in real-time. It is advisable to have any recovered vehicle inspected for potential hidden damage that might have occurred prior to recovery.
                <br />
                <br />
                <span>5. What does an "Open Lien" record mean, and what actions should I take?</span>
                <br />
                If your VINLOCATOR History Report indicates an open lien on your vehicle, it means that there is a reported outstanding (unpaid) loan associated with
                the vehicle. While you might not personally owe this loan, an open lien could complicate the process of obtaining the title in your name. The report usually provides the lien issued date and the name of the lienholder (lender). VINLOCATOR History reports this information in real-time.
                <br />
                <br />
                Contact the lienholder and keep the VIN and a copy of the report readily available during the communication.
                <br />
                <br />
                <span>6. What does "Open Recall" mean?</span>
                <br />
                "Open Recall '' in VINLOCATOR History Reports indicates whether there is a manufacturer or NHTSA (National Highway Traffic Safety Administration) open recall report for the specific vehicle. While all recalls can eventually be addressed through repairs, some recalls do not yet have identified remedies or fixes from the manufacturer, or the required parts are not yet available. In certain cases, the recall might involve a high-risk condition, which means the vehicle should not be sold or driven, except directly to the dealership. VINLOCATOR History reports this information in real-time.
                <br />
                <br />
                All recalls can be repaired free of charge by a dealer representing the manufacturer. To find a dealer near you, visit the manufacturer's website,
                which often provides a list of authorized dealers for various automotive and motorcycle brands for your convenience.
                <br />
                <br />
                <span>7. Does VINLOCATOR History provide accident information in its reports?</span>
                <br />
                VINLOCATOR History Reports do contain accident event information from select state and federal sources. The information on salvage, junk,
                and insurance total loss, as well as DMV title brands like salvage and junk, is often associated with the most severe types of damage events. However,
                not all accidents are reported to VINLOCATOR History, and there may be additional accident information available from other report providers
                that is not reflected in VINLOCATOR History reports.
                <br />
                <br />
                <span>8. Are the names and addresses of current or former owners displayed in VINLOCATOR History Reports?</span>
                <br />
                VINLOCATOR History Reports never disclose the names and addresses of previous or current vehicle owners due to the Driver's Privacy Protection
                Act (DPPA). This federal law prohibits the inclusion of owner's names and addresses obtained from DMV sources in historical reports. Some states have
                also enacted similar laws at the state level, further strengthening the restrictions imposed by the DPPA. VINLOCATOR History has additional policies
                in place to ensure the non-disclosure of such information.
            </Text>
        </MainWrapper>)
}
export default MainText;