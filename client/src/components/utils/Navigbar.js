import { Button, Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../../css/navbar.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import im1 from "../..//images/utils/logo-aero2.png";
import { useDispatch } from "react-redux";

const Login = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwtToken") ? true : false
  );
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const handleLogout = () => {
    fetch(`/api/signout`, {
      method: "post",
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("role");
        localStorage.removeItem("user");
        dispatch({ type: "CLEAR" });
        setLoggedIn(false);
        toast.success(data.message);
        history.push("/");
        window.location.reload();
      });
  };

  return (
    <>
      {loggedIn ? (
        <Dropdown
          className="pad right-btn"
          show={show}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Dropdown.Toggle
            id="dropdown-basic"
            className="mr-sm-2 my-2"
            size="lg"
            variant="danger"
          >
            Profile
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/user/dashboard">Dashboard</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button
          className="mr-sm-2 my-2 right-btn btn-danger"
          href="/user/login"
          size="lg"
        >
          Login
        </Button>
      )}
    </>
  );
};

export default function Navigbar() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let prevScrollpos = window.pageYOffset;

  const handleScroll = () => {
    if (
      document
        .getElementById("responsive-navbar-nav")
        ?.classList.contains("show")
    )
      return;

    const currentScrollPos = window.pageYOffset;

    if (document.getElementById("navbar")) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  };

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant="light"
        className="style top-bottom"
        id="navbar"
      >
        <Navbar.Brand href="/" className="title-nav">
          <img className="logoimg" src={im1} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey="blogs" hresName="nav-items" href="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link
              eventKey="projects"
              href="/projects"
              className="nav-items"
            >
              Projects
            </Nav.Link>
            <NavDropdown
              title="Our Team"
              id="basic-nav-dropdown"
              onMouseEnter={() => setShow1(true)}
              onMouseLeave={() => setShow1(false)}
              onClick={() => setShow1(true)}
              onClick={() => setShow1(false)}
              show={show1}
            >
              <NavDropdown.Item href="/faculty">
                Faculty Corner
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/coordinators">
                Coordinators
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/non-tech">
                Non-Tech Members
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/alumni">Our Alumni</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Events"
              id="basic-nav-dropdown"
              onMouseEnter={() => setShow3(true)}
              onMouseLeave={() => setShow3(false)}
              onClick={() => setShow3(true)}
              onClick={() => setShow3(false)}
              show={show3}
            >
              <NavDropdown.Item href="/avishkar">Avishkar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/prosang">Prosang</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link eventKey='blogs' href='/events' className='nav-items'>Events</Nav.Link> */}
            <Nav.Link eventKey="blogs" href="/workshop" className="nav-items">
              Jigyasa
            </Nav.Link>
            <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              onMouseEnter={() => setShow2(true)}
              onMouseLeave={() => setShow2(false)}
              onClick={() => setShow2(true)}
              onClick={() => setShow2(false)}
              show={show2}
            >
              <NavDropdown.Item eventKey="members" href="/gallery">
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="collaborate" href="/collaborate">
                Collaborate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/news" eventKey="news">
                News Section
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://tsaw.tech/" eventKey="startups">
                Our StartUps
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              eventKey="sponsors"
              href="/achievements"
              className="nav-items"
            >
              Achievements
            </Nav.Link>
            <Nav.Link eventKey="sponsors" href="/sponsor" className="nav-items">
              Sponsors
            </Nav.Link>
          </Nav>
          <Login />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
