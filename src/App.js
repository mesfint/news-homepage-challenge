import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import New from "./components/New";

function App() {
  return (
    <div className="md:grid grid-cols-1 min-h-screen mt-auto  ">
      <div>
        <Navbar />

        <div className=" grid grid-cols-1 gap-y-6 md:grid-cols-3  md:mx-[96px] md:mt-10  ">
          <div className="md:col-span-2">
            <Hero />
          </div>
          <div>
            <New />
          </div>
        </div>
        <Categories />
      </div>
      <Footer />
    </div>
  );
}

export default App;
