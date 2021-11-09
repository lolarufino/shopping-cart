export interface State {
    products: Array<Product>
    productsInCart: Array<Product>
}

export interface Product {
    id: number,
    image: string,
    name: string,
    price: number,
    amount: number,
    stock: number 
}