// This wrapper forces JavaScript to wait until the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const popup = document.getElementById('save_me_popup');
    const openBtn = document.getElementById('save_me_button');
    const closeBtn = document.getElementById('closeBtn');

    // Open the popup modal when the save button is clicked
    openBtn.addEventListener('click', () => {
        popup.showModal(); 
    });

    // Close the popup modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        popup.close();
    });

});
