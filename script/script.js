const cards = document.querySelectorAll('.card');
let serialNUmber = 0;
let currentPrice = 0;
    for(SingleCard of cards){
        const card = SingleCard
        card.addEventListener('click', function(){
            const cardTitle = card.querySelector('h3').innerText;

             // create a element for card-title store
            //  1.Where do you want to store
            const titleContainer = document.getElementById('title-container');
            
            // Create a element
            const p = document.createElement('p');
            serialNUmber++;
            p.innerText = serialNUmber + '. ' + cardTitle;
            titleContainer.appendChild(p);


            // Price 
            const price = card.querySelector('span').innerText;
            const findPrice = price.split(' ')[1];
            const priceNumber = parseFloat(findPrice);

            currentPrice += priceNumber;

            const totalPrice = document.getElementById('totalPrice');
                totalPrice.innerText = currentPrice

                const total = document.getElementById('total');
                total.innerText = currentPrice

                // Discount calculation
                const applyBtn = document.getElementById('apply-btn').addEventListener('click', function () {
                   const inputField = document.getElementById('input-field').value;
                    if(inputField === 'SELL 200'){
                        if(currentPrice >= 200){
                            const discountPrice = document.getElementById('discountPrice');
                            const discountCalculate = 0.2 * currentPrice;
                            const discount =  Math.round(discountCalculate)
                            discountPrice.innerText = discount
        
        
                            // Total Calculations
                            const total = document.getElementById('total');
                            const totalCalculation = currentPrice - discount;
                            total.innerText = totalCalculation
        
                        }
                    }
                });
               
        })
    }