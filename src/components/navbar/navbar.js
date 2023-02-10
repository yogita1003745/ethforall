import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        rel="stylesheet"
      />

      <nav>
        <div
          id="nav-logo-section"
          className="nav-section"
          style={{ fontSize: "10px" }}
        >
          <Link to="/" style={{ color: "white" }}>
            <i className="fa-solid fa-dumpster-fire">
              <span> Dummy logo</span>
            </i>
          </Link>
        </div>
        <div id="nav-contact-section" className="nav-section">
          <ul>
            <li
              className="option"
              onClick={() => {
                navigate("/guilds-list");
              }}
            >
              Explore Guilds
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
