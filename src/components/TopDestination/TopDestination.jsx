import { DestinationImg,Destination,TopDestinations, DestinationLabel, TopDestHeader, TopDestinationCont } from "./topDestinationStyle"
import Frame1 from '../../asset/Frame1.jpg'
import Frame2 from '../../asset/Frame2.jpg'
import Frame3 from '../../asset/Frame3.jpg'
import Frame4  from '../../asset/Frame4.jpg'


const TopDestination = () => {
  return (
    <TopDestinationCont>
        <TopDestHeader>Top Destinations</TopDestHeader>

        <TopDestinations>
            <Destination>
                <DestinationImg src = {Frame1} alt = "" />
                <DestinationLabel yellow>Kenya (E-Visa)</DestinationLabel>
            </Destination>

            <Destination>
                <DestinationImg src = {Frame2} alt = "" />
                <DestinationLabel>United Arab Emirates</DestinationLabel>
            </Destination>

            <Destination>
                <DestinationImg src = {Frame3} alt = "" />
                <DestinationLabel yellow>Nigeria (Visa on arrival)</DestinationLabel>
            </Destination>

            <Destination>
                <DestinationImg src = {Frame4} alt = "" />
                <DestinationLabel>Egypt</DestinationLabel>
            </Destination>
        </TopDestinations>
    </TopDestinationCont>
  )
}

export default TopDestination