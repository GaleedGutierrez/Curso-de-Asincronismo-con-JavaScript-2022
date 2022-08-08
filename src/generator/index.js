// function* gen () {
//     yield 1;
//     yield 2;
//     yield 3;
// }
const API = 'https://api.escuelajs.co/api/v1';
const fethData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};
async function* anotherFunction(urlApi) {
    try {
        const products = await fethData(`${urlApi}/products`);
        yield products;
        const product = await fethData(`${urlApi}/products/${products[0].id}`);
        yield product.title;
        const category = await fethData(`${urlApi}/categories/${product.category.id}`);
        yield category.name;
    }
    catch (error) {
        console.error(error);
    }
}
const gen2 = anotherFunction(API);
console.log(gen2.next());
export {};
