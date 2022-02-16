import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../redux/actions/productActions'
import Productcompoent from './ProductCompoent'

const ProductListing = () => {

    const product = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchproducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("ERR" + err)
        })
        const res2 = await res.data
        console.log(res)
        console.log(res2)
        dispatch(setProduct(res2))
    }
    useEffect(() => {
        fetchproducts()
    }, [])
    console.log(product)

    return <div className="ui grid container">

        <Productcompoent />
    </div>
}

export default ProductListing