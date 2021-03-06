// Array for each department
var aProduce = ["Apples", "Bananas", "Mangos", "Grapes", "Cauliflower", "Broccoli", "Avacado"];
var aBakery = ["Baguette", "Pumpkin Pie", "Chocolate Cookies", "Croissant"];
var aMeats = ["Beef", "Chicken", "Salami", "Ham", "Turkey"];
var aCheese = ["Cheddar", "Swiss", "Montaray Jack", "Gouda", "Havarti", "Asiago"];

// Empty Array for the shopping cart
var aShoppingCart = [];

/*
    changeItemDropdown()
    Purpose: Populate the dropdown with numbers from 1 to maxNumber
    Parameters: maxNumber 
    Returns: Nothing
*/
function changeItemDropdown(maxNumber) {
    // Validate maxNumber
    if (maxNumber > 1) {
        // Get Dropdown Element
        var dropDown = document.getElementById("itemNumDropdown");

        // Empty Dropdown
        dropDown.innerHTML = "";

        // Create default option 00
        var defaultOption = document.createElement("option");
        defaultOption.innerHTML = "00";
        defaultOption.value = null;
        defaultOption.disabled = true;
        defaultOption.selected = true;
        dropDown.appendChild(defaultOption);

        // Add options to dropDown
        for (var x = 1; x <= maxNumber; x++) {
            var tempElement = document.createElement("option");
            tempElement.innerHTML = x;
            tempElement.value = x;
            dropDown.appendChild(tempElement);
        }

        console.log("Dropdown updated!");

    } // end if
    else {
        console.log("Dropdown not updated!");
    }

} // end changeItemDropdown function

/* 
    displayProducts()
    Purpose: Determine which department is selected and Output the array associated with the selected department to the productOutput div.
*/

function displayProducts() {
    // Determine which department is selected
    var departmentSelected = document.getElementById("ddDepartment").value;

    // Output array associated with the selected department
    if (departmentSelected == "Produce") {
        outputProducts(aProduce);
    }
    else if (departmentSelected == "Bakery") {
        outputProducts(aBakery);
    }
    else if (departmentSelected == "Meats") {
        outputProducts(aMeats);
    }
    else if (departmentSelected == "Cheese") {
        outputProducts(aCheese);
    }
} // End displayProducts function

// Function to avoid repetition
function outputProducts(theArray) {
    // Get the Products output Area
    var productOutputArea = document.getElementById("productOutput");

    // Clear Product Output Area
    productOutputArea.innerHTML = "";

    // Output all products associated with the selected
    for (var index = 0; index < theArray.length; index++) {
        productOutputArea.innerHTML += "Item #" + (index + 1) + ": " + theArray[index] + "<br>";
    }
} // End outputProducts function

/*
    addProduct()
    Purpose: The user will select one of the departments to view. They will then enter a new product in the textbox and click the Add Product button to add it to the selected departments array.
*/
function addProduct() {
    // Determine which department is selected
    var departmentSelected = document.getElementById("ddDepartment").value;

    // Read the value from the product textbox
    var readNewProduct = document.getElementById("product");

    // Add this product to the array of the selected department 
    if (departmentSelected == "Produce") {
        aProduce.push(readNewProduct.value);
    }
    else if (departmentSelected == "Bakery") {
        aBakery.push(readNewProduct.value);
    }
    else if (departmentSelected == "Meats") {
        aMeats.push(readNewProduct.value);
    }
    else if (departmentSelected == "Cheese") {
        aCheese.push(readNewProduct.value);
    }

    // Clear the textbox value
    readNewProduct.value = "";

    // Output array associated with the selected
    displayProducts();
} // End addProducts function

/*
    addItemToCart()
    Purpose: The user will select a number from the dropdown box. This number is rela ve to the products in the array for the Selected Department.
*/
function addItemToCart() {
    // Read the selected value from the dropdown box using the value property.
    var itemSelected = document.getElementById("itemNumDropdown").value;

    // Determine which department is selected
    var departmentSelected = document.getElementById("ddDepartment").value;

    // Relating the department selected with the correspondent array 			
    if (departmentSelected == "Produce") {
        var theArray = aProduce;
    }
    else if (departmentSelected == "Bakery") {
        var theArray = aBakery;
    }
    else if (departmentSelected == "Meats") {
        var theArray = aMeats;
    }
    else if (departmentSelected == "Cheese") {
        var theArray = aCheese;
    }

    // Analise if the item selected is valid
    if (itemSelected > theArray.length) {
        alert("Item value invalid!")
    }
    else {
        aShoppingCart.push(theArray[itemSelected - 1]);
        // Output the cart Array to the CartOutput div
        document.getElementById("cartOutput").innerHTML = aShoppingCart;
    }
} 
