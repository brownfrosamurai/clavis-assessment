const orders = [
    {
        date: '2020-05-20',
        subtotal: 90.22,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: "Old Red Shoe",
                    price: 45.15
                },
                quantity: 2
            }
        ]
    }
]

function getAllOrders() {
    return orders
}

module.exports = {
    getAllOrders
}