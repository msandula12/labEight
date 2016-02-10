var groceryList = [ // array of grocery items
	{
		item: "Milk",
		quantity: 1,
		price: 2.79
	},
	{
		item: "Bread",
		quantity: 2,
		price: 3.49
	},
	{
		item: "Bananas",
		quantity: 1,
		price: 3.19
	},
	{
		item: "Chicken breasts",
		quantity: 1,
		price: 11.42
	},
	{
		item: "Yogurt",
		quantity: 3,
		price: 5.69
	}
];

// define variables for quantity, price totals
var totalQuantity = 0;
var totalPrice = 0;

// forEach function for generating quanity, price totals
groceryList.forEach(function(el) {
	totalQuantity += el.quantity;
	totalPrice += el.price * el.quantity;
});

// loops through groceryList array
for (var i = 0; i < groceryList.length; i++) {
	// create table row
	var listRow = document.createElement("tr"); 
	// create table data for item, quantity, price, totals
	var colItem = document.createElement("td");
	var colQuantity = document.createElement("td");
	var colPrice = document.createElement("td");
	var colTotalQuantity = document.createElement("td");
	var colTotalPrice = document.createElement("td");
	// define what will go in newly created elements
	colItem.innerText = groceryList[i].item;
	colQuantity.innerText = groceryList[i].quantity;
	colPrice.innerText = "$" + groceryList[i].price;
	colTotalQuantity.innerText = totalQuantity;
	colTotalPrice.innerText = "$" + totalPrice.toFixed(2);
	// append item, quantity, price to table body
	listRow.appendChild(colItem);
	listRow.appendChild(colQuantity);
	listRow.appendChild(colPrice);
	var receipt = document.getElementById("receipt");
	receipt.appendChild(listRow);
}

// append totals to table footer
var footer = document.getElementById("totals");
footer.appendChild(colTotalQuantity);
var footer = document.getElementById("totals");
footer.appendChild(colTotalPrice);

function addItem() {
	// new values from form inputs
	var newItem = document.getElementById("textItem").value;
	var newQuantity = document.getElementById("textQuantity").value;
	var newPrice = document.getElementById("textPrice").value;
	// creating new rows
	var newListRow = document.createElement("tr"); 
	var newColItem = document.createElement("td");
	var newColQuantity = document.createElement("td");
	var newColPrice = document.createElement("td");	
	// adding new values to new rows
	newColItem.innerText = newItem;
	newColQuantity.innerText = newQuantity;
	newColPrice.innerText = "$" + newPrice;
	// appending new item, quanity, price to table body
	newListRow.appendChild(newColItem);
	newListRow.appendChild(newColQuantity);
	newListRow.appendChild(newColPrice);
	var receipt = document.getElementById("receipt");
	receipt.appendChild(newListRow);
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
});

/*
BONUS!
Add a form with text inputs for Name and Price and a button that 
allows you to add elements to the shopping list.
Clicking 'Add' updates the list on the page. 
Clicking 'Add' also updates the total.
Be prepared to demo your work.
*/