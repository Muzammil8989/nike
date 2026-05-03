import {
  Hero,
  PopularProduct,
  SuperQuality,
  Service,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Fotter,
} from "./sections/index.js";
import Nav from "./components/Nav.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <main className="relative">
        {/* Navbar */}
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProduct />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Service />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Fotter />
        </section>
      </main>
    </>
  );
};

export default App;
