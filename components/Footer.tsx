export default function Footer(): JSX.Element {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-muted">© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="text-sm text-muted mt-3 md:mt-0">
          <a href="/transparency-in-coverage">Transparency in Coverage</a>
          <span className="mx-3">|</span>
          <a href="contact.aspx">Contact (legacy)</a>
          <span className="mx-3">|</span>
          <a href="http://www.goodhiring.com/garberbrosinc/apply/open">Apply (GoodHiring)</a>
        </div>
      </div>
      <div className="text-right pr-6">
        <a href="#">Back to top</a>
      </div>
    </footer>
  );
}
