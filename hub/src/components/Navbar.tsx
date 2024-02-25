import "./Navbar.scss";

export function Navbar() {
  return (
    <div id="navbar">
      <div>
        <div id="home">
          <img src="/icons/logo_icon.png" alt="JupiterPi logo" />
          JupiterPi
        </div>
        <div>Projects</div>
        <div>Music</div>
      </div>
    </div>
  );
}