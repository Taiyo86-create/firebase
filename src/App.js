import { useEffect, useState } from 'react';
import './App.css';
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot)=>{
      console.log(snapShot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
