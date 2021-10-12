import './App.css';
import PinterestLayout from './Components/Body/PinterestLayout';
import NavBarDesktopLayout from './Components/Header/Desktop/NavBarDesktopLayout';
import NavBarMobileLayout from './Components/Header/Mobile/NavBarMobile';
import NavigationLayout from './Components/Footer/NavigationLayout';
import MediaQuery from 'react-responsive';

const  App = () => {
  return (
  <>
 
 <div style={_appStyle.container}>

 
 <MediaQuery maxWidth={385} >
 
 <NavBarMobileLayout />

</MediaQuery>


<MediaQuery minWidth={385} >
 <NavBarDesktopLayout  style={_appStyle.body}  />
</MediaQuery>

<PinterestLayout /> 

<MediaQuery maxWidth={385} >
<NavigationLayout style={_appStyle.footer} /> 
</MediaQuery>

 </div>
  </>

  );
}
// <PinterestLayout />             <NavigationLayout style={_appStyle.footer} /> 



const _appStyle = {

    container:{
      display:'flex',
      flexDirection:'column',
 
      height:'70%',
  
 
    },

    body:{
   
   
    },

    footer:{
      flex:1,
      position:'absolute',
      height:'33vh',
  
    }


  
}


//  <NavigationLayout /> 
export default App;
