const products = [
    {
        id: "redshoe",
        description: 'Red shoe',
        color: "red",
        price: 42.12,
        reviews: []
    },
    {
        id: "bluejean",
        description: 'Blue jeans',
        color: "blue",
        price: 55.15,
        reviews: []
    },
    {
        id: "greenshirt",
        description: 'Green shirt',
        color: "green",
        price: 25.99,
        reviews: []
    },
];

// Get all products 
function getAllProducts() {
    return products
}

// Get products by price range 
function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
}

// Get product by id
function getProductById(id) {
    return products.find((product) => {
        return product.id === id
    })
}

// Get products by filter (min, max, color)
function getFilteredProducts(min, max, color) {
    let filteredProducts = []

    products.map((product) => {
        if ((product.price <= max && product.price >= min) && product.color === color) {
            filteredProducts.push(product)
        }
    })

    return filteredProducts
}

// Add a new product 
function addNewProduct(id, description, price, color) {
    const newProduct = {
        id,
        description,
        price,
        color,
        reviews: []
    };

    products.push(newProduct)
    return newProduct
}

// Add a new product review 
function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductById(id)

    if (matchedProduct) {
        const newProductReview = {
            rating,
            comment
        }
        matchedProduct.reviews.push(newProductReview)

        return newProductReview
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    getFilteredProducts,
    addNewProduct,
    addNewProductReview
}