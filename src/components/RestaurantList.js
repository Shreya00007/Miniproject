import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';


class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:8000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
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
                                      {/*  <th>Create</th> */}

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