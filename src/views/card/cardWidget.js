import initialState from "../../stores/initialState";
export const CREATE_CARD = "card.create_card";
export const DELETE_CARD = "card.delete_card";
export const LOAD_CARDS = "card.load_cards";

export const loadCards = cards => ({
  type: LOAD_CARDS,
  cards
});

export const createCard = card => ({
  type: CREATE_CARD,
  card
});

export const deleteCard = card => ({
  type: DELETE_CARD,
  card
});

const reducer = (state = initialState.cards, action) => {
  let cloned = { ...state };
  let id;
  switch (action.type) {
    case CREATE_CARD:
      id = action.card.id;
      cloned.byId[id] = action.card;
      cloned.allIds = Object.keys(cloned.byId);
      return cloned;

    case DELETE_CARD:
      delete cloned.byId[action.card.id];
      cloned.allIds.filter(id => {
        return id !== action.card.id;
      });
      return cloned;

    default:
      return state;
  }
};

export default reducer;