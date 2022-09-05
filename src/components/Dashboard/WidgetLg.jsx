import './styles/widgetLg.css'

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };


  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        
        
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/280087113_3077999089184262_8027352802270825525_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0uWFIYNMm1cAX-OnXiT&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_XLoJglR9kC1pSBTAEZcqwWsix9P437Tb9S9Wr9xu4XA&oe=6300224E"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Farida Yeasmin Mim</span>
          </td>
          <td className="widgetLgDate">1 November 2021</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/273534409_4841515215968614_1001336073620991220_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=d2_oo_py5HsAX_12Em1&_nc_ht=scontent.fdac24-2.fna&oh=00_AT9FP-0y1NI0FnRq8A0u8pT3msQ5bzz8-0Wd_m1UO0QwhQ&oe=63017FF6"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mahir Sadman</span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/285628568_5252854231444748_466893369751832389_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XwkQDAo_X_EAX8GtUOA&_nc_ht=scontent.fdac24-1.fna&oh=00_AT-IdCJdWLuGx9dXoJa8cfbhyXg4_nAN7HJMZEgJLdpwAg&oe=630197A6"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Momtahina Rahman Bushra</span>
          </td>
          <td className="widgetLgDate">18 June 2022</td>
          <td className="widgetLgAmount">$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>


        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/54524010_107116077123648_823614198675144704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Dngtn2aenlsAX-dQ4Xb&tn=_BNTl5yRC_khlXqE&_nc_ht=scontent.fdac24-2.fna&oh=00_AT8xF-kbQskD8OdXrM_MMPP-2UGK83ghKLhv2kUHRtuk6w&oe=632078BB"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Kaniz Fatema Nabila</span>
          </td>
          <td className="widgetLgDate">3 September 2021</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>


        </table>
    </div>
  );
}
export default WidgetLg;