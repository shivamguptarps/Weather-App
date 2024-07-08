// import './App.css'

// import SearchBox from './SearchBox.jsx'
// import InfoBox from './InfoBox.jsx';
import WeatherApp from './WeatherApp.jsx';
  function App() {

    let handeleClick = ()=>{
      console.log("button clicked");
    }
   return (
   <div>
    <WeatherApp />
    {/* <SearchBox /> */}
    {/* <InfoBox /> */}
   </div>
   );
  }

export default App
