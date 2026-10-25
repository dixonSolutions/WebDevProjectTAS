const footer = document.createElement("div");
footer.id = "footer";
// 2. Create and append the footer specific stylesheet
const footerCss = document.createElement("link"); // Changed to valid 'link' tag
footerCss.rel = "stylesheet"; 
footerCss.href = "/footer/footer.css"; 
document.head.appendChild(footerCss); 

// 3. Create and append the global stylesheet (renamed variable to avoid crash)
const globalCss = document.createElement("link"); // Changed to valid 'link' tag
globalCss.rel = "stylesheet"; 
globalCss.href = "/global.css"; // Added leading slash since it is in the root
document.head.appendChild(globalCss); 

footer.innerHTML = `
  <footer>
    <p>&copy; 2026 RadArt. All rights reserved.</p>
    <address>
      Contact me(or maybe not) <a href="mailto:webmaster@example.com">nodonotcontactme@radartitis.com</a>
    </address>
  </footer>
`;
document.body.appendChild(footer);
