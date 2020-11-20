import {
  CLEAN_ERRMSG_LIST,
  FETCH_CONO_FULFILL,
  FETCH_CONO_PENDING,
  FETCH_CONO_REJECT,
  FETCH_LIST_FULFILL,
  FETCH_LIST_PENDING,
  FETCH_LIST_REJECT,
} from "../actions/constants";

const initialState = {
  isFetching: false,
  isGetting: false,
  currentCono: [],
  entities: [],
  fetchListErrorMessage: null,
  fetchCentralErrorMessage: null,
};

function ValidateCentral(state, action, isLoading) {
  const entities = [...state.entities];
  const central = entities.find((central) => {
    return central.nombreCentral === action.payload.nombreCentral;
  });

  if (central === undefined) {
    entities.push({
      ...action.payload,
      isFetching: isLoading,
      fetchCentralErrorMessage: null,
    });
  } else {
    let indexCentral = entities.indexOf(central);
    entities.splice(indexCentral, 1, {
      ...action.payload,
      isFetching: isLoading,
      fetchCentralErrorMessage: null,
    });
  }
  return entities;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_FULFILL:
      return {
        ...state,
        entities: ValidateCentral(state, action, false),
      };
    case FETCH_LIST_PENDING:
      return {
        ...state,
        isFetching: true,
        entities: ValidateCentral(state, action, true),
      };
    case FETCH_LIST_REJECT:
      return {
        ...state,
        isFetching: false,
        fetchListErrorMessage: null,
        fetchCentralErrorMessage: action.payload,
      };
    case FETCH_CONO_FULFILL:
      return {
        ...state,
        currentCono: action.payload,
        isGetting: false,
      };
    case FETCH_CONO_PENDING:
      return { ...state, isGetting: true };
    case FETCH_CONO_REJECT:
      return {
        ...state,
        isGetting: false,
        fetchConoErrorMessage: action.payload,
      };
    case CLEAN_ERRMSG_LIST:
      return { ...state, fetchListErrorMessage: null };
    default:
      return state;
  }
};
