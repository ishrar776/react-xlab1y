import React, { useState, useEffect } from 'react';
import './style.css';
import Bcom from './Bcom';
import useWindowSize from './hook';
export default function App() {
  const [values, setValues] = useState({
    txtname: '',
    txtreason: '',
  });
  const [submit, setSubmit] = useState(false);
  const { width, height } = useWindowSize();
  //console.log('values object is ' + JSON.stringify({useWindowSize}));
  const enterYourId = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const selectReason = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const saveData = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!submit) {
      const Data = { ...values };
      console.log('All Data display is' + JSON.stringify(Data));
      const optionParameter = {
        method: 'Post',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Data),
      };
      fetch('url', optionParameter)
        .then((response) => {
          response.json();
        })
        .catch((error) => {
          console.log('Data are not saved' + error);
        });
    }
  };
  const options = [
    { id: 1, label: '--Select--', value: '--select--' },
    { id: 2, label: 'holiday', value: 'Holiday' },
    { id: 3, label: 'picnic', value: 'Picnic' },
  ];
  return (
    <div>
      <h1>Topkimo</h1>
      <p>Start posting your requirment</p>
      <p>
        <input
          text="txtName"
          name="txtname"
          value={values.txtname}
          onChange={enterYourId}
          placeholder="Enter Your Id"
        ></input>
      </p>
      <p>
        <select
          text="txtReason"
          name="txtreason"
          value={values.txtreason}
          onChange={selectReason}
        >
          {options.map((item) => (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </p>
      <p>
        <button onClick={saveData}>Submit</button>
      </p>
      <p>
        <Bcom discribeFun={values.txtreason} />
      </p>
      <p>
        {' '}
        width is {width} and height is {height}
      </p>
    </div>
  );
}
