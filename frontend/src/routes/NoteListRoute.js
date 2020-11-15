import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesList from "../containers/NotesList";
import { fetchList } from "../state/actions/conosActions";

const ListadoConosRuta = () => {
  const centrales = useSelector((state) => state.centrales);
  const dispatch = useDispatch();

  useEffect(() => {
    window.centralesInfo.forEach(({ ip, nombre }) => {
      dispatch(fetchList(ip, nombre));
    });
  }, []);

  return (
    <div>
      <NotesList />
      ;
    </div>
  );
};

export default ListadoConosRuta;
