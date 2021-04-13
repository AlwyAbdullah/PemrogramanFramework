import React, {Component} from "react";
import './BlogPost.css';
import Post from "../BlogPost/Post";
import API from "../../services";

class BlogPost extends Component{
    state = {                   //Komponen state dari react untuk statefull Component
        listArtikel: [],        //variable array yang digunakan untuk menyimpan data API
        insertArtikel:{
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
        // fetch('http://localhost:3001/posts?_sort=id&_order=desc') // alamat URL API yang ingin diambil datanya
        //     .then(Response => Response.json()) // ubah response data dari URL API menjadi sebuah data json
        //     .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API dimasukkan ke listArtikel
        //         this.setState({
        //             listArtikel: jsonHasilAmbilDariAPI
        //         })
        //     }) 
    }

    componentDidMount() {
        this.ambilDataDariServerAPI();
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
        // fetch(`http://localhost:3001/posts/${data}`, {method:'DELETE'}) // Alamat url API yang ingin dihapus datanya
        //     .then(res => {
        //         this.ambilDataDariServerAPI();
        //     })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value; // menyimpan data onchange ke form sesuai dengan target yang diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertArtikel)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
        // fetch('http://localhost:3001/posts', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.insertArtikel) // Kirimkan ke body request untuk data artikel yang akan ditambahkan
        // })
        //     .then((res) => {
        //         this.ambilDataDariServerAPI();
        //     });
    }
    
    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;