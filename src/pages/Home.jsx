import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Navbar,Form,FormControl,Button, Image, } from 'react-bootstrap'
// import { FaSearch } from "react-icons/fa";
import image10 from '../assets/img/image10.png';
import image13 from '../assets/img/image13.png';
import image5 from '../assets/img/image5.png';


export default class Index extends Component {
    render() {
      return (
        <>
         
             

          <Navbar class="navbar navbar-expand-lg" bg="light" variant="light">
                <div class="container-fluid">

                    <div class="position-relative">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" img className="rounded-pill" alt="150x75" src="https://placehold.it/150x75">
                        {/* <i className="fa FaSearch fa-lg position-absolute" style={{top : '13', right: '1rem', color: 'rgb(184, 182, 182)'}} ></i> */}
   
                        </FormControl>
                    </Form>
                    </div>


                    <div class="text-center">
                        <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616622142/logoPLUGIN_qsovpm_jmo8rn.png" alt width="50px" height="40px"></Image>
                    </div>


                    <div>
                        <Link to="/signin"> 
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
               
                        </Link> 
                    </div>

                </div>
               

            
          </Navbar>   




            <div>
              <div className="container">
                <h5 className="mt-4">Popular</h5>
              </div>
              <div className="my-slider">

                <div className="slide-item">
                  <div className="card m-2 bg-linear-red" style={{maxWidth: '540', background: '#7A284C'}}>
                    <div className="row no-gutters">
                      <div className="col-12 col-md-4 ">
                        <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627810/chunin/image3_izfo32.png" style={{width: '150', height: '200', marginLeft: '1vh'}} alt="..." />
                      </div>
                      <div className="col-12 col-md-5">
                        <div className="card-body">
                          <h5 className="card-title">At The Going Down of the Sun</h5>
                          <p className="card-text">Marius Oelsching</p>
                          <p className="card-text">
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-item">
                  <div className="card m-2 bg-linear-blue" style={{maxWidth: '540', background: '#6E79E5'}}>
                    <div className="row no-gutters">
                      <div className="col-12 col-md-4 ">
                        <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_idooqp.png" style={{width: '150', height: '200'}} alt="..." />
                      </div>
                      <div className="col-12 col-md-5">
                        <div className="card-body">
                          <h5 className="card-title">At The Going Down of the Sun </h5>
                          <p className="card-text">Marius Oelsching</p>
                          <p className="card-text">
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-item">
                  <div className="card m-2 bg-linear-pink" style={{maxWidth: '540', background: '#F7E9E0'}}>
                    <div className="row no-gutters">
                      <div className="col-12 col-md-4 ">
                        <img src={image13} style={{width: '150', height: '200'}} alt="..." />
                      </div>
                      <div className="col-12 col-md-5">
                        <div className="card-body">
                          <h5 className="card-title"> At The Going Down of the Sun</h5>
                          <p className="card-text">Marius Oelsching</p>
                          <p className="card-text">
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-item">
                  <div className="card m-2 bg-linear-red" style={{maxWidth: '540', background: '#7A284C'}}>
                    <div className="row no-gutters">
                      <div className="col-12 col-md-4 ">
                        <Image  src={image10} style={{width: '150', height: '200'}} alt="..." />
                      </div>
                      <div className="col-12 col-md-5">
                        <div className="card-body">
                          <h5 className="card-title"> At The Going Down of the Sun</h5>
                          <p className="card-text">Marius Oelsching</p>
                          <p className="card-text">
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          {/* BRowse */}



          <div className="container">
            <div className="row">

              <div className="col-5 col-md-10">
                <h5 style={{marginTop: '5vh'}}>Browse</h5>
                <div className="row d-flex">

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <a href="description1.html">
                            <Image src={image5} className="cover" style={{width: '100', height: '170'}} alt="..." />
                          </a>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <a href="description1.html" style={{color: 'black'}}>
                              <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                              <p className="card-text">Marius Oelsching</p>
                            </a><a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <a href="description1.html">
                            <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: '100', height: '170'}} alt="..." />
                          </a>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                            <p className="card-text">Marius Oelsching</p>
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <a href="description1.html">
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" className="cover" style={{width: '100', height: '170'}} alt="..." />
                          </a>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                            <p className="card-text">Marius Oelsching</p>
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <a href="description1.html">
                            <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_idooqp.png" className="cover" style={{width: '100', height: '170'}} alt="..." />
                          </a>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                            <p className="card-text">Marius Oelsching</p>
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <a href="description.html">
                            <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image10_1_kceqv9.png" className="cover" style={{width: '100', height: '170'}} alt="..." />
                          </a>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">Jak Of The bushveld</p>
                            <p className="card-text">Marius Oelsching</p>
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-4">
                    <div className="card-books mb-3" style={{maxWidth: '540'}}>
                      <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                          <a href="description.html">
                            <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627811/chunin/image11_xgjqat.png" className="cover" style={{width: '100', height: '170'}} alt="..." />
                          </a>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="card-body">
                            <p className="card-title font-weight-bold">Jak Of The bushveldaa</p>
                            <p className="card-text">Marius Oelsching</p>
                            <a>
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFB800'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                              <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* kat */}

              <div className="col-7 col-md-2">
                <h5 className="category-text" style={{marginTop: '5vh'}}>Category</h5>
                <div className="row category">

                  <div className="col-md-12 mt-3">
                    <a href="category.html" className="text-dark" style={{textDecoration: 'none', listStyle: 'none'}}>
                      <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/khistory_vbqvek.png" style={{width: '30', height: '30'}} alt />
                      <p style={{display: 'inline-block'}}>Technology</p>
                    </a>
                  </div>

                  <div className="col-md-12 mt-3">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/khistory_vbqvek.png" style={{width: '30', height: '30'}} alt />
                    <p style={{display: 'inline-block'}}>History</p>
                  </div>

                  <div className="col-md-12 mt-3">
                    <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/kpolitic_tydfda.png" style={{width: '30', height: '30'}} alt />
                    <p style={{display: 'inline-block'}}>Politics</p>
                  </div>

                  <div className="col-md-12 mt-3">
                    <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/kromance_k94qgp.png" style={{width: '30', height: '30'}} alt />
                    <p style={{display: 'inline-block'}}>Romance</p>
                  </div>

                  <div className="col-md-12 mt-3">
                    <Image  src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/ksciense_c6ody1.png" style={{width: '30', height: '30'}} alt />
                    <p style={{display: 'inline-block'}}>Science</p>
                  </div>

                  <div className="col-md-12 mt-3">
                    <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627813/chunin/ksport_j2h5p2.png" style={{width: '30', height: '30'}} alt />
                    <p style={{display: 'inline-block'}}>Sports</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
                  
               
        </>

            
      )
    }
}


