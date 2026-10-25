// Sample JSON data
const jsonData = [
  {
    "title": "Doll",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8Plj5Fj240SMAvLoKnU4Z6dynkAuCrQyGc15xkE9Gg&s=10",
    "description": "This doll will kill you in your sleep, her name is Mary, she was made with  a rag, paint, fabric, and sand internally.",
    "author": "Missy missy",
    "starting_price":67
  },
  {
    "title": "Banana On a Wall stuck with tape",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsRstuUBEBZrGQoLhfErAmvR3jVWn7McEeG6m_RIY5w&s=10",
    "description": "Just some other silly product no one will buy.",
    "author": "Maximus Low",
    "starting_price":67000000000000000000000000000000000000000

  }
];

// Function to inject cards into the DOM
function injectCards(data) {
  const container = document.getElementById('card-container');
  
  // Clear container before injecting (useful if re-rendering)
  container.innerHTML = '';

  data.forEach(item => {
    // 1. Create the main card element
    const card = document.createElement('div');
    card.classList.add('card');

    // 2. Create and append the image (if URL exists)
    if (item.imageUrl) {
      const img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.title;
      img.classList.add('card-image');
      card.appendChild(img);
    }

    // 3. Create a container for the text content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // 4. Create and append the title
    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.textContent = item.title;
    cardContent.appendChild(title);

    // 5. Create and append the description
    const description = document.createElement('p');
    description.classList.add('card-description');
    description.textContent = item.description;
    cardContent.appendChild(description);

    // 6. Create and append the author
    const author = document.createElement('span');
    author.classList.add('card-author');
    author.textContent = `By ${item.author}`;
    cardContent.appendChild(author);

    const lineBreak = document.createElement('br');
    cardContent.appendChild(lineBreak);

    const startingPrice = document.createElement('p'); // Changed from 'pr' to 'p'
    startingPrice.classList.add('starting-price');
    startingPrice.textContent = `Starting price: $${item.starting_price}`;
    cardContent.appendChild(startingPrice);

const buyButton = document.createElement('button');
buyButton.classList.add('buy-button');
buyButton.textContent = 'Buy Now';
    cardContent.appendChild(buyButton);


buyButton.addEventListener('click', () => {
    paymentpopup(item);
    console.log('Buy Now button clicked!');
});

    
    



    card.appendChild(cardContent);
    container.appendChild(card);
  });
}

// Run the function
injectCards(jsonData);
