const itemStream = [
  { id: 1, name: "home", url: "/index.html" },
  { id: 2, name: "GitHub", url: "https://github.com" },
  { id: 3, name: "MDN Web Docs", url: "https://mozilla.org" },
  { id: 4, name: "Stack Overflow", url: "https://stackoverflow.com" }
];
document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.getElementById("topbar");
  const currentPath = window.location.pathname;

  // 1. Create a fresh list container for the navigation items
  const navList = document.createElement("ul");
  navList.classList.add("nav-menu"); // Optional: for easy CSS styling

  // Loop through each item and create the list elements
  itemStream.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    
    a.href = item.url;
    a.textContent = item.name;

    // Automatically highlight the current page
    if (currentPath === item.url || (item.url === "/index.html" && currentPath === "/")) {
      a.classList.add("current");
    }

    li.appendChild(a);
    navList.appendChild(li);
  });

  // 2. Append the element nav list
  topbar.appendChild(navList);
   console.log("--- Nav Menu Debugger ---");
  
  // Verify if #topbar exists
  if (!topbar) {
    console.error("❌ Error: The element with ID 'topbar' was not found in the DOM.");
    return;
  }

  // Find the generated .nav-menu inside #topbar
  const verifiedNav = topbar.querySelector(".nav-menu");
  
  if (verifiedNav) {
    console.log("✅ Success: .nav-menu successfully exists inside #topbar!");
    
    // Get all links inside the menu
    const links = verifiedNav.querySelectorAll("a");
    console.log(`📊 Total menu items found: ${links.length}`);
    
    // Log the contents of each link
    links.forEach((link, index) => {
      console.log(`🔗 Item [${index + 1}]: Name: "${link.textContent}" | URL: "${link.getAttribute("href")}" | Active/Current: ${link.classList.contains("current")}`);
    });
  } else {
    console.warn("⚠️ Warning: .nav-menu container was not detected inside #topbar.");
  }
  console.log("-------------------------");

});
 
