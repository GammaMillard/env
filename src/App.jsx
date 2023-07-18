import logo from './logo.svg';
import './App.css';
import {useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/firebase';

function App() {
  const x = process.env.REACT_APP_API_URL
  const getData = async () => {
    const data = await getDocs(collection(db, 'Students'))
    data.forEach(data => console.log(data.data()))

    

const querySnapshot = await getDocs(collection(db, "Student"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
  }
  useEffect(() => {
    getData()
  
  }, [])
  

  return (
    <div className="App">
      {x || 'hola'}
    </div>
  );
}

export default App;
