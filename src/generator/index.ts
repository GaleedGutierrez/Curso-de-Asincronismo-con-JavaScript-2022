// function* gen () {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const g = gen();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

// function* iterable (array: string[]) {
//     for (const value of array) {
//         yield value;
//     }
// }

// const it = iterable(['Galeed', 'Oscar', 'Ana', 'Omar', 'Juan']);

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

import { Category, Product } from '../insterfaces';

const API = 'https://api.escuelajs.co/api/v1';

const fethData = async (urlApi: string) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

async function* anotherFunction (urlApi: string) {
    try {
        const products: Product[] = await fethData(`${urlApi}/products`);
        yield products;

        const product: Product = await fethData(`${urlApi}/products/${products[0].id}`);
        yield product.title;


        const category: Category = await fethData(`${urlApi}/categories/${product.category.id}`);
        yield category.name;



    } catch (error) {
        console.error(error);
    }
}

const gen2 = anotherFunction(API);

console.log(gen2.next());
