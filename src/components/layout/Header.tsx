import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-linear-to-r from-white from-30% to-[#CEB5FF] backdrop-blur-sm">
      <div className="mx-5 my-5 flex flex-row justify-between">
        <div>
          <Link to="/">
            <div className="flex flex-row align-middle">
              <img src="/imagination.svg" alt="logo" height="32" width="32" />
              <p className="text-4xl text-[#CEB5FF] font-[Lato]">Imagination</p>
            </div>
          </Link>
        </div>
        <nav className="flex items-center text-white font-bold">
          <ul className="flex flex-row">
            <li className="mx-5">
              <a href="#">Login</a>
            </li>
            <li className="mx-5">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
