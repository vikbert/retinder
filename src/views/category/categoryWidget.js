import {CREATE_CARD, DELETE_CARD} from "../card/cardWidget";
import initialState from "../../stores/initialState";

export const CREATE_CATEGORY = "category.create_category";
export const UPDATE_CATEGORY = "category.update_category";
export const DELETE_CATEGORY = "category.delete_category";
export const LIST_CATEGORY = "category.list_category";

export const createCategory = category => ({
    type: CREATE_CATEGORY,
    category,
});

export const updateCategory = category => ({
    type: UPDATE_CATEGORY,
    category,
});

export const deleteCategory = id => ({
    type: DELETE_CATEGORY,
    id,
});

export const listCategory = () => ({
    type: LIST_CATEGORY,
});

const reducer = (state = initialState.categories, action) => {
    let clonedCategories = {...state};
    let id;
    switch (action.type) {
        case CREATE_CARD:
            const cardId = action.card.id;
            const categoryId = action.card.category;
            clonedCategories.byId[categoryId]["cards"] = [
                cardId,
                ...clonedCategories.byId[categoryId].cards,
            ];

            return clonedCategories;
        case DELETE_CARD:
            const category = action.card.category;
            clonedCategories.byId[category]["cards"] = clonedCategories.byId[category].cards.filter(
                cardId => {
                    return cardId !== action.card.id;
                },
            );

            return clonedCategories;
        case CREATE_CATEGORY:
            id = action.category.id;
            clonedCategories.allIds = [id, ...clonedCategories.allIds];
            clonedCategories.byId[id] = action.category;

            return clonedCategories;

        case UPDATE_CATEGORY:
            id = action.category.id;
            if (clonedCategories.allIds.includes(id)) {
                clonedCategories.byId[id] = action.category;
            }

            return clonedCategories;

        case DELETE_CATEGORY:
            delete clonedCategories.byId[action.id];
            clonedCategories.allIds = Object.keys(clonedCategories.byId);

            return clonedCategories;

        case LIST_CATEGORY:
        default:
            return state;
    }
};

export default reducer;
