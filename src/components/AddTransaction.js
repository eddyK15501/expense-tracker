import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(Number(e.target.value))}
            value={amount}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
