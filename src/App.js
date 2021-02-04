import { useEffect, useState } from 'react';
import Cards from './Cards';
import './App.css';

function App() {

  const[initial, updated] = useState([]);
  const[search, uSearch] = useState("");

  let URL = "https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json";
  useEffect(
    () =>{
      fetch(URL)
      .then(response => response.json())
      .then(
        (result) =>{
          updated(result.pics);
        }
      )
      .catch(
        (error) =>{
          console.log("Error", error);
        }
      )
    }, [URL])

    const searchImage =(e)=>{
      uSearch(e.target.value);
    }

  return (
    <>
    <div className="search"><input type="text" placeholder="Search images..." onChange={searchImage}></input></div>
    <div className="wrapper">
      {initial.filter((val)=>{
        if(search == "")
          return val;
        else if(val.category.toLowerCase().includes(search.toLocaleLowerCase()))
          return val;
      }).map(
        (index) =>{
          return(
            <>
            <Cards data = {index}></Cards>
            </>
          )
        }
      )}
    </div>
    </>
  );
}

export default App;
