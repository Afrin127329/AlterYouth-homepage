
const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] font-sans">
      <div className="px-4 pb-10 lg:px-16 pt-11">
        <div className="flex items-end justify-between">
          <div className="grid w-fit gap-2.5 lg:gap-1.5">
            <p className="mb-1 text-[15px] font-bold lg:mb-2">Learn About AlterYouth</p>
            <a className="text-sm hover:text-black" href="#">Home</a>
            <a className="text-sm hover:text-black" href="#">About us</a>
            <a className="text-sm hover:text-black" href="#">How it works</a>
            <a className="text-sm hover:text-black" href="#">Scholarship Policy</a>
            <a className="text-sm hover:text-black hidden lg:inline-block" href="#">Get the app</a>
          </div>
          <div className="hidden lg:block">
            <span className="text-sm">Towards a literate Bangladesh</span>
          </div>
        </div>

        <div className="block lg:hidden">
          <hr className="my-3 border-t-[1px] border-[#d2d2d2]" />
          <p className="mb-1 text-[13px]">Towards a literate Bangladesh</p>
          <div className="flex gap-3">
            <a
              aria-label="AlterYouth facebook page"
              href="https://www.facebook.com/alteryouth"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              aria-label="AlterYouth instagram page"
              href="https://www.instagram.com/alteryouthapp"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-3 border-t-[1px] border-[#d2d2d2]" />
        <div className="flex justify-between">
          <div>
            <p className="text-sm mb-1">© 2025 Afrin Nahar</p>
            <div className="flex items-center gap-1">
              <a className="text-sm" href="https://alteryouth.com/terms-of-service" target="_blank">Terms of Service</a>
              <div>⋅</div>
              <a className="text-sm" href="https://alteryouth.com/privacy-policy" target="_blank">Privacy Policy</a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-3">
              <a
                aria-label="AlterYouth facebook page"
                href="https://www.facebook.com/alteryouth"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                aria-label="AlterYouth instagram page"
                href="https://www.instagram.com/alteryouthapp"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer