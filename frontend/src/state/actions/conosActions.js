import { fetchNoteListAPI, fetchConoAPI } from "../../api/notelist/notelistAPI";
import {
  CLEAN_ERRMSG_LIST,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
  FETCH_CONO_PENDING,
  FETCH_CONO_REJECT,
  FETCH_CONO_FULFILL,
} from "./constants";

export const fetchList = (ip, central) => async (dispatch) => {
  dispatch({ type: FETCH_LIST_PENDING, payload: {nombreCentral: central} });
  try {
    let res = await fetchNoteListAPI(ip);
    res.nombreCentral = central
    console.log(res)
    dispatch({ type: FETCH_LIST_FULFILL, payload: res });
  } catch (error) {
    dispatch({ type: FETCH_LIST_REJECT, payload: error.message });
  }
};

export const fetchCono = (ip) => async (dispatch) => {
  dispatch({ type: FETCH_CONO_PENDING });
  try {
    let res = await fetchConoAPI(ip);
    dispatch({ type: FETCH_CONO_FULFILL, payload: res.conos });
  } catch (error) {
    dispatch({ type: FETCH_CONO_REJECT, payload: error.message });
  }
};

export const cleanErrorMsgList = () => {
  return { type: CLEAN_ERRMSG_LIST };
};
