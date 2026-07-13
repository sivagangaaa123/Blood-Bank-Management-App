import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddDonor = () => {
    const[input, changeInput]=useState({
         donor_name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    city: "",
    weight_kg: "",
    last_donation_date: ""
    })

    const inputhandler=(event)=>{
        changeInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const readValue= () =>{
        console.log(input)
        axios.post(" https://host-demo-app.onrender.com/api/add-donor",input).then(
            (Response) =>{
                console.log(Response.data)
                alert("Donor Added Successfully")
            }
        ).catch(
            (Error) =>{
                console.log(Error)
            }
        )
    }
  return (
    <div>
        <NavigationBar/>
        <h1><center>Add Donor</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Donor Name</label>
                            <input type="text" className="form-control" required 
                            name='donor_name'
                         value={input.donor_name}
                         onChange={inputhandler}/> 
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Age</label>
                            <input type="number" className="form-control" min="18" max="65" required 
                             name='age'
                         value={input.age}
                         onChange={inputhandler}
                          />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Gender</label>
                            <select id="" className="form-control"  
                            name='gender'
                         value={input.gender}
                         onChange={inputhandler} >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Blood Group</label>
                             <select id="" className="form-control" 
                              name='blood_group'
                         value={input.blood_group}
                         onChange={inputhandler} >
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                             </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" 
                            name='phone'
                         value={input.phone}
                         onChange={inputhandler} 
                            />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" 
                             name='email'
                         value={input.email}
                         onChange={inputhandler} 
                            />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">City</label>
                            <input type="text" className="form-control"
                            name='city'
                         value={input.city}
                         onChange={inputhandler} 
                             />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Weight</label>
                            <input type="number" className="form-control" 
                            name='weight_kg'
                         value={input.weight_kg}
                         onChange={inputhandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Last Donation Date</label>
                            <input type="date" className="form-control"
                            name='last_donation_date'
                         value={input.last_donation_date}
                         onChange={inputhandler}  />

                        </div>
                        <div className="col-12 text-center ">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
export default AddDonor