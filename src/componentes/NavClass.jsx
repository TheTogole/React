export default function NavClass() {
  return (
    <nav className="nav">
      <a className=" site-title flex items-center justify-center text-1xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mx-4" href="/" >
        Overview
      </a>
      <ul>
        <li className="flex items-center justify-center text-1xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mx-4">
          <a className="mr-4" href="/LeaderBoard">LeaderBoard</a> {/* */}
          <a className="mr-4" href="/StatsPage">StatsPage</a>
          <a className="mr-4" href="/SignIn">SignIn</a>
        </li>
      </ul>
    </nav>
  );
}
