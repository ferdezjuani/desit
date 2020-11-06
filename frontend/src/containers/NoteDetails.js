import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

function NoteDetails() {
  const currentCentral = useSelector((state) => {
    return state.centrales;
  });
  console.log(currentCentral);

  return (
    <>
      <Navbar title="DETALLES" />

      {currentCentral.currentEntity.map((cono) => (
            <div className="faq__content">
              <Table
                striped
                bordered
                variant="light"
                responsive="sm"
                size="lg"
                style={{
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <thead key={cono}>
                  <tr>
                    <th>idComunicador</th>
                    <th>IMEI</th>
                    <th>Descripcion</th>
                    <th>codPanel</th>
                    <th>idMesh</th>
                  </tr>
                </thead>
                <tbody key={cono.id}>
                  <td>{cono.idComunicador}</td>
                  <td>{cono.idMesh}</td>
                  <td>{cono.descripcion}</td>
                  <td>{cono.codPanel}</td>
                  <td>{cono.idMesh}</td>
                </tbody>
              </Table>
            </div>
          ))}
    </>
  );
}

export default NoteDetails;
