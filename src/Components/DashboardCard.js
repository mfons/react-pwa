import React from 'react'
import {Link} from 'react-router-dom'
function DashboardCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
           <div className="p-3">
               <h3 className="font-bold text-xl mb-3">
                    TAF Service URL: { props.data.serviceURL }
                </h3>
                <div className="font-bold mb-3">
                    TAF Report Generator URL: { props.data.reportGeneratorURL }
                </div>
                <div className="mb-3">
                   TAF Database: { props.data.database }
                </div>
           </div>
        </div>
    )
}

export default DashboardCard