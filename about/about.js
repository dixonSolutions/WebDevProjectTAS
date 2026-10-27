const about = document.createElement('div');
about.id='about-div';
about.innerHTML = `
    <h1>About RadArt</h1>
    <p>We are an Australian run and operated non-profit business that allows children across Australia to publish and share their art peices online with the world.
    <p>The students take a small commission on each of their pieces sold, this is undisclosed but usually about 5% </p>
    <p>All of the additional profits fund design programs in rural Australia areas. </p>
    <a href="/shop/shop.html">Shop now and support our cause and our young dedicated artists!</a>

    `;  


document.addEventListener('DOMContentLoaded', () => {
    document.body.prepend(about);
});
