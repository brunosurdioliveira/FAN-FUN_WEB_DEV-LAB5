# FAN-FUN_WEB_DEV-LAB5
1. Download “Lab5 Starting Code” from the FOL Content page under “Labs”, rename the html file with your first name followed by an underscore and then “Lab5”. 
2. You will create an online grocery store that will allow the customer to select a department to shop from and add items from that department to their cart. The webpage will also allow new items to be added to the departments selection of items.
3. Create an array for each department (in global scope) and initialize with the following values:
Produce = Apples, Bananas, Mangos, Grapes, Cauliflower, Broccoli, Avacado
Bakery = Baguette, Pumpkin Pie, Chocolate Cookies, Croissant
Meats = Beef, Chicken, Salami, Ham, Turkey
Cheese = Cheddar, Swiss, Montaray Jack, Gouda, Havarti, Asiago
4. Create an empty array for the shopping cart in global scope.
5. Create and Implement the following functionality for each of these functions:
displayProducts() = This function is triggered when the user selects one of the Departments. This will check the currently selected Department and output the corresponding array to the output area.
● Determine which department is selected and Output the array associated with the selected department to the productOutput div.
addProduct() = The user will select one of the departments to view. They will then enter a new product in the textbox and click the Add Product button to add it to the selected departments array.
● Read the value from the product textbox.
● Determine which department is selected.
● Add this product to the Selected Departments
corresponding array.
● Clear the textbox value after the product is added.
● Call the displayProducts() function.
addItemToCart() = The user will select a number from the dropdown box. This number is rela ve to the products in the array for the Selected Department.
● Read the selected value from the dropdown box
using the value property.
o Validate that the value is valid based off the
total number of elements in the currently selected array. If not valid, Do not add item to cart, alert the user that the value passed was invalid
● Determine which department is selected.
● Add the item from the array at the corresponding
index to the shopping cart.
● Output the cart array to the cartOutput div.
