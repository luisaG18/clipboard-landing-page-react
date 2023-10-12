import "./Home.scss";
import ImageHeader from "../../assets/images/bg-header-mobile.png";
import Logo from "../../assets/images/logo.svg";

function Home() {
  return (
    <>
      <div>
        <header className="container-header">
          <img src={ImageHeader} alt="Image of header" />
          <img src={Logo} alt="Image of Logo" />
        </header>
        <section className="info-download">
          <h1>A history of everything you copy</h1>
          <span>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </span>
          <button>Download for IOS</button>
          <button>Download for Mac</button>
        </section>
        <footer>info</footer>
      </div>
    </>
  );
}

export default Home;
