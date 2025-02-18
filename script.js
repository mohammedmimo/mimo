const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const style = document.createElement("style");
style.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: white;
    }
    .dark-mode header {
        background-color: #444;
    }
    .dark-mode section {
        background-color: #555;
    }
    .dark-mode nav a {
        color: #ffcc00;
    }
`;
document.head.appendChild(style);
