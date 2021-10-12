import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import ArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const MenuDerecho = () =>  {
    return (
        <div style={_menuDerechoStyle.container}>
                <NotificationsIcon style={_menuDerechoStyle.iconStyle}/>
                <TextsmsRoundedIcon style={_menuDerechoStyle.iconStyle} />
                <a style={_menuDerechoStyle.id}> D   </a>
                <ArrowDownRoundedIcon/>
         </div>
    );
};

const _menuDerechoStyle = {

    container:{
    fontSize: 22,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    width: '10vw',

  
    },

    iconStyle:{
        fontSize:30,
        color:'#767676',
  
    },
    
   

    id:{
        borderRadius:30,
        fontSize:15,
        color:'gray',
      
        backgroundColor:'#efefef',
    }
 
};

export default MenuDerecho;