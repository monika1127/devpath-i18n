import { useLayoutEffect, useState } from "react";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  const today = new Date();
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <h1>i18n</h1>
      <p>{today.toLocaleDateString(i18n.language, dateOptions)}</p>
      <p>{t("englishOnly")}</p>
      <LanguageSwitcher />
      <div className="card">
        <div className="counter">
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <p className="counter_info">{count}</p>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <p>{t("opinions", { count })}</p>
        <p>{t("englishOnly")}</p>
        <p>{t(["randomKey", "fallbackKey"])}</p>

        <Trans i18nKey="formatted">
          Translating content with <strong>formatting</strong> or a
          <a href="https://www.google.com/">link</a> is a pain.
        </Trans>
      </div>
    </>
  );
}

export default App;
