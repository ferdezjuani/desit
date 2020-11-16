import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SpinnerLoad from "../components/SpinnerLoad";
import "./NotesList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function NotesList() {
  const centrales = useSelector((state) => {
    return state.centrales;
  });

  return (
    <>
      <Navbar title="LISTADO CENTRALES" />
      {centrales.fetchListErrorMessage !== null ? (
        <details open>
          <summary style={{ color: "red" }}>
            {centrales.fetchListErrorMessage}
          </summary>
        </details>
      ) : (
        centrales.entities.map((central) => (
          <details open>
            <summary>
              Central: {central.nombreCentral} - Fecha de actualizacion:{" "}
              {central.date}
            </summary>
            {central.conos === undefined ? (
              <SpinnerLoad />
            ) : (
              central.conos.map((cono, myKey) => (
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
                    <thead key={cono.idMesh}>
                      <tr>
                        <th>idComunicador</th>
                        <th>IMEI</th>
                        <th>Descripcion</th>
                        <th>codPanel</th>
                        <th>idMesh</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody key={cono.id}>
                      <tr>
                        <td>{cono.idComunicador}</td>
                        <td>{cono.idMesh}</td>
                        <td>{cono.descripcion}</td>
                        <td>{cono.codPanel}</td>
                        <td>{cono.idMesh}</td>
                        <td>
                          <Link
                            to={`/central/${central.nombreCentral}/${cono.id}`}
                          >
                            <VisibilityIcon className="view_icon" />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              ))
            )}
          </details>
        ))
      )}
    </>
  );
}

export default NotesList;
