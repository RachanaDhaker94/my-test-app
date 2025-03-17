import React from 'react';



function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=10")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <header className="">
        <h1>ALL Content</h1>
        <ul>
          {data.length > 0 &&
            data.map((item, index) => {
              return (<li key={item.id}><img src={item?.url} alt='sdsd' /></li>);
            })}
        </ul>
        <div><button>Next</button></div>
      </header>
    </div>
  );
}

export default App;

