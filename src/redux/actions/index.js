export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const GET_COMPANY = "GET_COMPANY";

export const addToFavoritesAction = (company) => ({ type: ADD_TO_FAVORITES, payload: company });

export const removeFromFavoritesAction = (company) => ({ type: REMOVE_FROM_FAVORITES, payload: company });

export const getCompanyAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_COMPANY, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
