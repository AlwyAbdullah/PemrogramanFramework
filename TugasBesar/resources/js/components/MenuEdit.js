import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
    class MenuEdit extends Component {
      constructor (props) {
        super(props)
        this.state = {
          nama: '',
          harga: '',
          gambar: '',
          deskripsi: '',
          alert: null,
          message:'',
          errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleUpdateMenu = this.handleUpdateMenu.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }
 
      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
 
      componentDidMount () {
 
        const menuId = this.props.match.params.id
 
        axios.get(`/api/menu/edit/${menuId}`).then(response => {
          this.setState({
            nama: response.data.nama,
            harga: response.data.harga,
            gambar: response.data.gambar,
            deskripsi: response.data.deskripsi,
          })
        })
      }
 
      goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                {this.state.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
      }
 
      onSuccess() {
        this.props.history.push('/');
      }
 
      hideAlert() {
        this.setState({
          alert: null
        });
      }
 
      handleUpdateMenu (event) {
        event.preventDefault()
 
        const menu = {
          nama: this.state.nama,
          harga: this.state.harga,
          gambar: this.state.gambar,
          deskripsi: this.state.deskripsi
        }
 
        const menuId = this.props.match.params.id
 
        axios.put(`/api/menu/${menuId}`, menu)
          .then(response => {
            // redirect to the homepage
            var msg = response.data.success;
            if(msg == true){
                this.setState({
                    message: response.data.message
                })
                return this.goToHome();
            }
 
          });
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
 
      render () {
        const { menu } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Update project</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleUpdateMenu}>
                    <div className='form-group'>
                        <label htmlFor='nama'>Nama Makanan</label>
                        <input
                          id='nama'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                          name='nama'
                          value={this.state.nama}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='harga'>Harga Makanan</label>
                        <input
                          id='harga'
                          type='number'
                          className={`form-control ${this.hasErrorFor('harga') ? 'is-invalid' : ''}`}
                          name='harga'
                          value={this.state.harga}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('harga')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='gambar'>Gambar</label>
                        <input
                          id='gambar'
                          type='text'
                          className={`form-control ${this.hasErrorFor('gambar') ? 'is-invalid' : ''}`}
                          name='gambar'
                          value={this.state.gambar}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('gambar')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='deskripsi'>Deskripsi Gambar</label>
                        <textarea
                          id='deskripsi'
                          className={`form-control ${this.hasErrorFor('deskripsi') ? 'is-invalid' : ''}`}
                          name='deskripsi'
                          rows='10'
                          value={this.state.deskripsi}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('deskripsi')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Update</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
export default MenuEdit;