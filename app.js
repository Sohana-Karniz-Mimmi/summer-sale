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


    // bahire korce
    // Discount calculation
    const applyBtn = document.getElementById('apply-btn').addEventListener('click', function () {
        const inputField = document.getElementById('input-field').value;
        const couponCode = inputField.split(' ').join(' ').toUpperCase().trim();
        
        console.log(couponCode);

         if(couponCode === 'SELL 200'){
             if(currentPrice >= 200){
                 const discountPrice = document.getElementById('discountPrice');
                 const discount = 0.2 * currentPrice;
                 discountPrice.innerText = discount.toFixed(2)


                 // Total Calculations
                 const total = document.getElementById('total');
                 const totalCalculation = currentPrice - discount;
                 total.innerText = totalCalculation.toFixed(2)

             }
         }
     });