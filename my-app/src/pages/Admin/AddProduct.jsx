import React, { useState } from 'react'

const AddProductPage = ({addProduct}) => {
    const [inputValues, setInputValues] = useState();
    const onHandleChange = (event) => {
        const name  = event.targer.name;
        const value = event.targer.value;
        setInputValues({"name": event.target.value});

    }
    const onHandleSubmit = (e) => {
        e.prevenDefault();
        AddProduct(inputValues);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Enter Product Name' onChange={onHandleChange} name='name' />
                <input type="text" placeholder='Enter Product Price' onChange={onHandleChange} name='price' />
                <button type='submit'>Add New</button>
            </form>
        </div>
    )
}

export default AddProductPage