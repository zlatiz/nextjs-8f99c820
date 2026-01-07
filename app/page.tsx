import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/ui/card";
import Button from "../components/ui/button";

const IMAGES: string[] = [
  "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg",
  "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg"
];

export default function Page() {
  const images: string[] = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[0];
  const gallery = images.slice(1);

  const safeHero = encodeURI(heroImage);

  return (
    <>
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">Garber Bros, Inc.</h1>
            <p className="mt-4 text-base text-muted">
              For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of
              marine transportation services for the offshore oil and gas industry. We pride ourselves on
              supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc.
              for all your marine transportation and service needs.
            </p>
            <div className="mt-6">
              <Button href="/vessels" variant="primary" id="view-fleet-cta">View Our Fleet of Vessels</Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-border bg-surface">
              <div className="w-full h-56 sm:h-72 md:h-96 relative">
                <Image src={safeHero} alt="Garber Bros logo" fill sizes="(max-width: 1024px) 100vw, 700px" unoptimized />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <a href="javascript:previousSlide6347994()" className="text-muted">Prev</a>
              <a href="javascript:nextSlide6347994()" className="text-muted">Next</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Our Vessels" imageSrc={encodeURI(images[1])} imageAlt="Vessels" href="/vessels">
            Garber Bros Inc has an elite fleet of vessels of use in all types of projects.
          </Card>

          <Card title="Employment" imageSrc={encodeURI(images[2])} imageAlt="Employment" href="/websites/garberbrosinc/images/application.pdf">
            Interested in working at Garber Bros? Download our employment application.
            <div className="mt-3 flex flex-col sm:flex-row sm:gap-3">
              <Button href="/websites/garberbrosinc/images/application.pdf" size="sm">View Application</Button>
              <Button href="http://www.goodhiring.com/garberbrosinc/apply/open" size="sm" variant="outline">Apply Online</Button>
            </div>
          </Card>

          <Card title="Contact Us" imageSrc={encodeURI(images[3])} imageAlt="Contact" href="/contact">
            To contact Garber Bros Inc regarding vessel availability, click here.
            <div className="mt-3">
              <Button href="/contact">Contact Garber Bros Inc</Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(Array.isArray(gallery) ? gallery : []).map((src: string, idx: number) => {
            const safeSrc = encodeURI(src);
            return (
              <div key={idx} className="rounded-lg overflow-hidden border border-border bg-surface">
                <div className="w-full aspect-[4/3] relative">
                  <Image src={safeSrc} alt={`Gallery image ${idx + 1}`} fill sizes="(max-width: 1024px) 100vw, 400px" unoptimized />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">More</h2>
        <div className="prose text-sm text-muted">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lock-status">Lock Status</a></li>
            <li><a href="/barges">Barges</a></li>
            <li><a href="contact.aspx">Contact (legacy)</a></li>
            <li><a href="/transparency-in-coverage">Transparency in Coverage</a></li>
            <li><a href="#">Back to top</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
