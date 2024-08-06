document.getElementById('invoice-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const clientName = document.getElementById('client-name').value;
    const clientEmail = document.getElementById('client-email').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const itemDescription = document.getElementById('item-description').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    // Calculate total
    const total = itemQuantity * itemPrice;

    // Generate invoice output
    const invoiceOutput = `
        <h2>Invoice</h2>
        <p><strong>Client Name:</strong> ${clientName}</p>
        <p><strong>Client Email:</strong> ${clientEmail}</p>
        <p><strong>Invoice Date:</strong> ${invoiceDate}</p>
        <table>
            <thead>
                <tr>
                    <th>Item Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${itemDescription}</td>
                    <td>${itemQuantity}</td>
                    <td>$${itemPrice.toFixed(2)}</td>
                    <td>$${total.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.getElementById('invoice-output').innerHTML = invoiceOutput;
});
