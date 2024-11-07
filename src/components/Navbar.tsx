import { ShoppingBag, MagnifyingGlass, List } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <List size={32} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-2xl font-extrabold">mamatGunShop</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle mx-2">
          <MagnifyingGlass size={32} />
        </button>
        <label className="btn btn-ghost btn-circle" htmlFor="my-drawer-4">
          <div className="indicator">
            <ShoppingBag size={32} />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
