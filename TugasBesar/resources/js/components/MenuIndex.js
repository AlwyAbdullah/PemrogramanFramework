import axios from 'axios'
import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { FaTrash, FaEdit, FaDesktop, FaPlusSquare } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel';
import  back1 from '../../../public/img/background.jpg';
import  back2 from '../../../public/img/background2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../../../public/css/carousel.css";
import NumberFormat from 'react-number-format';
 
class MenuIndex extends Component {
     
    constructor () {
        super()
        this.state = {
            menus: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
        }
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    componentDidMount () {
        axios.get('/api/menus').then(response => {
            this.setState({
                menus: response.data
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
        axios.delete(`/api/menu/delete/${id}`).then(response => {
            var msg = response.data.success;
            if(msg == true){
                this.hideAlert();
                this.goToHome();
            }
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
                Deleted menu successfully
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
 
    render () {
        const { menus } = this.state
        return (
        <div>
            <Carousel showThumbs={false}>
                <div>
                    <img src={back1} className="carousel-item"/>
                    <p className="legend">Tasty</p>
                </div>
                <div>
                    <img src={back2} className="carousel-item"/>
                    <p className="legend">Fresh</p>
                </div>
            </Carousel>
            <div className="container">

                <h1 className="my-5 text-center">Welcome to Food Hunter</h1>

                <h2 className="text-center">Menu</h2>
                <br />
                <Link className="btn btn-success btn-block mb-4" to='/create'>
                    Tambah Menu 
                </Link>
                
                <div className="row">
                    {menus.map((menu, i) => (
                        <div className="col-lg-4 col-sm-6 portfolio-item mb-4" key={i}>
                            <div className="card h-100 bg-l bg-light">
                                <img className="card-img-top" src={menu.gambar} style={{maxHeight: '400px'}} />
                                <div className="card-body">
                                    <h4 className="card-title">{menu.nama}</h4>
                                    <h4 className="card-title">harga : <NumberFormat value={menu.harga} thousandSeparator={true} prefix={'Rp'} displayType={'text'}/></h4>
                                    <hr />
                                    <p className="card-text">{menu.deskripsi}</p>
                                    <br />
                                    <div className="btn-group">
                                        <Link
                                            className='btn btn-primary'
                                            to={`/menu/${menu.id}`}
                                            ><FaDesktop />
                                        </Link>
                                        <Link
                                            className='btn btn-warning'
                                            to={`/menu/edit/${menu.id}`}
                                            ><FaEdit />
                                        </Link>
                                        <button
                                                className='btn btn-danger'
                                                onClick={() => this.confirmDelete(menu.id)}
                                                ><FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {this.state.alert}
        </div>
        )
    }
}
 
export default MenuIndex;