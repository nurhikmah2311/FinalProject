import React from 'react';
import TabelPinjam from './TabelPinjam'
import FormPinjam from './FormPinjam'
import Navbar from './Navbar';
// import { Row, Col } from 'react-bootstrap'

export default class Pinjam extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       pinjams : [],
       npinjam : "",
       nbuku : "",
       tglkeluar : "",
       tglmasuk : "",
       id : "",

    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.id === ""){
      this.setState({
        pinjams: [
          ...this.state.pinjams,
          {
            id: this.state.pinjams.length + 1,
            npinjam: this.state.npinjam,
            nbuku: this.state.nbuku,
            tglkeluar: this.state.tglkeluar,
            tglmasuk: this.state.tglmasuk
          },
        ],
      });
    } else {
      const TidakPinjamBuku = this.state.pinjams
      .filter((pinjam) => pinjam.id !== this.state.id)
      .map((filterBuku) => {
        return filterBuku
      });

      this.setState({
        pinjams: [
          ...TidakPinjamBuku,
          {
            id: this.state.pinjams.length + 1,
            npinjam: this.state.npinjam,
            nbuku: this.state.nbuku,
            tglkeluar: this.state.tglkeluar,
            tglmasuk: this.state.tglmasuk
          },
        ],
      });
    }

    this.setState({
      npinjam : "",
      nbuku : "",
      tglkeluar : "",
      tglmasuk : "",
      id : "",
    })
  }
  
  editData = (id) => {
    const bukuYangDiPinjam = this.state.pinjams
    .filter((pinjam) => pinjam.id === id)
    .map((filterPinjam) => {
      return filterPinjam
    })
    this.setState({
      npinjam : bukuYangDiPinjam[0].npinjam,
      nbuku : bukuYangDiPinjam[0].nbuku,
      tglkeluar : bukuYangDiPinjam[0].tglkeluar,
      tglmasuk : bukuYangDiPinjam[0].tglmasuk,
      id : bukuYangDiPinjam[0].id,

    })
  }

  hapusData = (id) => {
    const pinjamBaru = this.state.pinjams
    .filter((pinjam) => pinjam.id !== id)
    .map((filterPinjam) => {
      return filterPinjam
    })

    this.setState({
      pinjams : pinjamBaru
    })
  }

  render() {
    return (
        <div><Navbar />
        <div className="container mt-5">
                    <h4>Peminjaman Buku</h4>
                    <hr />
        
        <FormPinjam {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        
        <TabelPinjam pinjams={this.state.pinjams} editData={this.editData} hapusData={this.hapusData} />
        </div>
        </div>
        )
  }
}

