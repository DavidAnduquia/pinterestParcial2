import './App.css';
import PinterestLayout from './Components/Body/PinterestLayout';
import NavBarDesktopLayout from './Components/Header/Desktop/NavBarDesktopLayout';
import NavBarMobileLayout from './Components/Header/Mobile/NavBarMobile';
import NavigationLayout from './Components/Footer/NavigationLayout';
import MediaQuery from 'react-responsive';

const  App = () => {
  return (
  <>
  <MediaQuery maxWidth={800 } >
    <NavBarMobileLayout />
  </MediaQuery>
  
  <MediaQuery minWidth={800 } >
     <NavBarDesktopLayout />
  </MediaQuery>

  <PinterestLayout />
  </>

  );
}


//  <NavigationLayout /> 
export default App;
