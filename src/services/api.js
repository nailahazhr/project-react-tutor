import axios from 'axios';

// FUNCTION 1-FETCHPRODUCTS: UNTUK AMBIL DATA PRODUCT DI DUMMYJSON
const fetchProducts = async () => {
    try {
        const url = 'https://dummyjson.com/products?limit=3';
        const response = await axios.get(url);
        return response.data.products;
    } catch (error) {
        console.log(error)
    }
}

// FUNCTION 2-ADDPRODUCT
const addProduct = async (namaProduct) => {
    try {
        const url = "https://dummyjson.com/products/add";
        const payload = {
            title: namaProduct
        }

        const response = await axios.post(url, payload);
        return response.data;

    } catch (error) {
        console.log(error)
    }
}

export {fetchProducts, addProduct}