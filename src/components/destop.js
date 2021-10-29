import React, { useEffect, useState} from "react";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function MyComponent() {
    const [mapdata,setPosts]=useState({logo:'',data:[]})
    useEffect(() => {
        axios
        .get('https://krds-assignment.github.io/aoc/api-assets/data.json')
        .then(res =>{
          let abc=[]
            abc=res.data;
            setPosts({
              logo:abc.logo,
              data:abc.features
            })
            console.log(mapdata)
        } )
        .catch(err =>{
            console.log(err)
        })
    },[])
    const responsive = {
      superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
      },
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
      },
      tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
      },
      mobile: {
          breakpoint: { max: 760, min: 0 },
          items: 1
      }
  };
      return (
        <div id='parent'>
           <Carousel responsive={responsive} showDots={true} dotListClass="custom-dot-list-style">
          {
            mapdata.data.map((currentValue,index)=>{
              return( 
              <div>
                <div>
                {index==0 && <img src={mapdata.logo} alt='logo' width="100" height="100"/>}
                  <img src={currentValue.logo} alt={currentValue.title} width="200" height="200"/>
                  <p>{currentValue.title}</p>
                  <hr/>
                  <p>{currentValue.desc}</p>
                  </div>
                <div><img src={currentValue.image} alt={currentValue.title} width="500" height="500"/></div>
              </div>
            )
            })
          }
          </Carousel>
        </div>
      );
    }
export default MyComponent;