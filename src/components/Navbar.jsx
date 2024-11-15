
const Navbar = ()=> {

  return (
    <>
      <div className="navbar">
        <div className="navbar-up">
          <h2>Biométricos</h2>
          <h4>John Doe -Agente- </h4>
        </div>
        <div className="navbar-down">
          <label>Estado del folio</label>
          <progress id="file" max="100" value="70">70%</progress>
          <label>50%</label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
