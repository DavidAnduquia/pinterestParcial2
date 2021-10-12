import React from 'react';
import {useState}  from 'react';
import NavigationLayout from '../Footer/NavigationLayout';
import PinCard from './PinCard';

const PinterestLayout = () => {

    const[pinCards,setCard] = useState([
        { id:1 , name:'pin 1' , size:"small" , sourceImg: "https://picsum.photos/230/373"},
        { id:2 , name:'pin 2' , size:"large" , sourceImg: "https://picsum.photos/190/221"},
        { id:3 , name:'pin 3' , size:"medium", sourceImg: "https://picsum.photos/231/233"},
        { id:4 , name:'pin 4' , size:"medium", sourceImg: "https://picsum.photos/232/222"},
        { id:5 , name:'pin 5' , size:"medium", sourceImg: "https://picsum.photos/234/233"},
        { id:6 , name:'pin 6' , size:"medium", sourceImg: "https://picsum.photos/235/233"},
        ]);

    return (
        <div style={_stylesLayout.pin_container }>
  
            {
            pinCards.map((card) => (
                <PinCard 
                  card = {card}
                />
            ))
            } 


        </div>
    );
};


const _stylesLayout = {
    pin_container:{
        paddingTop:10,
        margin:'auto',
        width:'90vw',
     
        backgroundColor:'white',
      
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows:'10px',
        justifyContent: 'center',
    },   
};

export default PinterestLayout;