import { CREATE_CARD, DELETE_CARD } from "../card/cardWidget";
import initialState from "../../stores/initialState";

export const CREATE_CATEGORY = "category.create_category";
export const UPDATE_CATEGORY = "category.update_category";
export const DELETE_CATEGORY = "category.delete_category";
export const LIST_CATEGORY = "category.list_category";

export const createCategory = category => ({
  type: CREATE_CATEGORY,
  category
});

export const updateCategory = category => ({
  type: UPDATE_CATEGORY,
  category
});

export const deleteCategory = id => ({
  type: DELETE_CATEGORY,
  id
});

export const listCategory = () => ({
  type: LIST_CATEGORY
});

const reducer = (state = initialState.categories, action) => {
  let cloned = { ...state };
  let id;
  switch (action.type) {
    case CREATE_CARD:
      const cardId = action.card.id;
      const categoryId = action.card.category;
      cloned.byId[categoryId]["cards"] = [
        cardId,
        ...cloned.byId[categoryId].cards
      ];

      return cloned;
    case DELETE_CARD:
      const category = action.card.category;
      cloned.byId[category]["cards"] = cloned.byId[category].cards.filter(
        cardId => {
          return cardId !== action.card.id;
        }
      );

      return cloned;
    case CREATE_CATEGORY:
      id = action.category.id;
      cloned.allIds = [id, ...cloned.allIds];
      cloned.byId[id] = action.category;

      return cloned;

    case UPDATE_CATEGORY:
      id = action.category.id;
      if (cloned.allIds.includes(id)) {
        cloned.byId[id] = action.category;
      }

      return cloned;

    case DELETE_CATEGORY:
      delete cloned.byId[action.id];
      cloned.allIds = Object.keys(cloned.byId);

      return cloned;

    case LIST_CATEGORY:
    default:
      return state;
  }
};

export default reducer;
