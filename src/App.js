import { useState, useEffect } from 'react'



const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  //TOGGLE PARA PAUSE AND START
  function toggle() {
    setIsActive(!isActive);
  }
  //FUNCTION FOR RESET
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);

      //RESET
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },
    //PREGUNTAR
    [isActive, seconds]
  );

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App


// function App() {

//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log("useEffect - Mounting (initial render)");
//     const id = setInterval(() => {
//       setCount(count+ 1);
//     }, 1000);

//     // Return a "cleanup function" which will run automatically
//     // before the component is removed from the DOM
//     return () => {                                               // <== ADD
//       console.log("Cleanup - Component Unmounting");
//       clearInterval(id);
//     };
//   }, [count])
  
//   return (
    
//     <div>

//       <h1> Timer </h1>

//       <h2>{count}</h2>

//     </div>

// )

// }
// export default App;



// function TimerThree() {
//   const [count, setCount] = useState(0);


//   useEffect(() => {
//     console.log("useEffect - Mounting (initial render)");
//     const id = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     // Return a "cleanup function" which will run automatically
//     // before the component is removed from the DOM
//     return () => {                                               // <== ADD
//       console.log("Cleanup - Component Unmounting");
//       clearInterval(id);
//     };
//   }, [])
// }