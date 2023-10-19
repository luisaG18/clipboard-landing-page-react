import "./Home.scss";
import Logo from "../../assets/images/logo.svg";
import ImageHeader from "../../assets/images/bg-header-mobile.png";
import ImageComputer from "../../assets/images/image-computer.png";
import ImageDevices from "../../assets/images/image-devices.png";
import IconBlacklist from "../../assets/images/icon-blacklist.svg";
import IconText from "../../assets/images/icon-text.svg";
import IconPreview from "../../assets/images/icon-preview.svg";
import LogoGoogle from "../../assets/images/logo-google.png";
import LogoIbm from "../../assets/images/logo-ibm.png";
import LogoMicrosoft from "../../assets/images/logo-microsoft.png";
import LogoHp from "../../assets/images/logo-hp.png";
import LogoVectorGraphics from "../../assets/images/logo-vector-graphics.png";
import IconFacebook from "../../assets/images/icon-facebook.svg";
import IconInstagram from "../../assets/images/icon-instagram.svg";
import IconTwitter from "../../assets/images/icon-twitter.svg";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <>
      <div>
        <section className="section-initial">
          <img src={ImageHeader} alt="Image of header" />
          <img src={Logo} alt="Image of Logo" />
          <div className="section-initial__container">
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
          </div>
        </section>
        <section className="info">
          <h1>Keep track of your snippets</h1>
          <span>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </span>
          <img
            className="info__img"
            src={ImageComputer}
            alt="Image of a computer"
          />
          <h1>Quick Search</h1>
          <span>
            Easily search your snippets by content, category, web address,
            application, and more.
          </span>
          <h1>iCloud Sync</h1>
          <span>
            Instantly saves and syncs snippets across all your devices.
          </span>
          <h1>Complete History</h1>
          <span>
            Retrieve any snippets from the first moment you started using the
            app.
          </span>
        </section>
        <section className="info">
          <h1>Access Clipboard anywhere</h1>
          <span>
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </span>
          <img
            className="info__img"
            src={ImageDevices}
            alt="Image of a devices"
          />
          <h1>Supercharge your workflow</h1>
          <span>We’ve got the tools to boost your productivity.</span>
          <img
            className="info__icon"
            src={IconBlacklist}
            alt="Icon of a blacklist"
          />
          <h1>Create blacklists</h1>
          <span>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </span>
          <img className="info__icon" src={IconText} alt="Icon of a text" />
          <h1>Plain text snippets</h1>
          <span>
            Remove unwanted formatting from copied text for a consistent look.
          </span>
          <img
            className="info__icon"
            src={IconPreview}
            alt="Icon of a preview"
          />
          <h1>Sneak preview</h1>
          <span>
            Quick preview of all snippets on your Clipboard for easy access.
          </span>
        </section>
        <section className="info">
          <img
            className="info__imgLogo"
            src={LogoGoogle}
            alt="Logo of Google"
          />
          <img className="info__imgLogo" src={LogoIbm} alt="Logo of IBM" />
          <img
            className="info__imgLogo"
            src={LogoMicrosoft}
            alt="Logo of Microsoft"
          />
          <img className="info__imgLogo" src={LogoHp} alt="Logo of Hp" />
          <img
            className="info__imgLogo"
            src={LogoVectorGraphics}
            alt="Logo of Vector Graphics"
          />
        </section>
        <section className="info">
          <h1>Clipboard for iOS and Mac OS</h1>
          <span>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
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
        <footer className="footer">
          <img className="footer__logo" src={Logo} alt="Icon of Logo" />
          <span>FAQs</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
          <span>Press Kit</span>
          <span>Install Guide</span>
          <div className="footer__icons">
            <img src={IconFacebook} alt="Icon of Facebook" />
            <img src={IconTwitter} alt="Icon of Twitter" />
            <img src={IconInstagram} alt="Icon of Instagram" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
