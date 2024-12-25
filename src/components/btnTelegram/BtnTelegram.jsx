import telegramIcon from "./telegramIcon.svg";
import "./style.css";

const BtnTelegram = () => {
  return (
    <a
      href="https://t.me/markoowik"
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={telegramIcon} alt="" className="icon" />
      Telegram
    </a>
  );
};

export default BtnTelegram;
