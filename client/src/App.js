import "./App.scss";
import SideBar from "./components/Sidebar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import ActionPage from "./pages/LiveActionPage/ActionPage";
import BestSelling from "./pages/BestSelling/BestSelling";
import Influencer from "./pages/InfluencersPage/Influencer";
import CreateNFT from "./pages/CreateNft/CreateNFT";
import WalletSupport from "./pages/WalletSupport/WalletSupport";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="app">
      <SideBar></SideBar>
      <HomePage></HomePage>
      <ExplorePage></ExplorePage>
      <ActionPage></ActionPage>
      <BestSelling></BestSelling>
      <Influencer></Influencer>
      <CreateNFT></CreateNFT>
      <WalletSupport></WalletSupport>
      <Footer></Footer>
    </div>
  );
}

export default App;
