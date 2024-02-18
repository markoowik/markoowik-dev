import githubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = () => {
  return (
    <a href="#!" target="_blank" rel="noreferrer" className="btn-outline">
      <img src={githubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
