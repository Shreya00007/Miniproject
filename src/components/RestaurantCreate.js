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
        var a1=document.getElementById("txtName").value;
        var a2=document.getElementById("txtRating").value;
        var a3=document.getElementById("txtAddress").value;
       
        if(a1=="")
        {
          alert('plz enter your restaurant name');
          a1.focus();
          return false;
        }
        else if(a2=="")
        {
          alert('plz enter your restaurant rating');
          a2.focus();
          return false;
        }
        else if(a3=="")
        {
          alert('plz enter your restaurant address');
          a3.focus();
          return false;
        }
        else
        {
           return true;
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

        

    
        
        
    }
    render() {
        return (
            <div>
                <form>
                    <h1>Restaurant Create</h1>
                    <div>
                        <input id="txtName" className="form-control" required onChange={(event) => { this.setState({ name: event.target.value }) }}
                            placeholder="Restaurant Name" /> <br />
                        {/* <input className="form-control" onChange={(event) => { this.setState({ email: event.target.value }) }}
                             placeholder="Restaurant Email" /> <br />*/}
                        <input id="txtRating" className="form-control" onChange={(event) => { this.setState({ rating: event.target.value }) }}
                            placeholder="Restaurant Rating" required /> <br />
                        <input id="txtAddress" className="form-control" onChange={(event) => { this.setState({ address: event.target.value }) }}
                            placeholder="Restaurant Address" required /> <br />
                        <button className="btn btn-success" onClick={() => {return this.create() }}>Add Restaurant</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RestaurantCreate;