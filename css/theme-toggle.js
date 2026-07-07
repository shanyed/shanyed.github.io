(() => {
  const storageKey = "theme-preference";
  const root = document.documentElement;
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {}
  }

  function systemTheme() {
    return mediaQuery.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const nextLabel = nextTheme === "dark" ? "Dark" : "Light";
    const nextTitle = `Switch to ${nextTheme} mode`;

    root.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-toggle").forEach((toggle) => {
      const label = toggle.querySelector(".theme-toggle-label");
      if (label) {
        label.textContent = nextLabel;
      } else {
        toggle.textContent = nextLabel;
      }
      toggle.setAttribute("aria-label", nextTitle);
      toggle.setAttribute("title", nextTitle);
    });
  }

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  applyTheme(getStoredTheme() || systemTheme());

  ready(() => {
    applyTheme(getStoredTheme() || systemTheme());

    document.querySelectorAll(".theme-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setStoredTheme(nextTheme);
        applyTheme(nextTheme);
      });
    });

    mediaQuery.addEventListener("change", () => {
      if (!getStoredTheme()) {
        applyTheme(systemTheme());
      }
    });
  });
})();
