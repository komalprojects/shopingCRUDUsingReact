import React from 'react'
import { useParams,useHistory } from 'react-router'

const Header =()=>{
   const path=useHistory()
   const toadd=()=>{
       path.push('/addproduct')
   }
   console.log(path)
    return(
        <div ClassName="ui fixed menu">
             <button onClick={toadd}>Add Product</button>
            <div className="ui container center">
                <h2>Shopping Portal</h2>
               
            </div>
        </div>
    )
}

export default Header