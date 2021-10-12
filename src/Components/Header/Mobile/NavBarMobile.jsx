import React from 'react';


const NavBarMobileLayout = () => {
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

    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        alignItems: 'center',
        height: '5vh',
        fontWeight: '900',
        'a:after': {
            content: "",
            position: 'absolute',
            left: '0',
            top: '100%',
            width: '0',
            height: '2px',
            backgroundColor: 'black',
            transition: 'width .3s ease-in-out'
        },
        'a:hover:after': {
            width: '100%',
        }

    },

};

export default NavBarMobileLayout;
