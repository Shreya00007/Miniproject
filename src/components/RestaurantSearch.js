import React, { Component } from 'react';
import "./RestaurantSearch.css";
import { Table,Form,Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';



class Restrosearch extends Component {
    constructor()
        {
            super()
            this.state={
             searchData:null,
             noData:false,
             lastSearch:"",
            }
        }
    search(key)
    {
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:8000/restaurant?q="+key).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})
                }
                // this.setState({searchData:resp})
                
            })
        })
    }
    delete(id)
    {
        fetch('http://localhost:8000/restaurant/'+id,
        {
            method:"DELETE",
            // headers:{
            //     'Content-Type':'application/JSON'
            // },
            
        }).then((result)=>{
           result.json().then((resp)=>{
               alert("Restaurant has been deleted")
               this.search(this.state.lastSearch)
           })
        })

    }
    render() {
        return (
            <Container>
                <h1>Restaurant Search</h1>
               
               <Form.Control type="text" onChange={(event)=>this.search(event.target.value)} placeholder="Search Restaurant" />
               <div>
               {
               this.state.searchData?
               <div>
               <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Location</th>
                                        <th>Operation</th> 

                                    </tr>
                                </thead>
                                <tbody>
               {
                   this.state.searchData.map((item)=>
                   <tr>
                   <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.rating}</td>
                   <td>{item.address}</td>
                   <span onClick={()=> this.delete(item.id)}><DeleteForeverOutlinedIcon/></span>
                 {/*  <td><Link to={"/create/"+item.id}>Add</Link></td> */}
               </tr>
                   )
               }
               </tbody>
               </Table>
               </div>
               :""
               }
               {
                   this.state.noData?<h3>No Data Found</h3>:null
               }
               </div>

            </Container>
        );
    }
}

export default Restrosearch;