import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData()
    {
        fetch("http://localhost:8000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
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
               this.getData()
           })
        })

    }
    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
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
                                        this.state.list.map((item, i) =>
                                         /* <div className="list-wrapper">
                                            <span>{item.name}</span>
                                            <span>{item.email}</span>
                                            <span>{item.rating}</span>
                                            <span>{item.address}</span>
                                        </div> */
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
                        : <p>Please Wait....</p>
                }
            </div>
        );
    }
}

export default RestaurantList;