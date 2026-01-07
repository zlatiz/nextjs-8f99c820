import Image from "next/image";

export default function Header(): JSX.Element {
  const logoUrl = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeLogo = encodeURI(logoUrl);
  return (
    <header className="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <div style={{ height: 40, width: 160, position: 'relative' }}>
              <Image src={safeLogo} alt="Garber Bros logo" fill sizes="160px" unoptimized />
            </div>
          </a>
          <nav aria-label="Main navigation">
            <ul className="hidden md:flex items-center gap-2 text-sm">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/about" className="nav-link">About Us</a></li>
              <li><a href="/lock-status" className="nav-link">Lock Status</a></li>
              <li><a href="/vessels" className="nav-link">Vessels</a></li>
              <li><a href="/barges" className="nav-link">Barges</a></li>
              <li><a href="/websites/garberbrosinc/images/application.pdf" className="nav-link">Employment</a></li>
              <li><a href="/contact" className="nav-link">Contact Us</a></li>
            </ul>
            <div className="md:hidden">
              <ul className="flex gap-2 text-sm">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/vessels" className="nav-link">Vessels</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
