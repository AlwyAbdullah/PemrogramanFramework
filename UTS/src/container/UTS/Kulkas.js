import React from "react";
import {FaCartPlus} from 'react-icons/fa'

const Kulkas = (props) => {
    return (
        <div className="col-lg-4 col-sm-6 portofolio-item mt-4">
            <div className="card h-100">
                <img src={props.image} alt="Gambar Kulkas" className="card-img-top mh-100"/>
                <div className="card-body">
                    <h4 className="card-title mb-4">{props.nama}</h4>
                    <button className="btn btn-md btn-success btn-block" onClick={props.addKeranjang.bind(this, props.idKulkas)}><FaCartPlus /></button>
                    <br/>
                    <hr/>
                    <p className="card-text">Harga : Rp. {props.harga}</p>
                    <p className="card-text"> Stok : {props.stok} </p>
                </div>
            </div>
        </div>
    )
}

export default Kulkas;
