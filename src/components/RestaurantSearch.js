import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Restrosearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData:false
        }
    }
    search(key) {
        console.warn(key)
        fetch("http://localhost:8000/Restro?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                this.setState({ searchData: resp })
                if(resp.length>0){
                    this.setState({searchData:resp})
                    this.setState({noData:false})
                }
                else{
                    this.setState({noData:true,searchData:null})
                }
            })
        })
       
    }
    render() {
        return (
            <div>
                <h1>Restrosearch</h1>
                <input type="text" onChange={(event) => this.search(event.target.value)} />

                <div>
                    {
                        this.state.searchData ?
                            <div>
                                {
                                    this.state.searchData.map((item) =>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Rating</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.rating}</td>
                                                    <td>{item.address}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        
                                    )
                                }
                            </div>
                            : ""
                    }
                   {
                       this.state.noData?<h3>No Result Found</h3>:null
                   }
                </div>
            </div>
        );
    }
}

export default Restrosearch;