export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const GET_COMPANY = "GET_COMPANY";

export const addToFavoritesAction = (data) => ({ type: ADD_TO_FAVORITES, payload: data });

export const removeFromFavoritesAction = (index) => ({ type: REMOVE_FROM_FAVORITES, payload: index });

export const getCompanyAction = (query) => {
  return async (dispatch, getState) => {
    console.log("GET STATE", getState());
    try {
      let response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + query + "&limit=20");
      if (response.ok) {
        let fetchedCompany = await response.json();
        dispatch({ type: GET_COMPANY, payload: fetchedCompany });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
