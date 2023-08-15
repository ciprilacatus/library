import React from "react";
import Navbar from "../Navbar/Navbar";
import SearcForm from "../SearchForm/SearchForm";
import "./Header.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">{t("Thanks.1")}</h2>
          <br />
          <p className="header-text fs-21 fw-4">{t("description.1")}</p>
          <SearcForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
