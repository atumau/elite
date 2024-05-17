import React,{useState} from 'react';
import './Trending.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import Cimg6 from './Cimg6.jpg';
export default function Trending() {
  // const [activeIndex, setActiveIndex] = useState(0);
  
  //  const [autoplayDirection, setAutoplayDirection] = useState(1);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1000, min: 1000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
  //   const handleBeforeChange = (previousIndex, nextIndex) => {
  //   if (nextIndex === 4 && previousIndex === 3) {
  //     // Change direction to backward when reaching the last card
  //     setAutoplayDirection(-1);
  //   } else if (nextIndex === 0 && previousIndex === 4) {
  //     // Change direction to forward when reaching the first card
  //     setAutoplayDirection(1);
  //   }
  // };
  
    return (
        <div>
            <div className="outer-container">
              <h2>RESIDENCE REALM</h2>
                <div className="inner-container">
                  <p>Unlocking Doors to Your Dream Home Experience.</p>
                </div>
            </div>
            <div>
            <div className="Container">
            <Carousel 
            responsive={responsive} 
          
            //  beforeChange={handleBeforeChange}
            //itemClass="custom-item"  
            autoPlay={true}  
            autoPlaySpeed={1000} 
            //  transitionDuration={500}
            //  customTransition="transform 500ms ease-in-out"
            // centerMode={true}
            infiniteLoop={true}
            // autoPlayDirection={autoplayDirection}

            >
              {/* <div className="card-container"> */}
             
                <div className="Card" >
                  <div className="img-container">
                    <img className="img-responsive"
                     src="https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg"
                    alt="trending project-1" 
                    style={{ height: '335px' }}
                    />
                    </div>
                    <div className="text-container">
                        <p>Trending property 1</p>
                    </div>
                </div>
                <div className="Card">
                  <img className="img-responsive"
                     src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
                    alt="trending project-2" 
                    style={{ height: '335px' }}
                    />
                    <p>Trending property 2</p></div>
                <div className="Card"><img className="img-responsive"
                     src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=1024x1024&w=is&k=20&c=Q7y-IUDhsXhiKKDPopD1ZRHRvkeunhledaJ2iMRdEr8="
                    alt="trending project-3" 
                    style={{ height: '335px' }}
                    />
                    <p>Trending property 3</p>
                </div>
                <div className="Card"><img className="img-responsive"
                     src="https://media.istockphoto.com/id/1130833057/photo/close-up-real-estate-agent-with-house-model-hand-putting-signing-contract-have-a-contract-in.jpg?s=1024x1024&w=is&k=20&c=jvR8e5JgVxQ4IipkCwWeiohfAOeZN8_xcuFafhOTGQk="
                    alt="trending project-4"
                    style={{ height: '335px' }}
                    />
                    <p>Trending property 4</p>
                </div>
                <div className="Card"><img className="img-responsive"
                     src="https://media.istockphoto.com/id/1019219898/photo/real-estate-or-property-investment-home-mortgage-loan-rate-saving-money-for-retirement.jpg?s=1024x1024&w=is&k=20&c=-X-3GHOeN1E7bcxx-Cd519aQ6uaROrrmNfZZ4yOeijA="
                    alt="trending project-5" 
                    style={{ height: '335px' }}
                    />
                    <p>Trending property 5</p>
                </div>
               
                {/* </div> */}
              
            </Carousel>
            </div>
            </div>
        </div>
    )
}
