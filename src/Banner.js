import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="text-banner">
                <p>Solusi terbaik untuk</p>
                <p>mengelola usaha</p>
                <p>kamu!</p>
                <div className="button-banner">
                <button className="button-daftar">Daftar Sekarang</button><br></br>
                <button className="button-pelajari">Pelajari Dulu!</button>
                </div>
            </div>
        )
    }
}

