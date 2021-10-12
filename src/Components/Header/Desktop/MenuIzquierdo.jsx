import React from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { width } from '@mui/system';

const MenuIzquierdo = () =>  {
    return (
        <div style={_menuIzquierdoStyles.container}>
            <PinterestIcon style={_menuIzquierdoStyles.iconPinterest}/>
            
            <button style={_menuIzquierdoStyles.btn_inicio}> 
                <a style={_menuIzquierdoStyles.a_homePage}> Inicio </a>
            </button>

            <button style={_menuIzquierdoStyles.btn_hoy}> 
            <a style={_menuIzquierdoStyles.a_homePage}> Hoy </a>
            </button>
         </div>
    );
};

const _menuIzquierdoStyles = {

        container:{            
            display: "flex",
            alignItems: 'center',
            width: 160,
        },

        iconPinterest:{
            color:'red',
            fontSize: 30,
        },

        btn_inicio:{
            height:48,
            minWidth:72,
            borderRadius:32,
            borderColor: 'transparent',
            color: 'white',
            backgroundColor: 'rgb(17,17,17)',
            marginLeft:14,
        },

        btn_hoy:{
            height:48,
            minWidth:60 ,
            borderRadius:32,
            paddingRight:7,
            borderColor: 'transparent',
            backgroundColor: 'white'
        },

        a_homePage:{
            textDecoration: 'none',
            fontWeight: 600
        }


};

 
export default MenuIzquierdo;