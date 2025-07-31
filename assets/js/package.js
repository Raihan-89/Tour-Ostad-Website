function createCard(packageName, packagePrice, packageDuration, packageImage){
    let html = `<div class="card">
            <div class="card-image">
              <img src="${packageImage}" alt="">
            </div>
            <div class="card-contents">
              <h3 class="package-name">${packageName}</h3>
              <h4 class="package-price">${packagePrice}</h4>
              <span class="package-duration">${packageDuration}</span>
              <button class="book-btn" onClick="location.href='../contact.html'">Book Now</button>
            </div>
          </div>`

        document.querySelector(".package-cards").innerHTML = document.querySelector(".package-cards").innerHTML + html
}

createCard("Sitakunda Tour","1099TK","2 Night 1 Day","assets/images/sitakunda.jpg")
createCard("Cox's Bazar Tour","1499TK","2 Night 1 Day","assets/images/cox's bazar.jpg")
createCard("Rangamati Tour","1499TK","2 Night 1 Day","assets/images/Rangamati.jpg")
createCard("Sylhet Tour","1499TK","2 Night 1 Day","assets/images/Sylhet.jpg")