import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <React.Fragment>
      <div className="container-fluid" style={{background:"#0771ac"}}>
        <h4 className="ml-5">Header</h4>
        <div className="row mt-3 ">
          <div className="col-12 col-md-3 " >
          <div className="card" style={{width:250,height:580,background:"#0771ac",color:"white",border:"none"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 ">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
          </div>
          <div className="col-12 col-md-9" style={{background:"#f5f5f5",height:550}}>
            <h4 >Sales Report</h4>
            <div className="row " >
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
            <div className="card mt-4" style={{width:600,height:450 }}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
            </div>
            <div classNameName="col-md-2">
            </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
