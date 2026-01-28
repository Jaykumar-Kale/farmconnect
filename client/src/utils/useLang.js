import lang from "./lang";

export const getLang = () => {
  return localStorage.getItem("lang") || "en";
};

export const setLang = (lng) => {
  localStorage.setItem("lang", lng);
};

export const t = (key) => {
  const currentLang = getLang();
  return lang[currentLang][key] || key;
};
