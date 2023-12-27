import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const[error,setError]=React.useState('');
    const addproduct= async ()=>{

         console.warn(!name)
         if(!name && !price && !category &&!company){
            setError(true);
           return false;
         }
        console.warn(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, price,category,company,userId }),
            header: {
                'Content-Type': 'application/json '
            }
        }
          
                
       

        );
        result = await result.json()
        console.warn(result);
    }

    return (
        <div className='product'>
            <input ADD PRODUCTS />
            <input type='text' placeholder='ENTER PRODUCT NAME' className='inputbox'
                value={name} onChange={(e) => setName(e.target.value)}
            />

           {error && (!name) && <span>ENTER A VALID NAME</span>}
            <input type='text' placeholder='ENTER THE PRICE' className='inputbox'
                value={price} onChange={(e) => setPrice(e.target.value)}
            />
           {error && (!price) && <span>ENTER A VALID PRICE</span>}

            <input type='text' placeholder='ENTER CATEGORY  OOF THE PRODUCT' className='inputbox'
                value={category} onChange={(e) => setCategory(e.target.value)}
            />

         {error && (!category) && <span>ENTER A VALID CATEGORY</span>}
            <input type='text' placeholder='ENTER THE COMPANY NAMME' className='inputbox'
                value={company} onChange={(e) => setCompany(e.target.value)}
            />
          {error && (!company) &&<span> ENTER A VALID COMPANY</span>}
            <button className='appbutton'>ADD PRODUCT
                onClick={addproduct}</button>
        </div>

           
    )
}
export default AddProduct; 
 