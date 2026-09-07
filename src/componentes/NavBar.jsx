import NavClass from "./NavClass";
import LeaderBoard from "./LeaderBoard";
import StatsPage from "./StatsPage";

export default function NavBar() {
  let componates;
  switch (window.location.pathname) {
    case "/LeaderBoard":
      componates = <LeaderBoard />;
      break;
    case "/StatsPage":
      componates = <StatsPage />;
      break;
  }
  return (
    <>
      <NavClass />
      <div className="container">{componates}</div>
    </>
  );
}
