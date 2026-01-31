import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>CraftStudio</h2>
      <div>
        <Link to="/videos">Videos</Link>
      </div>
    </nav>
  );
}

export default Navbar;

