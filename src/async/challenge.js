const API = 'https://api.escuelajs.co/api/v1';
const fethData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};
const anotherFunction = async (urlApi) => {
    try {
        const products = await fethData(`${urlApi}/products`);
        const product = await fethData(`${urlApi}/products/${products[0].id}`);
        const category = await fethData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }
    catch (error) {
        console.error(error);
    }
};
anotherFunction(API);
export {};
