import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaBackward } from 'react-icons/fa'
import NumberFormat from 'react-number-format'

 
    class MenuShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
          menu: {}
        }
      }
 
      componentDidMount () {
 
        const menuId = this.props.match.params.id
 
        axios.get(`/api/menu/${menuId}`).then(response => {
          this.setState({
            menu: response.data
          })
        })
      }
 
      render () {
        const { menu } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Nama menu: {menu.nama}</div>
                  <div className='card-body'>
                    <p>{menu.deskripsi}</p>
                    <p>harga : <NumberFormat value={menu.harga} thousandSeparator={true} prefix={'Rp'} displayType={'text'}/></p>
                    <img src={menu.gambar} style={{maxWidth:'300px', maxHeight:'300px'}}/>
                    <br />
                    <br />
                    <Link
                        className='btn btn-primary'
                        to={`/`}
                        ><FaBackward />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
 
export default MenuShow