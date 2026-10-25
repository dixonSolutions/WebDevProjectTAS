const dialogue = document.createElement('div');
dialogue.id = 'payment-dialogue';
dialogue.style.display = 'none';
dialogue.innerHTML = `
  <dialog open>This is an open dialog window</dialog>
`;


document.body.appendChild(dialogue);

function paymentpopup() {
  var x = document.getElementById("payment-dialogue");
  if (x) { 
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}


