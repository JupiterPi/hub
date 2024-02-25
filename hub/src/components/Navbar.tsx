import "./Navbar.scss";

export function Navbar() {
  return (
    <div id="navbar">
      <div>
        <a id="home" href="/">
          <img src="/icons/logo_icon.png" alt="JupiterPi logo" />
          JupiterPi
        </a>
        <a href="/projects">Projects</a>
        <a href="/music">Music</a>
      </div>
    </div>
  );
}