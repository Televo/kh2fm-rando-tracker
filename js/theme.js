function setTheme(){document.documentElement.setAttribute("theme",theme),localStorage.theme=theme}var theme=localStorage.theme;theme===void 0&&(theme="dark"),"dark"===theme?setTheme():theme="light";