import React from "react";
import {FaTrash} from 'react-icons/fa'

const Cart = (props) => {
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.id}</td>
            <td><img src={props.image} alt="Kulkas"/></td>
            <td>{props.nama}</td>
            <td>Rp. {props.harga}</td>
            <td>{props.qty}</td>
            <td>Rp. {props.harga * props.qty}</td>
            <td><button className="btn btn-danger" onClick={() => props.hapusCart(props.id)}><FaTrash /></button></td>
        </tr>
    )
}

export default Cart;
