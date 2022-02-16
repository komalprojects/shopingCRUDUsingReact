
import {combineReducers} from 'redux'
import {productReducer, selectedreducer} from './productReducer'


const reducers= combineReducers(
  {
    allproducts:productReducer,
    selectedProduct:selectedreducer
  }
)


export default reducers