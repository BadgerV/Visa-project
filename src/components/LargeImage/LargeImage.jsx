import {LargeImageContainer,NextIcon, Container, VisaTextContainer,VisaText,InBetweenIcon, BlurContainer,RateContainer, PlacesContanier, Places} from './largeImageStyle';
import arrowDown from '../../asset/arrow_down.png'
import inBetweenIcon from '../../asset/in_between_icon.png';
import nextIcon from '../../asset/next_icon.png'

const LargeImage = () => {
  return (
    <LargeImageContainer>
        <VisaTextContainer>
            <VisaText>PROMPTS AND EASY STEPS FOR VISA PROCCESSING</VisaText>
        </VisaTextContainer>

    <BlurContainer>
        
       <PlacesContanier>
            <Places>
                <span className="travelling_from">Travelling From?</span>
                <div className="placeAndArrowContainer">
                    <span className="place">Lagos, Nigeria</span>
                </div>
            </Places>

                <InBetweenIcon src = {inBetweenIcon} />

            <Places>
                <span className="travelling_from">Travelling To?</span>
                <div className="placeAndArrowContainer">
                    <span className="place">Nairobi, Kenya</span>
                </div>
            </Places>
       </PlacesContanier>

       <PlacesContanier>
            <Places>
                <span className="travelling_from">Departure Date</span>
                <div className="placeArrowDayCont">
                    <div className="andArrowCont">
                        <span className="place">27th July 2022</span>
                        <img src={arrowDown} alt="" />
                    </div>
                    <span className="day">Wednesday</span>
                </div>
                
            </Places>
            <Places>
                <span className="travelling_from">Return Date</span>
                <div className="placeArrowDayCont">
                    <div className="andArrowCont">
                        <span className="place">07th Aug 2022</span>
                        <img src={arrowDown} alt="" />

                    </div>
                    <span className="day">Thursday</span>
                </div>
                
            </Places>
       </PlacesContanier>

       <PlacesContanier>
       <Places>
                <span className="travelling_from">Travellers / Class</span>
                <div className="placeArrowDayCont">
                    <div className="andArrowCont">
                        <span className="place">1 / Economy </span>
                        <img src={arrowDown}  alt="" />

                    </div>
                    <span className="day">Traveller</span>
                </div>
                
            </Places>
            <Places>
                <span className="travelling_from">Visa Type</span>
                <div className="placeAndArrowContainer">
                    <span className="place">Tourist Visa</span>
                </div>
            </Places>
       </PlacesContanier>


    </BlurContainer>
    

    <NextIcon src = {nextIcon} />

    </LargeImageContainer>
  )
}

export default LargeImage