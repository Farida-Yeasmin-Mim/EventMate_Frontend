import './styles/home.css'
import { userData } from "./dummyData";
import FeaturedInfo from './FeaturedInfo';
import WidgetSm from './WidgetSm';
import WidgetLg from './WidgetLg';
import Charts from './Charts';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


function Home() {
  return (

    <div className="container">


<div className="home">
        {/* <Topbar/> */}
        
      <FeaturedInfo />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>

    </div>
    
  );
}
export default Home;