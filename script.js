// Item class to define the structure of an inventory item
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Function to add a new item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
}

// Function to update an existing item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

// Function to get an item by id
function getItem(inventory, id) {
    return inventory.find(item => item.id === id) || `Item with id ${id} not found.`;
}

// Function to print the inventory in a readable format
function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

// Example usage
let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

// Adding an item
console.log("\nAdding item:");
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
printInventory(inventory);

// Updating an item
console.log("\nUpdating item:");
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

// Deleting an item
console.log("\nDeleting item:");
deleteItem(inventory, 2);
printInventory(inventory);

// Getting an item
console.log("\nGetting item with id 1:");
console.log(getItem(inventory, 1));

// Trying to get an item that does not exist
console.log("\nGetting item with id 5:");
console.log(getItem(inventory, 5));
