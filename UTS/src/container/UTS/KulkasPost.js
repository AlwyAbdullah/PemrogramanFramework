import React, {Component} from "react";
import Kulkas from "./Kulkas";

class KulkasPost extends Component{
    state = {                   //Komponen state dari react untuk statefull Component
        listKulkas: []       //variable array yang digunakan untuk menyimpan data API
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/kulkas') // alamat URL API yang ingin diambil datanya
            .then(Response => Response.json()) // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API dimasukkan ke listMahasiswa
                this.setState({
                    listKulkas: jsonHasilAmbilDariAPI
                })
            }) 
    }

    componentDidMount() {
        this.ambilDataDariServerAPI();
    }

    handleAddToCart = (data) => {
        fetch(`http://localhost:3001/kulkas/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataKulkas = { ...this.state.insertKeranjang };
                dataKulkas["id"] = res["id"];
                dataKulkas["image"] = res["image"];
                dataKulkas["nama"] = res["nama"];
                dataKulkas["harga"] = res["harga"];
                dataKulkas["stok"] = res["stok"];
                dataKulkas["qty"] = 1;
                this.setState({
                    insertKeranjang: dataKulkas
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            });
    }

    handleCekKeranjang = (data) => {
        fetch(`http://localhost:3003/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3003/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                image: res["image"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3003/keranjang', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang) // Kirimkan ke body request untuk data kulkas yang akan ditambahkan
        })
            .then(response => {
                this.ambilDataDariServerAPI()
            });
    }
    
    render(){
        return(
            <div className="container post-mahasiswa mt-3 mb-3">
                <h2 className="text-center">Daftar Kulkas</h2>
                <div className="row justify-content-center">
                    {
                        this.state.listKulkas.map(kulkas => {
                            return (
                                <Kulkas 
                                    key={kulkas.id} 
                                    idKulkas={kulkas.id} 
                                    image={kulkas.image} 
                                    harga={kulkas.harga} 
                                    nama={kulkas.nama} 
                                    stok={kulkas.stok}
                                    addKeranjang={this.handleAddToCart} /> 
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default KulkasPost;