
import logo from '../assets/proyectaw.png';
import brand from '../assets/brandNew.png';
import '../index.css';

export const Nav = () => {



  return (
    <nav className={`fixed w-full  z-50 p-8 flex items-center justify-between transition-all duration-1000 nav-animated`}>
      <div><img src={logo} width={300} alt="proyecta logo" /></div>
      <div>
        <img src={brand} width={120}  alt="" />
      </div>
    </nav>
  );
}

export default Nav;
