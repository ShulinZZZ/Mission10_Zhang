import logo from './myLogo.png';
function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle text-white">
        {props.title}
        <p className="text-white text-center">Bowling League Database</p>
      </div>
    </header>
  );
}

export default Header;
