const itemStream = [
  { id: 1, name: "home", url: "/index.html" },
  { id: 2, name: "GitHub", url: "https://github.com" },
  { id: 3, name: "MDN Web Docs", url: "https://mozilla.org" },
  { id: 4, name: "Stack Overflow", url: "https://stackoverflow.com" }
];
document.addEventListener("DOMContentLoaded", () => {
    const navList = document.getElementById("nav-list");
    const currentPath = window.location.pathname;

    // Loop through each item and create the list elements
    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        
        a.href = item.url;
        a.textContent = item.name;

        // Automatically highlight the current page if the URL matches
        if (currentPath === item.url || (item.url === "/index.html" && currentPath === "/")) {
            a.classList.add("current");
        }

        li.appendChild(a);
        navList.appendChild(li);
    });
}); 