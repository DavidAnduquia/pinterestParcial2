import React from 'react';
 

const NavBarMobileLayout = () =>  {
    return (
        <div style={_navBarStyles.container}>
                <a> Para ti </a>
                <a> Hoy </a>
                <a> ilustration... </a>
                <a> Recetas de </a>
        </div>
    );
};

const _navBarStyles = {

    container:{
        display:'flex',
        justifyContent:'space-evenly',
        paddingTop:10,
        alignItems:'center',
        
        height:'5vh'
    },
    
};

export default NavBarMobileLayout;
