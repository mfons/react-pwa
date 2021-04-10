import React from 'react'
import Loader from '../Components/Loader'
import DashboardCard from '../Components/DashboardCard'
import GraphCard from '../Components/GraphCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Dashboard() {
    const url = `https://5f15e386a346a0001673894a.mockapi.io/products?page=1&limit=10`

    //let products = useAxiosGet(url);
    let content = null;

    // if (products.error /*|| products.data && products.data.images.length === 0*/) {
    //     content = <p>
    //         Omg!  Error time!!  Or lack of data or something!!  Better panic and run in little tiny circles...
    //     </p>
    // }

    // if (products.loading) {
    //     content = <Loader></Loader>
    // }

    // if(products.data /*&& products.data.images.length > 0*/) {
    //     content =
    //         products.data.map((product, key) => 
    //             <div key={key}>
    //                 <ProductCard
    //                     product={product}
    //                 />
    //             </div>
    //         )
    //     ;
    // }

    content =
    <div>
        <DashboardCard/>
        <GraphCard graph="1"/>
        <GraphCard graph="2"/>
        <GraphCard graph="3"/>
    </div>
    return (
        <div>
            <h1 className="font-bold text-2xl">
                Dashboard
            </h1>
            {content}
        </div>
    )
}

export default Dashboard