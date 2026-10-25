const itemStream = [
  { id: 1, name: "home", url: "/index.html" },
  { id: 2, name: "shop", url: "/shop/shop.html" },
  { id: 3, name:"about", url: "/about/about.html"}
];

document.addEventListener("DOMContentLoaded", () => {
  // Load the css for the topbar
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "/topbar/topbar.css";
  document.head.appendChild(css);

  // Build the topbar html
  const topbar = document.createElement("div");
  topbar.id = "topbar";
  topbar.innerHTML = `
    <div id="logo">
      <img id="topbar-img" src="/assets/logo.png" alt="RadArt logo">
      <span>RadArt</span>
    </div>
    <ul class="nav-menu"></ul>
  `;

  // Fill in the links
  const navList = topbar.querySelector(".nav-menu");
  const currentPath = window.location.pathname;

  itemStream.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.name;

    if (currentPath === item.url || (item.url === "/index.html" && currentPath === "/")) {
      a.classList.add("current");
    }

    li.appendChild(a);
    navList.appendChild(li);
  });

  // Put it at the very top of the page
  document.body.prepend(topbar);
});