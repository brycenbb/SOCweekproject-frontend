import { useAuth0 } from "@auth0/auth0-react";
import Menu from "../Menu";
import "./Header.css";

/*
Props: Logged -> Keeps track of if a user is logged in to determine if New Entry should be disabled.
*/
function Header() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <header>
      <nav className="nav-bar">
        <Menu></Menu>
      </nav>
    </header>
  );
}

export default Header;
