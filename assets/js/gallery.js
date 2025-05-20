function createImageCard(imagePath){
    let html = `<div class="image-card">
            <img src="${imagePath}" alt="">
          </div>`

        document.querySelector(".image-cards").innerHTML = document.querySelector(".image-cards").innerHTML + html
}

createImageCard('/assets/images/Previous_Tour_Images/2.jpeg')
createImageCard('/assets/images/Previous_Tour_Images/3.jpeg')
createImageCard('/assets/images/Previous_Tour_Images/4.jpeg')
createImageCard('/assets/images/Previous_Tour_Images/5.jpeg')