import React from 'react';
 
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import PersonIcon from '@mui/icons-material/Person';

const NavigationLayout = () =>  {
    return (
        <div style={_NavigationStyle.centrar}>
            <div style={_NavigationStyle.container}>
             <HomeIcon />
             <SearchIcon />
             <SmsRoundedIcon />
             <PersonIcon /> 
            </div>
        </div>
        
        
        
    );
};


const _NavigationStyle= {

    container:{
        display:'flex',
        backgroundColor:'White',
        borderRadius:32,
        justifyContent:'space-evenly',
        width:'50%',
        padding: '10px',
        position: 'fixed',
        bottom: '10px',
        hover:{
            color:'red',
            backgroundColor:'red',
        }
        
    },
    centrar:{
        display: 'flex',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

 

 
}

export default NavigationLayout;
