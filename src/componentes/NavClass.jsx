export default function NavClass() {
  return (
    <nav className="nav">
      <a
        className=" site-title flex items-center justify-center text-4x1 font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mx-4"
        href="/"
      >
        Overview
      </a>
      <ul>
        <li className="flex items-center justify-center text-1x1 font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mx-4">
          <a className="mr-4" href="/LeaderBoard">
            <button className="rounded-full bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
              Leaderboard
            </button>
          </a>

          <a className="mr-4" href="/StatsPage">
            <button className="rounded-full bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
              Statspage
            </button>
          </a>
          <a className="mr-4" href="/Sign-In">
            <button className="rounded-full bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
              Sign-in
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
