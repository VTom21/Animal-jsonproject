


function createCard(data) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h4><span id="span1">${data.name}</span></h4>
      <img src="${data.img}"class="img-fluid">
      <br>
      <br>
      <p><span id="span2">Domain: </span>${data.domain}</p>
      <p><span id="span2">Kingdom: </span>${data.kingdom}</p>
      <p><span id="span2">Class: </span>${data.class}</p>
      <p><span id="span2">Family: </span>${data.family}</p>
      <p><span id="span2">Inhabitat: </span>${data.inhabitat}</p>
      <p><span id="span2">RedList: </span>${data.RedList}</p>
      <p><span id="span2">Diet: </span>${data.diet}</p>
      <p><span id="span2">Latin name: </span>${data.latin_name}</p>
    `;
    return card;
  }

  function displayDataInCards(dataArray) {
    var container = document.getElementById('cardsContainer');
    dataArray.forEach(function(item) {
      var card = createCard(item);
      container.appendChild(card);
    });
  }
  fetch('animals.json')
  .then(response => response.json())
  .then(data => {
    displayDataInCards(data);
  })
  .catch(error => console.error('Error fetching data:', error));


// A 'searchAnimals' függvény definíciója.
function searchAnimals() {
  // A keresőmezőben található szöveg értékét kisbetűssé alakítjuk.
  let input = document.getElementById('searchInput').value.toLowerCase();
  // Az összes kártya elemet lekérjük.
  let cards = document.getElementsByClassName('card');
  
  // Az 'animals.json' fájlt lekérjük és feldolgozzuk.
  fetch('animals.json')
      // A válasz JSON formátumban való visszaadásakor...
      .then(response => response.json())
      // ...a JSON adatokat használjuk fel a keresett állat megjelenítéséhez.
      .then(data => {
          // Az 'animals.json' fájlban lévő összes állatra iterálunk.
          for (let x = 0; x < data.length; x++) {
              // Az aktuális kártyát eltároljuk a 'card' változóban.
              let card = cards[x];
              // Az aktuális állat nevét kisbetűssé alakítva eltároljuk a 'name' változóban.
              let name = data[x].name.toLowerCase();
              
              // Ha az állat neve tartalmazza a keresőmezőben lévő szöveget...
              if (name.includes(input)) {
                  // ...akkor megjelenítjük a kártyát.
                  card.style.display = "inline-block";
              } else {
                  // Egyébként elrejtjük a kártyát.
                  card.style.display = "none";
              }
          }
      })
      // Hiba esetén kiírjuk a hibaüzenetet a konzolra.
      .catch(error => {
          console.error('Error fetching JSON:', error);
      });
}


