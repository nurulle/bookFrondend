import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Navbar,Form,FormControl,Button, Image, } from 'react-bootstrap'


export default class Waiting extends Component {
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
                            <Button variant="outline-secondary" img className="rounded-pill" alt="150x75" src="https://placehold.it/150x75">Sign-In</Button>               
                        </Link> 
                    </div>

                </div>
               

            
            </Navbar>  

            <div>
  <div className="row" style={{marginLeft: '40vh', marginTop: '10vh', marginRight: '10vh'}}>
    <div className="column">
      <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/image12_l7znce.png" />
    </div>
    <div className="column" style={{marginLeft: '10vh'}}>
      <h1> At the Going Down of the Sun</h1>
      <a style={{fontSize: '5vh', color: 'gray'}}>Maruis Oelsching</a><br />
      <a>
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFB800'}} />
        <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
        <span className="fa fa-star checked" style={{color: '#FFDB7E'}} />
      </a>
      <table className="table" style={{marginTop: '5vh'}}>
        <tbody>
          <tr>
            <th scope="row">Publisher</th>
            <td>Gramedia Putaka Utama</td>
          </tr>
          <tr>
            <th scope="row">ISBN</th>
            <td>9786020385914</td>
          </tr>
          <tr>
            <th scope="row">Pages</th>
            <td>376 hlm</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" style={{borderRadius: 20, width: '15vh'}}><a href="borrowpage.html" style={{color: 'white'}}>Borrow</a></button>
      <button type="button" className="btn btn-light" style={{borderRadius: 20, width: '15vh', color: '#1f81DF'}}>Chat</button>
    </div>
  </div>


 
</div>

            </>
        )
    }
}
