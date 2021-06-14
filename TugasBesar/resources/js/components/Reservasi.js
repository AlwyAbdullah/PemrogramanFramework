import axios from 'axios'
import React, { Component } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import {FaTrash} from 'react-icons/fa'; 
 
class Reservasi extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            nama: '',
            kursi: '',
            tanggal: '',
            reservasis: [],
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewReservation = this.handleCreateNewReservation.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount () {
      axios.get('/api/reservasi').then(response => {
          this.setState({
              reservasis: response.data
          })
      })
    }

    confirmDelete(id){
      const getAlert = () => (
          <SweetAlert
              warning
              showCancel
              confirmBtnText="Hapus Deh"
              cancelBtnText="Nggak Jadi"
              confirmBtnBsStyle="default"
              cancelBtnBsStyle="danger"
              title="Tunggu ..."
              onConfirm={() => this.deleteItem(id)}
              onCancel={() => this.hideAlert()}
              focusCancelBtn
              >
              Kalau udah dihapus, nggak bakal balik lagi.
          </SweetAlert>
      );
      this.setState({
          alert: getAlert()
      });
  }

  deleteItem(id) {
      axios.delete(`/api/reservasi/delete/${id}`).then(response => {
          var msg = response.data.success;
          if(msg == true){
              this.hideAlert();
              this.goToHomeDelete();
          }
      })
  }

  goToHomeDelete(){
      const getAlert = () => (
          <SweetAlert
              success
              title="Success!"
              onConfirm={() => this.onSuccess() }
              onCancel={this.hideAlert()}
              timeout={2000}
              confirmBtnText="Oke Siap"
              >
              Deleted Reservasi successfully
          </SweetAlert>
      );
      this.setState({
          alert: getAlert()
      });
  }

    onSuccess(){
        this.componentDidMount();
        this.hideAlert();
    }
 
    goToHomeCreate(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Created reservation successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    // onSuccess() {
    //     this.props.history.push('/reservasi');
    // }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewReservation (event) {
        event.preventDefault()
        const reservation = {
          nama: this.state.nama,
          kursi: this.state.kursi,
          tanggal: this.state.tanggal
        }
        axios.post('/api/reservasi/store', reservation).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHomeCreate();
            }
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
 
    render () {
      const { reservasis } = this.state
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Make a Reservation</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewReservation}>
                      <div className='form-group'>
                        <label htmlFor='nama'>Nama</label>
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
                        <label htmlFor='kursi'>Kursi</label>
                        <input
                          id='kursi'
                          type='number'
                          className={`form-control ${this.hasErrorFor('kursi') ? 'is-invalid' : ''}`}
                          name='kursi'
                          value={this.state.kursi}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('kursi')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tanggal'>Date</label>
                        <input
                          id='tanggal'
                          type='date'
                          className={`form-control ${this.hasErrorFor('gambar') ? 'is-invalid' : ''}`}
                          name='tanggal'
                          value={this.state.tanggal}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tanggal')}
                      </div>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-responsive" style={{marginTop: "30px"}}>
              <table className="table table-bordered table-hover table-striped">
                  <thead>
                      <tr>
                          <th width="50" className="text-center">No</th>
                          <th>Name</th>
                          <th>Seat</th>
                          <th>Date</th>
                          <th width="200" className="text-center">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {reservasis.map((reservasi, i) => (
                      <tr key={i}>
                          <td width="50" className="text-center">{i + 1}</td>
                          <td>{reservasi.nama}</td>
                          <td>{reservasi.kursi}</td>
                          <td>{reservasi.tanggal}</td>
                          <td width="200" className="text-center">
                              <div className="btn-group">
                              <button
                                  className='btn btn-danger'
                                  onClick={() => this.confirmDelete(reservasi.id)}
                                  ><FaTrash />
                              </button>
                              </div>
                          </td>
                      </tr>
                      ))}
                  </tbody>
              </table>
              {this.state.alert}
          </div>

        </div>
        )
    }
}
export default Reservasi;