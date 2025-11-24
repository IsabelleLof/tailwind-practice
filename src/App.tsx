
import './App.css'

import {useEffect, useState} from 'react';

export default function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/codingresources/codingResources');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
