let languageSelector = document.querySelector("#language");
let langValue = document.querySelector(".lang-select-val");

languageSelector.addEventListener("click", () => {
  let b = (langValue.innerHTML = `Language : ${languageSelector.value}`);
});
