import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeProduct } from '../redux/actions/productActions'

const ProductDetail = (props) => {
    const pro = useSelector((state) => state.selectedProduct)
    console.log(pro)
    const { image, price, category, description, title } = pro
    const dispatch = useDispatch()
    console.log()
    let id = props.match.params.pid

    const fetchdetails = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
            console.log("ERR" + err)
        })
        console.log(res.data)
        dispatch(selectedProduct(res.data))
    }
    useEffect(() => {
        if (id && id !== "") {
            fetchdetails()
        }
        return () => {
            dispatch(removeProduct())
        }

    }, [id])
    return <div className="ui grid container">
        {Object.keys(pro).length === 0 ? (
            <div>....Loading</div>
        ) : (
        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">ADD</div>
            <div className="middle aligned row">
                <div className="column lp">
                    <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                    <h1>{title}</h1>
                    <h2><a className="ui teal tag label">${price}</a></h2>
                    <h3 className="ui brown block header">{category} </h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">ADD to cart</div>
                    </div>
                </div>
            </div>
            </div>
        </div>)}


    </div>
}

export default ProductDetail