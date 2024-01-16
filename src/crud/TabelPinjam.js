import React from 'react';

import Table from 'react-bootstrap/Table';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TabelPinjam({pinjams, editData, hapusData}) {
  //Function to format date as "dd/MM/yyyy"
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <Table striped bordered hover variant="light" className='mt-4'>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Peminjam</th>
          <th>Nama Buku</th>
          <th>Tanggal Masuk</th>
          <th>Tanggal Keluar</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {pinjams.map((pinjam, index) => {
          return(
            <tr key={index} className="table-primary">
              <td>{index + 1}</td>
              <td>{pinjam.npinjam}</td>
              <td>{pinjam.nbuku}</td>
              <td>{formatDate(pinjam.tglkeluar)}</td>
              <td>{formatDate(pinjam.tglmasuk)}</td>
              <td>
                <button className='btn btn-warning' onClick={() => editData(pinjam.id) }><FaRegEdit /></button>
                <button className='btn btn-danger' onClick={() => hapusData(pinjam.id) }><MdDelete /></button>
              </td>
            </tr>
          )
        })}
    
      </tbody>
    </Table>
  );
}

export default TabelPinjam;