"use strict";
(() => {
    const API = 'https://api.escuelajs.co/api/v1';
    const fetchData = (url) => {
        return fetch(url);
    };
    // fetchData(`${API}/products`)
    //     .then(response => response.json())
    //     .then(products => console.log(products))
    //     .then(() => console.log('Hello!'))
    //     .catch(error => console.error(error));
    fetchData(`${API}/products`)
        .then(response => response.json())
        .then(products => {
        // console.log(products);
        return fetchData(`${API}/products/${products[0].id}`);
    })
        .then(response => response.json())
        .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
        .then(response => response.json())
        .then(category => console.log(category))
        .catch(error => console.error(error))
        .finally(() => console.log('Finally'));
})();
