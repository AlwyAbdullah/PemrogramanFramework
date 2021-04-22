import React, {Component} from "react";
import Mahasiswa from "../Tugas/Mahasiswa";
import API from '../../services';

class MahasiswaPost extends Component{
    state = {                   //Komponen state dari react untuk statefull Component
        listMahasiswa: [],        //variable array yang digunakan untuk menyimpan data API
        insertMahasiswa:{
            id:0,
            nim:0,
            nama:"",
            alamat: "",
            hp: "",
            angkatan:"",
            status:""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsMahasiswa().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
        // fetch('http://localhost:3001/mahasiswa') // alamat URL API yang ingin diambil datanya
        //     .then(Response => Response.json()) // ubah response data dari URL API menjadi sebuah data json
        //     .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API dimasukkan ke listMahasiswa
        //         this.setState({
        //             listMahasiswa: jsonHasilAmbilDariAPI
        //         })
        //     }) 
    }

    componentDidMount() {
        this.ambilDataDariServerAPI();
    }

    handleHapusMahasiswa = (data) => {
        API.deleteNewsMahasiswa(data)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
        // fetch(`http://localhost:3001/mahasiswa/${data}`, {method:'DELETE'}) // Alamat url API yang ingin dihapus datanya
        //     .then(res => {
        //         this.ambilDataDariServerAPI()
        //     })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        formInsertMahasiswa[event.target.name] = event.target.value; // menyimpan data onchange ke form sesuai dengan target yang diisi
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        API.postNewsMahasiswa(this.state.insertMahasiswa)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
        // fetch('http://localhost:3001/mahasiswa', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.insertMahasiswa) // Kirimkan ke body request untuk data mahasiswa yang akan ditambahkan
        // })
        //     .then(response => {
        //         this.ambilDataDariServerAPI()
        //     });
    }
    
    render(){
        return(
            <div className="container post-mahasiswa mt-3">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">Nim</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="nim" name="nim" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">Hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2 className="text-center">Daftar Mahasiswa</h2>
                <div className="row">
                    {
                        this.state.listMahasiswa.map(mahasiswa => {
                            return <Mahasiswa key={mahasiswa.id} idMahasiswa={mahasiswa.id} nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MahasiswaPost;