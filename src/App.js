import React from 'react';



function App() {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=10")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const itemsPerPage = 1;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  
  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

 
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

 
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div className="App">
      <header className="">
        <h1>ALL Content</h1>
        <ul style={{listStyle:'none'}}>
          {currentItems.length > 0 &&
            currentItems.map((item, index) => {
              return (<li key={item.id} >
                          <img src={item?.download_url}
                           alt="image"  
                           width={item?.width}
                           height={item?.height}/>
                            </li>);
            })}
        </ul>
        <div>
        <button onClick={prevPage} disabled={currentPage === 1} style={{marginRight:10}}>
          Previous
        </button>

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;

