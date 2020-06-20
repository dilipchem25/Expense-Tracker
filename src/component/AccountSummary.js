import React from 'react';

const AccountSummary = ()=>{
    return(
        <div className = 'inc-exp-container'>
            <div>
                <h4>INCOME</h4>
                <p className = 'money plus'>$0.00</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className = 'money minus'>$0.00</p>
            </div>

        </div>
    )
}

export default AccountSummary;