import "./Home.scss";
import ImageHeader from "../../assets/images/bg-header-mobile.png";
import Logo from "../../assets/images/logo.svg";
import Button from "../../components/Button/Button";

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
          <Button
            text="Download for IOS"
            backgroundColor="#31b9a4"
            boxshadow="4px 4px 5px rgb(41, 147, 128)"
          />
          <Button
            text="Download for Mac"
            backgroundColor="#5F78FA"
            boxshadow="4px 4px 5px rgb(87, 102, 179)"
          />
        </section>
        <footer>info</footer>
      </div>
    </>
  );
}

export default Home;
