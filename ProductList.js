import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products")
        result = await result.json();
        setProducts(result);

    }
    console.warn("products", products);


    const deleteProduct= async(id)=>{
        let result = await fetch(`http://localhost:5000/products/${id}`,
     {  method:"delete"});
          result = await result.json();
          if(result){
             getProducts();
          }
    }

    return (

        <div className="product-li">
            FUCK YOU BABY
            <ul>

                <li>s.no</li>
                <li>name</li>

                <li>pricw</li>
                <li>category</li>
                <li>operation</li>
            </ul>
            {
            products.map((item,index)=>
                    <ul   key ={item._id}>

                <li>{index+1}</li>
                <li>{item.name}</li>

                <li>${item.price}</li>
                <li>${item.category}</li>
                <li><button onClick={()=> deleteProduct(item._id)}>Delete </button>
                <Link to= {"/update"+item._id}> update  </Link></li>
            </ul>
            )

}


        </div>

    )
}

export default ProductList;