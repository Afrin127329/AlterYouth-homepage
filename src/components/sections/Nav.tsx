import { useEffect, useState } from "react";
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
    <nav className={`font-sans fixed top-0 left-0 right-0 z-50 ${active ? "bg-white" : "bg-transparent"} transition-all duration-300 ease-in-out`}>
      <Sidebar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <section className="flex justify-between items-center p-4">
        <div className="flex gap-4 items-center mx-8">
          <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </button>

          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 42.49 9" color="#1dc468" className="mb-1 h-[2.25rem] w-[10rem]"><g data-name="Group 6923"><g data-name="Group 2" transform="translate(1 0.1) scale(0.92)"><g data-name="Logo Ay"><g data-name="Layer 1"><g data-name="Group 2021" fill="#1dc468" fill-rule="evenodd"><path data-name="Path 2256" d="M9.46 3.807c-1.453.425-2.9.854-4.36 1.27a.98.98 0 01-.49 0C3.076 4.668 1.546 4.25 0 3.719c.683-.178 1.386-.306 2.047-.545a8.017 8.017 0 016 .059 11.605 11.605 0 001.411.386v.185"></path><path data-name="Path 2257" d="M4.921 7.691a6.7 6.7 0 01-2.557-.429c-.451-.137-.791-1.55-.462-1.9a.371.371 0 01.25-.077.707.707 0 01.271.077 6.17 6.17 0 004.956.032c.563-.214.691 0 .688.544C8.06 7.17 8.062 7.207 6.844 7.49a6.678 6.678 0 01-1.925.2"></path><path data-name="Path 2258" d="M.715 4.83c.136.055.121.174.127.276.045.715.084 1.426.13 2.138.016.24-.011.467-.308.462s-.388-.195-.35-.48c.089-.677.163-1.355.25-2.032.016-.133 0-.286.153-.365"></path></g></g></g></g><text transform="translate(10.489 7)" fill="#1dc468" font-size="6.5" font-family="Sans-serif" font-weight="700" letter-spacing="-.04em"><tspan x="0" y="0">alteryouth</tspan></text></g></svg>
          </a>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-4 items-center font-semibold">
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