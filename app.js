const kItem = document.getElementById('k-item1').addEventListener('click', function(){
    const kTItle = document.getElementById('k-title').innerText;
    console.log(kTItle);


    // create a element for k-title store
    const titleContainer = document.getElementById('title-container')
    console.log(titleContainer);

    // Create a child for title-container and add
    const p = document.createElement('p');
    p.innerText = 1 + '.' + kTItle
    titleContainer.appendChild(p);

    // Price 
    const price = document.getElementById('price').innerText;
    const findPrice = price.split(' ')[1];
    console.log(findPrice);
    const totalPrice = document.getElementById('totalPrice');
        totalPrice.innerText = findPrice

})


// Sir method
const cards = document.querySelectorAll('.card');
    for(let index = 0; index < cards.length; index++){
        const card = cards[index];
        card.addEventListener('click', function(){
            console.log("cardClicked");
        })
    }