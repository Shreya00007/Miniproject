import React, { Component } from 'react';
import "./RestaurantCreate.css";

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null,
        }
    }
    create() {
        fetch('http://localhost:8000/restaurant', {
            method: "Post",
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been added")
            })
        })
    }
    render() {
        return (
            <div>
                <form>
                    <h1>Restaurant Create</h1>
                    <div>
                        <input className="form-control" onChange={(event) => { this.setState({ name: event.target.value }) }}
                            placeholder="Restaurant Name" /> <br />
                        <input className="form-control" onChange={(event) => { this.setState({ email: event.target.value }) }}
                            placeholder="Restaurant Email" /> <br />
                        <input className="form-control" onChange={(event) => { this.setState({ rating: event.target.value }) }}
                            placeholder="Restaurant Rating" /> <br />
                        <input className="form-control" onChange={(event) => { this.setState({ address: event.target.value }) }}
                            placeholder="Restaurant Address" /> <br />
                        <button className="btn btn-success" onClick={() => { this.create() }}>Add Restaurant</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RestaurantCreate;