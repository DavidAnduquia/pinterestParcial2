import React from 'react';
 
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import PersonIcon from '@mui/icons-material/Person';

const NavigationLayout = () =>  {
    return (
        <div style={_NavigationStyle.container}>
             <HomeIcon />
             <SearchIcon />
             <SmsRoundedIcon />
             <PersonIcon /> 
        </div>
        
        
    );
};


const _NavigationStyle= {

    container:{
        display:'flex',
        backgroundColor:'red',
        borderRadius:32,
        justifyContent:'space-evenly',
        width:'50%',
    
        margin:'auto'
        
    },

 

 
}

export default NavigationLayout;
