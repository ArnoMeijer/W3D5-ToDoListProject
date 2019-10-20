//Get request data tonen in console en naam op site.
getTodoList().then(responseJSON => {
    const data = responseJSON
    console.log(responseJSON)
    document.getElementById("dataEndpoint").innerHTML =
            "<pre>" + JSON.stringify(data.naam, null, " ") + "</pre>"
  })



// Post request om data naar endpoint te sturen
  async function postNewElement (){
      const postData = inputTalue;
      return postData
  }
  

// Nieuwe taak invoeren en op voeg toe klikken = nieuwe regel in browser

function newElement (){
  let newLi = document.createElement("li");
  let inputTaak = document.getElementById("myInput").value;
  let textNode = document.createTextNode(inputTaak);
  newLi.appendChild(textNode);
  if (inputTaak === '') {
    alert("Voer je wel een taak in?");
  } else {
    document.getElementById("ul").appendChild(newLi);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newLi.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Streep taak door als checkbos wordt aangevinkt (werkt nog niet)

function checked (){
  checkedIsCrossed = getElementById('checked')
  if (checkedIsCrossed = true) {
    stripe = getElementById("li").innerHTML;
    stripe.STRIKETHROUGH; 
  }
  checked();
}

// prullenbakje naast de taak
function verwijder(button) {
  var parent = button.parentNode;
  var grand_father = parent.parentNode;
  grand_father.removeChild(parent);
}