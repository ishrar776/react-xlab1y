import React, { useState, useEffect } from 'react';
import './style.css';
import useAxiosFetch from './useAxiosFetch';
export default function Ccom(props) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [drpvalue, setDrpValue] = useState([]);
  const [count, setCount] = useState(0);
  const findselect = (e) => {
    props.topvalue(e.target.value);
    console.log('pass value from parent to child' + e.target.value);
  };
  const { data, fetchError, isLoading } = useAxiosFetch(url);
  useEffect(() => {
    setDrpValue(data);
  }, [data]);
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((d) => setDrpValue(d))
  //     .catch((error) => {
  //       console.log('It seem some error' + error);
  //     });
  // }, []);
  const startCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Child to Parent propgation {!count == 0 && count}</h1>
      <p>
        <select text="txtReason" name="txtreason" onChange={findselect}>
          {drpvalue.map((item) => (
            <option key={item.id} value={item.username}>
              {item.username}
            </option>
          ))}
        </select>
      </p>
      <p>
        <button onClick={startCount}>AddTocart</button>
      </p>
    </div>
  );
}
