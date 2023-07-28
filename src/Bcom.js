import React, { useState } from 'react';
import './style.css';
import Ccom from './Ccom';

export default function Bcom(props) {
  const [reason, setReason] = useState('');
  return (
    <div>
      <h1>Parent to child</h1>
      <p>{props.discribeFun}</p>
      <p>{reason}</p>
      <p>
        <Ccom topvalue={setReason} />
      </p>
    </div>
  );
}
