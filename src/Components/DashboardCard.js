import React from 'react'
import {Link} from 'react-router-dom'
function DashboardCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
           <div className="p-3">
               <h3 className="mb-3">
                    <label>TAF Service URL:</label> { props.data.serviceURL }
                </h3>
                <div className="mb-3">
                    <label>TAF Report Generator URL:</label> { props.data.reportGeneratorURL }
                </div>
                <div className="mb-3">
                   <label>TAF Database:</label> { props.data.database }
                </div>
           </div>
        </div>
    )
}

export default DashboardCard