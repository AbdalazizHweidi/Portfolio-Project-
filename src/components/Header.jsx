function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>

      <nav className="nav">
         <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;