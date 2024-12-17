import Achievement from "./Achievement";
import Banner from "./Banner";
import ContentSliderStatic from "./ContentSliderStatic";
import Counts from "./Counts";
import HomeCourses from "./HomeCourses";
import Providing from "./Providing";
import Solution from "./Solution";
import Collaboration from "./collaboration/Collaboration";
import PopularCoursesStatic from "./popular courses/PopularCoursesStatic";
import Services from "./Services";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          {/* <ContentSliderStatic></ContentSliderStatic> */}
          <Services></Services>
          <PopularCoursesStatic></PopularCoursesStatic>
          <Achievement></Achievement>
          <Solution></Solution>
          {/* <HomeCourses></HomeCourses> */}
          <Providing></Providing>
          <Counts></Counts>
          <Collaboration></Collaboration>
        </div>
    );
};

export default Home;