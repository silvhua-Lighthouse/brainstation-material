/*************************************/ 
/*    STARTER CODE                   */
/*    No need to touch this code!    */
/*************************************/

/* Your credit card */
const creditCard = { balance: 0, limit: 2000 };

/* Products you can buy */
const products = [
    { name: "T-shirt", price: 20, numberPurchased: 0 },
    { name: "Handbag", price: 200, numberPurchased: 0 },
    { name: "Computer", price: 2000, numberPurchased: 0 }
];

/* Function to display the current amounts of everything in the DOM */
function displayBalances() {
    const balanceEl = document.querySelector(".card-balance");
    const myProductsEl = document.querySelector(".my-products");

    // Display the credit card balance
    balanceEl.innerText = "Balance: $" + creditCard.balance;

    // Display the products purchased
    myProductsEl.innerHTML = "";
    products.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.innerText = product.name + ": " + product.numberPurchased;
        myProductsEl.appendChild(listItem);
    });
}

/* Function to buy a product with your credit card */
/* Takes a single product object as a parameter */
/* Returns a Promise */
function buyProduct(product) {
    return new Promise((resolve, reject) => {
        // Wait a second or two to simulate credit card processing delay
        const randomTime = Math.random() * 2000;
        setTimeout(processPayment, randomTime);

        function processPayment() {
            // If the price is within the credit card's limit,
            // 1) charge the card, 2) purchase the product, 3) resolve the promise
            if (creditCard.balance + product.price <= creditCard.limit) {
                creditCard.balance += product.price;
                product.numberPurchased++;
                return resolve({
                    status: `Purchased ${product.name} for $${product.price}`,
                    timestamp: Date.now(),
                });
            }

            // Otherwise the price exceeds the credit card's limit, so reject the promise
            reject({
                status: `Declined purchase of ${product.name} for $${product.price}`,
                timestamp: Date.now()
            }); 
        }
    });
}

/*************************************/ 
/*    END OF STARTER CODE            */
/*    Start writing code below!      */
/*************************************/


async function goShopping(productToPurchase) {
    try {
        const result = await buyProduct(productToPurchase);
        console.log(result);
        displayBalances();
        return result
    } catch (error) {
        console.log('error:', error);
    }
}

// const tShirtResult = goShopping(products[0]);
// const handbagResult = goShopping(products[1]);
// const computerResult = goShopping(products[2]);

// async function buyAllProducts() {
//     try {
//         const result = await Promise.all([
//             goShopping(products[0]),
//             goShopping(products[1]),
//             goShopping(products[2])
//         ])
//         console.log('result successful:', result);

//         return result;
//     } catch (error) {
//         displayBalances();
//         console.log('Failed to purchase all 3 products to the console\n', error)
//     }
// }

async function buyAllProducts() {
    try {
        const result = await Promise.all([
            buyProduct(products[0]),
            buyProduct(products[1]),
            buyProduct(products[2])
        ])
        console.log('Purchased 3 products', result);

        return result;
    } catch (error) {
        displayBalances();
        console.log('Failed to purchase all 3 products to the console\n', error)
    }
}

function refundProduct(product) {
    return new Promise((resolve, reject) => {
        processRefund();
        displayBalances();
        function processRefund() {
            if (products.map(product => product.name).includes('T-shirt')) {
                creditCard.balance -= product.price;
                
                const relevantProductsObject = products.find(productObject => {
                    return productObject.name === product
                })
                console.log('product refunded', relevantProductsObject);
                relevantProductsObject.numberPurchased -= 1;
                return resolve({
                    status: `Refunded ${relevantProductsObject.name} for $${relevantProductsObject.price}`,
                    timestamp: Date.now(),
                })
            }
            reject({
                status: `Declined refund of ${relevantProductsObject.name} for $${relevantProductsObject.price}`,
                timestamp: Date.now()
            })
        }
    })
}
console.log('---testing---')

creditCard.limit = 3000;
displayBalances();
const result = buyAllProducts();

const refundResponse = refundProduct(products[0].name);
console.log('refund response Promise:', refundResponse);