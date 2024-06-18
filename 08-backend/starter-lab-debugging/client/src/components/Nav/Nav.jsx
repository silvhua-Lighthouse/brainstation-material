import { NavLink, Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav({ teams }) {
  if (!teams.length) {
    return <>Loading teams...</>;
  }

  const teamNavItems = [];

  for (let i = 1; i < teams.length; i++) {
    const { id, name } = teams[i];

    teamNavItems.push(
      <li key={id} className="team-list__item">
        <NavLink to={`teams/${id}`}>{name}</NavLink>
      </li>
    );
  }

  return (
    <nav className="nav">
      <Link to="/" className="nav__home-link">
        <h1>Team Tracker</h1>
      </Link>

      <ul className="team-list">{teamNavItems}</ul>
    </nav>
  );
}
