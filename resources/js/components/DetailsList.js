import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DetailsList extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render () {
    const { projects } = this.state
    return (
    <div className='row justify-content-center'>
      <div className='col-md-12'>
        <div className=''>
          <div className='card-header'>All projects</div>
          <div className='card-body'>
            <Link className='btn btn-primary btn-sm mb-3' to='/create'>
              Create new project
            </Link>
            <table class="table table-hover">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">First Name</th>
			      <th scope="col">Last Name</th>
			      <th scope="col">Email Address</th>
			      <th scope="col">Mobile Number</th>
			      <th scope="col">Gender</th>
			      <th scope="col">Date Of Date</th>
			      <th scope="col">Comments</th>
			    </tr>
			  </thead>
			  <tbody>
			  {projects.map(project => (
			    <tr key={project.id}>
			      <th scope="row">{project.id}</th>
			      <td>{project.first_name}</td>
			      <td>{project.last_name}</td>
			      <td>{project.email_address}</td>
			      <td>{project.mobile_number}</td>
			      <td>{project.gender}</td>
			      <td>{project.date_of_birth}</td>
			      <td>{project.comments}</td>
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
}

export default DetailsList
