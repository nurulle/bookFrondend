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
                            <Image src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627808/chunin/Circled_UserMaleSkinType6_qopr0z.png" alt className="avatar" style={{verticalAlign: 'middle', width: 50, height: 50, borderRadius: 50}} />
               
                        </Link> 
                    </div>

                </div>
               

            
            </Navbar>  
            <div className="row" style={{marginLeft: '40vh', marginTop: '10vh'}}>
  <div className="column">
    <img src="https://res.cloudinary.com/dbppwwkeb/image/upload/v1616627812/chunin/image12_l7znce.png" />
  </div>
  <div className="column" style={{marginLeft: '10vh'}}>
    <h1> At the Going Down of the Sun</h1>
    <a style={{fontSize: '5vh', color: 'gray'}}>Maruis Oelsching</a><br />
    <a><b>Bororrwing Detail</b></a><br />
    <table className="table">
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>Yunianto</td>
        </tr>
        <tr>
          <th scope="row">Date End</th>
          <td>21 March 2021</td>
        </tr>
        <tr>
          <th scope="row">Note</th>
          <td>hahhaha wkwkw</td>
        </tr>
      </tbody>
    </table>
    <button type="button" className="btn btn-success" style={{borderRadius: 20, width: '15vh'}}>Accept</button>
    <button type="button" className="btn btn-danger" style={{borderRadius: 20, width: '15vh'}}>Reject</button>
  </div>
</div>


            </>
        )
    }
}
