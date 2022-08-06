import { Category, Product } from '../insterfaces';

const API = 'https://api.escuelajs.co/api/v1';

const fethData = async (urlApi: string) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

const anotherFunction = async (urlApi: string): Promise<void> => {
    try {
        const products: Product[] = await fethData(`${urlApi}/products`);
        const product: Product = await fethData(`${urlApi}/products/${products[0].id}`);
        const category: Category = await fethData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
};

anotherFunction(API);
