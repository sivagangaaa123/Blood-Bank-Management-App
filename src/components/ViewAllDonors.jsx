import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllDonors = () => {
  const [data, changeData] = useState([])

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/donors ")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <NavigationBar/>
      <h1><center>View All Donors</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Donor Name </th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>City</th> 
                  <th>Weight</th>
                  <th>Last Donation Date</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.donor_name}</td>
                    <td>{value.age}</td>
                    <td>{value.gender}</td>
                    <td>{value.blood_group}</td>
                    <td>{value.phone}</td>
                    <td>{value.email}</td>
                    <td>{value.weight_kg}</td>
                    <td>{value.last_donation_date}</td>
                   
                    <td>
                      <button className="btn btn-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllDonors