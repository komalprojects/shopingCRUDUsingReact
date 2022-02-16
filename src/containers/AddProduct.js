import React from 'react'
import { Field } from 'redux-form'
function AddProduct() {
    return (
        <>
            <h1>in add product</h1>
            <form className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div className="field">
                    <label>Price</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <div className="field">
                    <label>Desciption</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <div className="field">
                    <label>category</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabindex="0" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddProduct