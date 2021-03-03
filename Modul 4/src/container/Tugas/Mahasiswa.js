import React from "react";

const Mahasiswa = (props) => {
    return (
        <div className="col-lg-4 col-sm-6 portofolio-item mt-4">
            <div className="card h-100">
                <img src="http://placeimg.com/640/480/animals" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                <div className="card-body">
                    <h4 className="card-title w-75 float-left">{props.nama}</h4>
                    <button className="btn btn-md btn-danger mb-3" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                    <br/>
                    <hr/>
                    <p className="card-text">Nim        : {props.nim}</p>
                    <p className="card-text">Alamat     : {props.alamat}</p>
                    <p className="card-text">Hp         : {props.hp}</p>
                    <p className="card-text">Angkatan   : {props.angkatan}</p>
                    <p className="card-text">Status     : {props.status}</p>
                </div>
            </div>
        </div>
    )
}

export default Mahasiswa;
