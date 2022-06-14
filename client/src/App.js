import "./App.scss";
import SideBar from "./components/Sidebar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import ActionPage from "./pages/LiveActionPage/ActionPage";
import BestSelling from "./pages/BestSelling/BestSelling";
import Influencer from "./pages/InfluencersPage/Influencer";

function App() {
  return (
    <div className="app">
      <SideBar></SideBar>
      <HomePage></HomePage>
      <ExplorePage></ExplorePage>
      <ActionPage></ActionPage>
      <BestSelling></BestSelling>
      <Influencer></Influencer>
    </div>
  );
}

export default App;
