import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/currentWeather/CurrentWeather';

function App() {

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split('');
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
