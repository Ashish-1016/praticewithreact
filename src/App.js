import { useEffect, useState } from 'react';
import './App.css';
import ReduxPage from './components/ReduxPage';
import ProgressBar from './components/ProgressBar'



function App() {


  // const [number, setNumber] = useState(10)

  // function handlePagination() {
  //   setNumber(number + 10)
  //   const slicedTodos = todos.slice(10, number)
  //   setTodos(slicedTodos)
  // }



  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("https://64b1b112062767bc48268aec.mockapi.io/users");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const todoData = await response.json();
  //       setTodos(todoData);
  //       console.log(todos)
  //     } catch (error) {
  //       // Handle errors here
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, [todos]);

  // const [searchTerm, setSearchTerm] = useState("")
  // const [range, setRange] = useState(8)
  const [percent, setPercent] = useState('50')
  const [display, setDisplay] = useState(0)

  useEffect(() => {

    if (percent < 0) {
      setPercent('0')
    }
    if (percent > 100) {
      setPercent('100')
    }

    setInterval(() => {
      for(let i=0;i<=percent;i++){
        setDisplay(i+1)
      }
    }, 50)

  }, [percent])

  return (
    <div className="App">
      <h1>Practicing React</h1>
      {/* <h1>Pratice React App</h1>
      <button onClick={handlePagination}>Add 10</button>
      {todos.map((ele) => {
        return (
          <div key={ele.id}>
            <h3>{ele.id}</h3>
            <p>{ele.title}</p>
            <p>{ele.completed ? 'Completed' : 'Not Completed'}</p>
          </div>
        )
      })} */}
      {/* This is basic Search  */}
      {/* <div>
        <input type='text' placeholder='Search..' onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {todos.filter((ele) => {
        if (searchTerm === "") {
          return true; // Include all elements when the search term is empty
        } else if (ele.name.toLowerCase().includes(searchTerm.toLowerCase()) || ele.surname.toLowerCase().includes(searchTerm.toLowerCase())) {
          return  true// Include elements that match the search term
        }
        return false
      }).map((ele, i) => {
        return <div key={i}>
          <h1>{ele.name}</h1>
          <h1>{ele.surname}</h1>
        </div>
      })} */}
      {/* This is advanced search */}
      {/* <div>
        <input type='text' placeholder='Search..' onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {todos.filter((ele) => {
        if (searchTerm === "") {
          return true; // Include all elements when the search term is empty
        } else if (ele.name.toLowerCase().includes(searchTerm.toLowerCase()) || ele.surname.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true; // Include elements that match the search term
        }
        return false;
      }).map((ele, i) => {
        const nameWithHighlight = ele.name.replace(
          new RegExp(`(${searchTerm})`, 'gi'),
          '<span style="color: blue;">$1</span>'
        );
        const surnameWithHighlight = ele.surname.replace(
          new RegExp(`(${searchTerm})`, 'gi'),
          '<span style="color: blue;">$1</span>'
        );

        return (
          <div key={i}>
            <h1 dangerouslySetInnerHTML={{ __html: nameWithHighlight }} />
            <h1 dangerouslySetInnerHTML={{ __html: surnameWithHighlight }} />
          </div>
        );
      })} */}


      {/* How to use Slider/Range HTMLElement */}
      {/* <input type='range' onChange={(e) => setRange(e.target.value)} min='8' max='1000' />
      <h1>{range}</h1>
      <button>Hello</button> */}

      {/* <ReduxPage /> */}
      <div className='flex items-center m-4 rounded-xl border border-black'>
        <ProgressBar percent={percent} />
        <p className='absolute ml-[46.5%] text-black font-semibold'>{display}%</p>
      </div>



    </div>
  );
}

export default App;
