// create objects describing meals
// build an array of objects,
// generate a random number to use as an index into the array
// create 2 functions that you will use to display the meal associated with the 
// random number
// submit a copied and pasted link 1) to GitHub Pages, 2) to your GitHub repo


// the object meals

const entree1 = {

    starter : "Bacon Cheese Fries",

    main: "Beef Burger and Coleslaw",

    dessert: "Deep Fried Ice-Cream"

};



const entree2 = {

    starter : "Smoked Salmon On Rye",

    main: "Vegetarian Couscous Rolls",

    dessert: "Fruit Plate"

};



const entree3 = {

    starter : "Chips and Hummus",

    main: "Grilled Chicken in Hot Sauce",

    dessert: "Chocolate Ganache Cake"

};

const entree4 = {

    starter : "Caeser Salad",

    main: "Salmon with Rice and Vegetables",

    dessert: "New York Cheesecake"

};

const entree5 = {

    starter : "Salsa and Chips",

    main: "Tacos De Lengua",

    dessert: "Flan"

};

const entree6 = {

    starter : "Starter Chicken Soup",

    main: "Alfredo Pasta",

    dessert: "Mint Chocolates"

};

// ... add more meal objects

// Add more choices and update the array

const meals = [entree1, entree2, entree3, entree4, entree5, entree6];


// the function that gets the random number between 0 and the last valid index

const randomMeal = function() {

// Get a random number between 0 and the length of the array, meals

let mealNumber = Math.floor(Math.random() * meals.length);; 

showMeal(mealNumber);

};


// display the meal information



const showMeal = (mealNumber)=> {

    let str = `Start with ${meals[mealNumber].starter}, 

 followed by ${meals[mealNumber].main}, 

 and finish off your meal with ${meals[mealNumber].dessert}`;



    let area = document.querySelector(".randomMeal");

   area.innerHTML = `Today you should... ${str}`;

};