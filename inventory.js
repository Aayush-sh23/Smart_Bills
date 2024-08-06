document.getElementById('inventory-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    // Create a new inventory item object
    const inventoryItem = {
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice
    };

    // Add the item to the inventory list
    addInventoryItem(inventoryItem);

    // Reset the form
    document.getElementById('inventory-form').reset();
});

function addInventoryItem(item) {
    // Get the inventory output div
    const inventoryOutput = document.getElementById('inventory-output');

    // Check if there is already an inventory table
    let inventoryTable = inventoryOutput.querySelector('table');
    if (!inventoryTable) {
        // Create a new table
        inventoryTable = document.createElement('table');
        inventoryTable.innerHTML = `
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        inventoryOutput.appendChild(inventoryTable);
    }

    // Create a new row for the item
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>$${(item.quantity * item.price).toFixed(2)}</td>
    `;

    // Add the row to the table
    inventoryTable.querySelector('tbody').appendChild(newRow);
}
