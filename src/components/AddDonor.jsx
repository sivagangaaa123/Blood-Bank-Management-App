import React from 'react'
import NavigationBar from './NavigationBar'

const AddDonor = () => {
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
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Age</label>
                            <input type="number" className="form-control" min="18" max="65" required  />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Gender</label>
                            <select name="" id="" className="form-control">
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Other</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Blood Group</label>
                             <select name="" id="" className="form-control">
                                <option value="">A+</option>
                                <option value="">A-</option>
                                <option value="">B+</option>
                                <option value="">B-</option>
                                <option value="">AB+</option>
                                <option value="">AB-</option>
                                <option value="">O+</option>
                                <option value="">O-</option>
                             </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">City</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Weight</label>
                            <input type="number" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Last Donation Date</label>
                            <input type="date" className="form-control" />

                        </div>
                        <div className="col-12 text-center ">
                            <button className="btn btn-success">Submit</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDonor