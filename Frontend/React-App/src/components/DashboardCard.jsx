import React from 'react'

function DashboardCard(props) {
    return (
        <div className="card">
            <div className="card-body text-center">
                <h6>{props.heading}</h6>
                <h6>{props.count}</h6>
            </div>

        </div>
    )
}


export default DashboardCard