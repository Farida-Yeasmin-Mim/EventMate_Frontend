import './styles/widgetSm.css'
import { Visibility } from "@mui/icons-material";


function WidgetSm() {
  
    return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">


        <li className="widgetSmListItem">
          <img
            src="https://avatars.githubusercontent.com/u/76836136?s=400&u=6b029a033204aea30687591bedb424dcbfbea46a&v=4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Farida Yeasmin Mim</span>
            <span className="widgetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>



        <li className="widgetSmListItem">
          <img
            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/183141839_2459681054177516_5653303579816169696_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hkjz9XZXUPwAX_B7o59&_nc_ht=scontent.fdac24-2.fna&oh=00_AT-pX16SHwARXawMh_RHJFeU92q4cvujc3vUdr5bcWlcXw&oe=6320ABB4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Fehenna Tazrian</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/281267109_3228969000665340_3505164105039639129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1qWhnQxEc6YAX9KZXc8&_nc_ht=scontent.fdac24-2.fna&oh=00_AT94Tak3EfpZiktFbyquAgC-5KyuDdcB6hNvdwIgesmgaw&oe=63007BF4"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Pranta Sen</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>


      </ul>
    </div>
  );
}
export default WidgetSm;