import React from 'react'
import {Link} from 'react-router-dom'
function GraphCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/graphs/${props.graph}`}>
                <h1>graph placeholder</h1>
           </Link>
        </div>
    )
}

export default GraphCard