import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionOne from "../../components/Main/SectionOne";
import SectionTwo from "../../components/Main/SectionTwo";
import SectionThree from "../../components/Main/SectionThree";

export default function Home() {
  const language = localStorage.getItem("lang");
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      </main>
      <Footer />
    </>
  );
}
