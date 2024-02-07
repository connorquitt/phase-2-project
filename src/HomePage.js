import { NavLink } from "react-router-dom";

function HomePage() {


  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <h1>Media Diary</h1>
        <NavLink to={`/media`}><button className="to-Dairy" >Go To Diary</button></NavLink>
        <p>the perfect place to keep track of any media you've completed this year!</p>
      </header>
    </div>
  );
}

export default HomePage;
