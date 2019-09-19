import axios from 'axios'
import React, { Component } from 'react'

class DetailsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email_address: '',
      first_name: '',
      last_name: '',
      mobile_number: '',
      gender: '',
      date_of_birth: '',
      comments: '',
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
    this.handleHeaderClick = this.handleHeaderClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.parentGroup = ''
    this.nextGroup = ''

  }

  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewProject (event) {
    event.preventDefault()

    const { history } = this.props

    const project = {
      email_address: this.state.email_address,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      mobile_number: this.state.mobile_number,
      gender: this.state.gender,
      date_of_birth: this.state.date_of_birth,
      comments: this.state.comments
    }

    axios.post('/api/projects', project)
      .then(response => {
        // redirect to the homepage
        history.push('/')
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }

  handleHeaderClick (elem) {
    this.parentGroup = $(elem.target).parents(".section_group");

    if (!this.parentGroup.hasClass("active")) {
      $(".section_group").removeClass("active");
      this.parentGroup.addClass("active");
    }
  }

  handleNextClick (elem) {
    this.parentGroup = $(elem.target).parents(".section_group");
    this.nextGroup = this.parentGroup.next();

    $(".section_group").removeClass("active");
    this.nextGroup.addClass("active");
  }

  render () {
    return (
            <div className=''>
            <form onSubmit={this.handleCreateNewProject}>

            <div className='section_group active'>
              <div className='section_header' onClick={this.handleHeaderClick}>
                <div className='section_header_inner'>
                  Step 1: Your details
                </div>
              </div>
              <div className='section_body'>

                  <div className='row justify-content-center'>

                    <div className='col-md-4'>
                      <div className='form-group'>
                      <label htmlFor='first_name'>First Name</label>
                      <input
                        id='first_name'
                        type='text'
                        className={`form-control ${this.hasErrorFor('first_name') ? 'is-invalid' : ''}`}
                        name='first_name'
                        value={this.state.first_name}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('first_name')}
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email_address'>Email Address</label>
                      <input
                        id='email_address'
                        type='text'
                        className={`form-control ${this.hasErrorFor('email_address') ? 'is-invalid' : ''}`}
                        name='email_address'
                        value={this.state.email_address}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('email_address')}
                    </div>
                    </div>

                    <div className='col-md-4'>
                      <div className='form-group'>
                      <label htmlFor='first_name'>Last Name</label>
                      <input
                        id='last_name'
                        type='text'
                        className={`form-control ${this.hasErrorFor('last_name') ? 'is-invalid' : ''}`}
                        name='last_name'
                        value={this.state.last_name}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('last_name')}
                    </div>
                    </div>

                    <div className='col-md-4'></div>

                  </div>

                    <div className='row justify-content-center'>

                      <div className='col-md-4'></div>

                      <div className='col-md-4'></div>

                      <div className='col-md-4'>
                        <button className='btn btn-secondary float-right' type='button' onClick={this.handleNextClick}>Next ></button>
                      </div>

                    </div>

                    </div>
                  </div>

                  <div className='section_group'>
                    <div className='section_header' onClick={this.handleHeaderClick}>
                    <div className='section_header_inner'>
                      Step 2: More comments
                      </div>
                    </div>
                    <div className='section_body'>

                      <div className='row justify-content-center'>

                        <div className='col-md-4'>
                          <div className='form-group'>
                            <label htmlFor='mobile_number'>Mobile Number</label>
                            <input
                              id='mobile_number'
                              type='text'
                              className={`form-control ${this.hasErrorFor('mobile_number') ? 'is-invalid' : ''}`}
                              name='mobile_number'
                              value={this.state.mobile_number}
                              onChange={this.handleFieldChange}
                            />
                            {this.renderErrorFor('mobile_number')}
                          </div>
                          <div className='form-group'>
                            <label htmlFor='date_of_birth'>Date Of Birth</label>
                            <input
                              id='date_of_birth'
                              type='text'
                              className={`form-control ${this.hasErrorFor('date_of_birth') ? 'is-invalid' : ''}`}
                              name='date_of_birth'
                              value={this.state.date_of_birth}
                              onChange={this.handleFieldChange}
                            />
                            {this.renderErrorFor('date_of_birth')}
                          </div>
                        </div>

                        <div className='col-md-4'>
                          <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <select id='gender' name='gender' value={this.state.gender} onChange={this.handleFieldChange} className={`form-control ${this.hasErrorFor('mobile_number') ? 'is-invalid' : ''}`}>
                              <option value="">Please select...</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                            {this.renderErrorFor('gender')}
                          </div>
                        </div>

                        <div className='col-md-4'></div>

                      </div>

                        <div className='row justify-content-center'>

                        <div className='col-md-4'></div>

                        <div className='col-md-4'></div>

                        <div className='col-md-4'>
                          <button className='btn btn-secondary float-right' type='button' onClick={this.handleNextClick}>Next ></button>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className='section_group'>
                    <div className='section_header' onClick={this.handleHeaderClick}>
                      <div className='section_header_inner'>
                        Step 3: Final comments
                      </div>
                    </div>
                    <div className='section_body'>

                      <div className='row justify-content-center'>

                        <div className='col-md-8'>
                          <div className='form-group'>
                            <label htmlFor='comments'>Comments</label>
                            <textarea
                              id='comments'
                              className={`form-control ${this.hasErrorFor('comments') ? 'is-invalid' : ''}`}
                              name='comments'
                              rows='10'
                              value={this.state.comments}
                              onChange={this.handleFieldChange}
                            />
                            {this.renderErrorFor('comments')}
                          </div>
                        </div>

                        <div className='col-md-4'></div>

                      </div>

                      <div className='row justify-content-center'>

                      <div className='col-md-8'></div>

                      <div className='col-md-4'>
                        <button className='btn btn-primary float-right' type='submit'>Submit ></button>
                      </div>

                    </div>

                </div>
              </div>

            </form>
          </div>
    )
  }
}

export default DetailsForm
