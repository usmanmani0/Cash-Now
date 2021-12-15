import Header from "../components/Header/Header";
import NavBar from "../components/Navbar/NavBar";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import WebPageTwo from "../components/Webpagetwo/WebPageTwo";
import WebPageThree from "../components/Webpagethree/WebPageThree";
import WebPageFour from "../components/Webpagefour/WebPageFour";
import WebPageFive from "../components/Webpagefive/WebPageFive";
import WebPageSix from "../components/Webpagesix/WebPageSix";
import WebPageSeven from "../components/Webpageseven/WebPageSeven";
import WebPageEight from "../components/Webpageeight/WebPageEight";
import WebPageNine from "../components/Webpagenine/WebPageNine";
import WebPageTen from "../components/Webpageten/WebPageTen";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeaderSection buttontext=" Ontvang een bod >>" />
      <WebPageTwo />
      <WebPageThree />
      <WebPageFour />
      <WebPageFive buttontext=" Ontvang een bod >>" />
      <WebPageSix />
      <WebPageSeven />
      <WebPageEight />
      <WebPageNine />
      <WebPageTen />
    </>
  );
}

export default Home;
