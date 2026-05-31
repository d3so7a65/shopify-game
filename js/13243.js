const btnDarkMode = document.querySelector(".dark-mode-btn"); 
if (btnDarkMode) { 
    if (localStorage.getItem('darkMode') === 'dark') { 
        btnDarkMode.classList.add("dark-mode-btn--active"); 
        document.body.classList.add("dark"); 
    } else if (localStorage.getItem("darkMode") === "light") { 
        btnDarkMode.classList.remove("dark-mode-btn--active"); 
        document.body.classList.remove("dark"); 
        btnDarkMode.classList.add("dark-mode-btn--active"); 
        document.body.classList.add("dark"); 
    } 
    btnDarkMode.onclick = function () { 
        btnDarkMode.classList.toggle("dark-mode-btn--active"); 
        const isDark = document.body.classList.toggle("dark"); 
        localStorage.setItem("darkMode", isDark ? "dark" : "light"); 
    }; 
} 
