import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        grid
        dataKey="Active User"
      />
    </div>
  );
};

export default Home;
