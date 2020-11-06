import { fetchConoAPI, fetchNoteListAPI } from "../../api/notelist/notelistAPI";
import {
  CLEAN_ERRMSG_LIST,
  FETCH_CONO_FULFILL,
  FETCH_CONO_PENDING,
  FETCH_CONO_REJECT,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
} from "./constants";

export const fetchList = (ip) => async (dispatch) => {
  dispatch({ type: FETCH_LIST_PENDING });
  try {
    let res = await fetchNoteListAPI(ip);
    window.centralesInfo.map(({ nombre }, index) => res.centralNombre = ({ ...res[index], nombre }));
    dispatch({ type: FETCH_LIST_FULFILL, payload: res });
    dispatch({ type: FETCH_LIST_REJECT, payload: res.message });
  } catch (error) {
    dispatch({ type: FETCH_LIST_REJECT, payload: error.message });
  }
};

export const fetchCono = (ip) => async (dispatch) => {
  dispatch({ type: FETCH_CONO_PENDING });
  try {
    let res = await fetchConoAPI(ip);
    window.centralesInfo.map(({ nombre }, index) => res.centralNombre = ({ ...res[index], nombre }));
    console.log(res.conos)
    dispatch({ type: FETCH_CONO_FULFILL, payload: res.conos });
    dispatch({ type: FETCH_CONO_REJECT, payload: res.message });
  } catch (error) {
    dispatch({ type: FETCH_CONO_REJECT, payload: error.message });
  }
};

export const cleanErrorMsgList = () => {
  return { type: CLEAN_ERRMSG_LIST };
};
