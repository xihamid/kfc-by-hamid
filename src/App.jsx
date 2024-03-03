
import './App.css'
import { products } from "./assets/data/products"


function App() {

  return (
    <>
   

<div className="container">

<div className="row">
  <div className="col-8">

<div id="evryDayValue">
  <h2 className='menu-title mt-0'>EVERYDAY VALUE</h2>
<div className='row'>
{products.map((prod,index)=>{
  return (
    
    <>
    <div className="col-lg-4 col-md-4 col-6 px-larg-4" key={index}>
          <div className="card" >
              
            <img src={prod.image} className="card-img-top"   alt="..."/>
            <div className="card-body" >
              <h5 className="card-title">{prod.name} </h5>
              <div className='productDes'>
              <p className="card-text">{prod.description}</p>

              </div>
        

              <span className="badge rounded-pill bg-primary">RS.{prod.price}</span>
              <button className="btn btn-primary">  <i className='fa fa-plus'></i> ADD TO BUCKET </button>
            </div>
          </div>
          </div>
</>

  )
})}

</div>



  
</div>

  </div>









  <div className="col-4">col-4</div>
</div>

</div>



    </>
  )
}

export default App
