import React from 'react'

import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product() {
    const { id } = useParams()
    const url = `https://5f15e386a346a0001673894a.mockapi.io/products/${id}`
    //const url = `https://5f15e386a346a0001673894a.mockapi.io/products?page=1&limit=10`

    let product = useAxiosGet(url);

    let content = null;

    if (product.error || product.data && product.data.images.length === 0) {
        content = <p>
            Omg!  Error time!!  Or lack of data or something!!  Better panic and run in little tiny circles...
        </p>
    }

    if (product.loading) {
        content = <Loader></Loader>
    }

    if(product.data && product.data.images.length > 0) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    {/* <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    /> */}
                    <h1>image placeholder</h1>
                </div>
                <div className="text-xl font-bold mb-3">
                    {product.data.price}
                </div>
                <div >
                    {product.data.description}
                </div>
            </div>
        ;
    }

    return(
        <div>
            {content}
        </div>
    );
}

export default Product