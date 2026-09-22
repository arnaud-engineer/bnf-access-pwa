const shellThemeColors = {
  light: "#f7f7f4",
  dark: "#141619",
  oled: "#000000",
};

function setShellTheme(theme) {
  const color = shellThemeColors[theme];
  if (!color) return;
  document.documentElement.style.setProperty("--shell-background", color);
  document.documentElement.style.colorScheme = theme === "light" ? "light" : "dark";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
}

setShellTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "oled" : "light");

window.addEventListener("message", (event) => {
  if (event.origin !== "https://bnfaccess.fr" || event.source !== document.querySelector("#siteFrame")?.contentWindow) return;
  if (event.data?.type === "bnf-access:theme") setShellTheme(event.data.theme);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker non disponible.", error);
    });
  });
}
