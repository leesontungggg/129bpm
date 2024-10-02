export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            <span className="hidden font-bold lg:inline-block">129BPM</span>
          </a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              Ticket
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground cursor-pointer">
              Merch
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              Seatmap
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              Artists
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              The Story
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              FAQ
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R15u6ja:"
          data-state="closed"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <a target="_blank" rel="noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-fit px-2 cursor-pointer select-none">
                EN / VI
              </div>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
