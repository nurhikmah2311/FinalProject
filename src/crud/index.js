import React from 'react'
import Navbar from './Navbar'
// import TabelBuku from './TabelBuku'
// import FormBuku from './FormBuku'
import Buku from './Buku'
// import Pinjam from './Pinjam'

export default class Crud extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
        <Buku />
        </div>
      </div>
    )
  }
}
