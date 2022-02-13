import "./widgetLg.css";

export default function WidgetLg() {
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
              src="https://i.ibb.co/VH6Hstf/gary-bendig-6-GMq7-AGx-Nb-E-unsplash.jpghttps://i.ibb.co/fS1D105/jonatan-pie-xg-TMSz6keg-E-unsplash.jpghttps://i.ibb.co/yB9wVG1/ricky-kharawala-ad-K3-Vu70-DEQ-unsplash.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/VH6Hstf/gary-bendig-6-GMq7-AGx-Nb-E-unsplash.jpghttps://i.ibb.co/fS1D105/jonatan-pie-xg-TMSz6keg-E-unsplash.jpghttps://i.ibb.co/yB9wVG1/ricky-kharawala-ad-K3-Vu70-DEQ-unsplash.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/VH6Hstf/gary-bendig-6-GMq7-AGx-Nb-E-unsplash.jpghttps://i.ibb.co/fS1D105/jonatan-pie-xg-TMSz6keg-E-unsplash.jpghttps://i.ibb.co/yB9wVG1/ricky-kharawala-ad-K3-Vu70-DEQ-unsplash.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/VH6Hstf/gary-bendig-6-GMq7-AGx-Nb-E-unsplash.jpghttps://i.ibb.co/fS1D105/jonatan-pie-xg-TMSz6keg-E-unsplash.jpghttps://i.ibb.co/yB9wVG1/ricky-kharawala-ad-K3-Vu70-DEQ-unsplash.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
