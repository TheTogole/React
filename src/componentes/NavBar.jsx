import NavClass from "./NavClass";
import LeaderBoard from "./LeaderBoard";
import StatsPage from "./StatsPage";
import SignIn from "./SignIn";
import Header from "./header"
export default function NavBar() {
  let componates;
  switch (window.location.pathname) {
    case "/":
      componates = <Header />
      break;
    case "/LeaderBoard":
      componates = <LeaderBoard />;
      break;
    case "/StatsPage":
      componates = <StatsPage />;
      break;
    case "/SignIn":
      componates = <SignIn />;
      break;  
  }
  return (
    <>
      <NavClass />
      <div className="container">{componates}</div>
    </>
  );
}
