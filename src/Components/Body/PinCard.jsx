import React from 'react';
import MediaQuery from 'react-responsive';

const PinCard  = ({card }) =>  {
   
    return (


            <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[card.size]  }}>
            <img src = { card.sourceImg } style={_stylesPinCard.imgStyle}
            
            ></img>
            </div>



    );
}

const _stylesPinCard =  {

    pin_card: {
        margin: '14px 10px  ',
        borderRadius: '15px',
        backgroundColor:'white'
    },
    small:{
        gridRowEnd : 'span 26',
       
    },
    medium:{
        gridRowEnd : 'span 30',
    
    },
    large:{
        gridRowEnd : 'span 40',
      
        
    },

    imgStyle:{

        borderRadius: '15px',
        width:'100%',
        height:'100%',
        objectFit:'cover',
        imageRendering:'auto'
    },

}



export default PinCard;