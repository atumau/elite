import React,{useState} from 'react';
import '../Components/Cardslider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import Cimg6 from './Cimg6.jpg';
export default function Cardslider() {
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
            <div className="outer-container-s">
              <h2>Commercial REALM</h2>
               
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
                     src="https://img.freepik.com/free-photo/office-buildings_1127-3158.jpg?t=st=1715937904~exp=1715941504~hmac=5fe9944c9b4b9085ce8c4599bc5d846e1ba84f0f05d9019ab00420f309a8fc5a&w=900"
                    alt="trending project-2" 
                    style={{ height: '335px' }}
                    />
                    <p>Trending property 2</p></div>
                <div className="Card"><img className="img-responsive"
                     src="https://img.freepik.com/premium-photo/personal-perspective-contemporary-architectural-office-city-landscape_1417-6965.jpg?w=996"
                    alt="trending project-3" 
                    style={{ height: '335px' }}
                    />
                    <p>Trending property 3</p>
                </div>
                <div className="Card"><img className="img-responsive"
                     src="https://img.freepik.com/premium-photo/real-estate-developers-architects-businessmen-team-working-discussing-project-development_252051-7151.jpg?w=900"
                    alt="trending project-4"
                    style={{ height: '335px' }}
                    />
                    <p>Trending property 4</p>
                </div>
                <div className="Card"><img className="img-responsive"
                     src="https://img.freepik.com/premium-photo/cardboard-layout-house_295303-4814.jpg?w=900"
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
