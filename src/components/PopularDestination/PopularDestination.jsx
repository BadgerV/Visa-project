import { DestHeaderText, PopularDestCont, PopularDestinations, TouristText } from "./popularDestinationStyle"
import Destination from "../Destination/Destination"


const PopularDestination = () => {
  return (
    <PopularDestCont>
        <DestHeaderText>Popular Destinations</DestHeaderText>
        <TouristText>Tourist Visa Only</TouristText>


        <PopularDestinations>
            <Destination />
        </PopularDestinations>
    </PopularDestCont>
  )
}

export default PopularDestination