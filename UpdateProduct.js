import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const useparams = useParams();
    const navigate= useNavigate();


    useEffect(() => {
        console.warn(useparams);
        getProductsDetails();
    }, [])

    const getProductsDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }


    const updateproduct = async () => {

        console.warn(name, price, category, company);
        let result = fetch(`http://localhost:5000/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json '


            }


        });
        result = await result.json();
        console.warn(result);
        navigate("/");
    }



    return (
        <div className='product'>
            <input Update PRODUCTS />
            <input type='text' placeholder='ENTER PRODUCT NAME' className='inputbox'
                value={name} onChange={(e) => setName(e.target.value)}
            />


            <input type='text' placeholder='ENTER THE PRICE' className='inputbox'
                value={price} onChange={(e) => setPrice(e.target.value)}
            />


            <input type='text' placeholder='ENTER CATEGORY  OOF THE PRODUCT' className='inputbox'
                value={category} onChange={(e) => setCategory(e.target.value)}
            />


            <input type='text' placeholder='ENTER THE COMPANY NAMME' className='inputbox'
                value={company} onChange={(e) => setCompany(e.target.value)}
            />

            <button className='appbutton'>UPDATE PRODUCT
                onClick={updateproduct}</button>
        </div>


    )
}
export default UpdateProduct;
