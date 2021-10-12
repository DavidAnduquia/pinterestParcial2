import React from 'react';
import Buscador from './Buscador';
import MenuIzquierdo from './MenuIzquierdo';
import MenuDerecho from './MenuDerecho';

const NavBarLayout = () =>  {
    return (
        <div style={_navBarStyles.container}>
            <MenuIzquierdo />
            <Buscador />
            <MenuDerecho />
        </div>
    );
};

const _navBarStyles = {

    container:{
        display: "flex",
        alignItems: 'center',
        height: '50px',
        paddingTop:15,
        paddingBottom:4,
        paddingLeft:6,
        paddingRigth:16,
        color:'black',
        backgroundColor: 'white',
        justifyContent : 'space-evenly'
    },
    
};

export default NavBarLayout;
