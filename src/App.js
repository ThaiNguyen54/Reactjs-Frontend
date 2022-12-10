import logo from './logo.svg';
import './App.css';
import MyAvatar from './MyAvatar.jpg'
import NavBar from "./components/navbar";
import Introduction from "./components/introduction";
import AwardAndAchievements from "./components/awardandachievements";
import Quote from "./components/quote";
import TechnicalSkills from "./components/technicalskills";
import WorkExperience from "./components/workexperience";
import FavoriteSeries from "./components/favoriteseries";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Introduction></Introduction>
        <WorkExperience></WorkExperience>
        <AwardAndAchievements></AwardAndAchievements>
        <TechnicalSkills></TechnicalSkills>
        <FavoriteSeries></FavoriteSeries>
        <Quote></Quote>
    </div>
  );
}

export default App;
