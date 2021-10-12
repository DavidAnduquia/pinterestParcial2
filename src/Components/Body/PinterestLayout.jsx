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
        { id:5 , name:'pin 5' , size:"large", sourceImg: "https://picsum.photos/234/333"},
        { id:6 , name:'pin 6' , size:"medium", sourceImg: "https://picsum.photos/352/293"},
        { id:7 , name:'pin 7' , size:"large", sourceImg: "https://picsum.photos/135/230"},
        { id:8 , name:'pin 8' , size:"small", sourceImg: "https://picsum.photos/435/250"},
        { id:9 , name:'pin 9' , size:"medium", sourceImg: "https://picsum.photos/235/433"},
        { id:10 , name:'pin 10' , size:"large", sourceImg: "https://picsum.photos/295/633"},
        { id:11 , name:'pin 11' , size:"small", sourceImg: "https://picsum.photos/230/533"},
        ]);

    return (
        <div style={_stylesLayout.pin_container }>
  
            {
            pinCards.map((card) => (

           
                        <PinCard 
                      card = {card} />
        
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