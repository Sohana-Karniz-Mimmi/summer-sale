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
           const pTitle = p.setAttribute('id', 'p-title');
            serialNUmber++;
            p.innerText = serialNUmber + '. ' + cardTitle
            titleContainer.appendChild(p);


            // Price 
            const price = card.querySelector('span').innerText;
            const findPrice = price.split(' ')[1];
            const priceNumber = parseFloat(findPrice);

            currentPrice += priceNumber;

            const totalPrice = document.getElementById('totalPrice');
                totalPrice.innerText = currentPrice.toFixed(2)

                // Discount calculation
                const applyBtn = document.getElementById('apply-btn').addEventListener('click', function () {
                   const inputField = document.getElementById('input-field').value;
                   const couponCode = inputField.split(' ').join(' ').toUpperCase().trim();

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

                const purchases = document.getElementById('purchase-btn').addEventListener('click', function(){
                    const myModel = document.getElementById('my_modal_5')
                    myModel.showModal()
                })
                
               
        })
    }