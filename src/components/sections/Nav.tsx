import { useEffect, useState } from "react";
import SvgAlteryouthLogo from "../../assets/icons/LogoAy1";
import Sidebar from "../Sidebar";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const isActive = () => {
    if (window.scrollY > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <nav className={`font-sans fixed top-0 left-0 right-0 z-50 ${active ? "bg-white text-darkGreen" : "bg-transparent text-white"} transition-all duration-300 ease-in-out`}>
      <Sidebar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <section className="flex justify-between items-center p-4 leaderboard-box-shadow">
        <div className="flex gap-4 items-center mx-8">
          <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="mt-1">
            <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </button>

          <SvgAlteryouthLogo color={active ? "#1dc468" : "#fff"} width={"13rem"} height={"3rem"} />
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-4 items-center font-semibold mx-8">
            <li>About</li>
            <li>How it works</li>
            <li>Scholarship</li>
            <li>Collaborate</li>
            <li>Login</li>
          </ul>
        </div>
      </section>





    </nav>

  )
}

export default Nav