/* 1. Get the nav-bar element by its id and output the result with console.log
Which data type was returned? */
let navElement = document.getElementById('nav-bar');
console.log(typeof navElement) // returns object data type
console.log(navElement);
// returns element
    
/* 2. Get the main element using the querySelector method and console.log the result
Which data type was returned? */
let mainElement = document.querySelector('main')
console.log(typeof mainElement)
console.log(mainElement);
    // returns element

/* 3. Get a list of every <a> element using querySelectorAll
Which data type was returned? */
let anchorElements = document.querySelectorAll('a');
console.log(`anchorElements type: ${typeof anchorElements}`)
console.log(anchorElements);
// returns NodeList

/* 4. Now try selecting the <a> tag with querySelector
What is the observed difference between querySelectorAll and querySelector? */
let anchorEl = document.querySelector('a');
console.log(`anchorEl type: ${typeof anchorEl}`)
console.log(anchorEl);
// returns element

//Getting and Setting InnerHTML


/* 1. Get the Logo element and store it in a variable.
2. console.log the innerHTML property of the element */
let logoEl = document.querySelector('.logo');
console.log(`logo innerHTML: ${logoEl.innerHTML}`);

/* 3. Assign a new value to the innerHTML property to change the Logo on the site */
logoEl.innerHTML = 'new logo'

/* 1. Get a list of every <a> element using querySelectorAll again and store it in a variable
2. Use a for loop with the list to apply a new style to each element
Use classList to add a new CSS class to each element in the list (ie: link)
Add a new class selector (matching the class added in previous step) in styles.css
Add the text-decoration: underline and color: #7FDEFF properties to the selector */

// Setting Style on Multiple Elements
for (let i = 0; i < anchorElements.length; i++) {
    currentEl = anchorElements[i];
    console.log(`Current element: ${currentEl}`)
    currentEl.classList.add('link-style');
}