export default function NavClass() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Sitename
      </a>
      <ul>
        <li>
          <a href="/LeaderBoard">LeaderBoard</a> {/* */}
          <a href="/StatsPage">StatsPage</a>
        </li>
      </ul>
    </nav>
  );
}
