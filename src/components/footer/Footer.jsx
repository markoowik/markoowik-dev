import "./style.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import github from "./../../img/icons/gitHub.svg";
import linkendin from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  const alert1 = () => {
    alert("Вы точно хотите переходить?");
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          {/* <div className="discord">
            <iframe
              title="dis"
              src="https://discord.com/widget?id=1155772566930214962&theme=dark"
              width="500"
              height="200"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div> */}

          <ul className="social">
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vk.com/markoowik"
              >
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/markoowik.dev"
                onClick={alert1}
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/markoowik"
              >
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/markoowik"
              >
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alisher-serik-341a052b3/"
              >
                <img src={linkendin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 markoowik-dev.com & web cademy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
