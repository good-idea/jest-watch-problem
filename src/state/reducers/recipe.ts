export interface RecipeReducer {
  recipe: any | null;
}

const initialState: RecipeReducer = {
  recipe: null
};

export default (
  state: RecipeReducer = initialState,
  action: any
): RecipeReducer => {
  switch (action.type) {
    case 'FETCH_RECIPE_FULFILLED':
      return { ...state, recipe: action.payload };
    default:
      return state;
  }
};
