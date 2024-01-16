import React from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TabelBuku({bukus, editData, hapusData}) {
  return (
    <Col sm={12} className="ml-auto">
    <Table striped bordered hover variant="light" className='mt-4'>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Buku</th>
          <th>Author</th>
          <th>Deskripsi</th>
          <th>Harga Buku</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {bukus.map((buku, index) => {
          return(
          <tr key={index} className="table-primary">
            <td>{index + 1}</td>
            <td>{buku.nama}</td>
            <td>{buku.author}</td>
            <td>{buku.deskripsi}</td>
            <td>{buku.harga}</td>
            <td>
              <button className="btn btn-warning mr-1" onClick={() => editData(buku.id) }><FaRegEdit /></button>
              <button className="btn btn-danger mr-1" onClick={() => hapusData(buku.id) }><MdDelete /></button>
            </td>
          </tr>
          );
        })}
    
      </tbody>
    </Table>
    </Col>
  );
}

export default TabelBuku;