import React,{useState} from 'react';

const AddTransaction = () =>{
    const [description, setDescription]=useState();
    const [transactionAmount, setTransactionAmount]=useState();
    return(
        <div>
            <h3>Add Transaction</h3>
            <form>
                <div className ='form-control'>
                    <label htmlFor ='description'>
                        Description
                    </label>
                    <input type = 'text' 
                           id = 'description' 
                           placeholder ='Details of Transaction'
                           value =  {description}
                           onChange = {(e)=>setDescription(e.target.value)}
                           >

                    </input>
                
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'transactionamount'>
                        Transaction Amount
                    </label>
                    <input type = 'number' 
                           id = 'transactionamount' 
                           placeholder ='Enter Transaction Amount'
                           value = {transactionAmount}
                           onChange = {(e)=>setTransactionAmount(e.target.value)}
                           >
                    
                    </input>

                
                </div>
                <button className = 'btn'>Add Transaction</button>
            </form>
        </div>
    )

}

export default AddTransaction;