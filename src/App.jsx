
import './App.css'
import './Navbar.css'
import { products } from "./assets/data/products"
// import {NavBar} from './NavBar';



function App() {

  return (
    <>
   

{/* Navbar start */}

<div id='mynavbar'>

<div className='nav-left'>
  <a href="#"><img  src={'KfcLogo.png'} /></a>
</div>
<div className='nav-right'>
  <button className=' btn loginBtn'>LOGIN</button>
</div>
</div>







{/* Navbar end */}



<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.kfcpakistan.com/images/98f788d0-c114-11ee-a3ee-43791878213d-995x356_desktop_image-2024-02-01151430.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.kfcpakistan.com/images/24768cf0-ccda-11ee-a3d2-55a29658d5c6-995x356_desktop_image-2024-02-16144618.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.kfcpakistan.com/images/98f788d0-c114-11ee-a3ee-43791878213d-995x356_desktop_image-2024-02-01151430.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



{/* end slider */}


<div className="container">

<div className="row">
  <div className="col-12">

<div id="evryDayValue">
  <h2 className='menu-title mt-0'>BEST SELLERS test</h2>
<div className='row'>
{products.map((prod,index)=>{
  return (
    
    <>
    <div className="col-lg-3 col-md-3 col-4 px-larg-2" key={index}>
          <div className="card" >
              
            <img src={prod.image} className="card-img-top"   alt="..."/>
            <div className="card-body" >
              <h5 className="card-title">{prod.name} </h5>
              <span className="badge rounded-pill bg-danger">RS.{prod.price}</span>
              <div className='productDes'>
              <p className="card-text">{prod.description}</p>
              <br />

              </div>
        

             
              <button className="btn btn-primary">  <i className='fa fa-plus'></i> ADD TO BUCKET  </button>
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
