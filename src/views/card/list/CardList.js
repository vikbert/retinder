import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import HeaderTitle from "../../components/HeadTitle";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import NavLinkNote from "../../components/NavLinkNote";
import NavTop from "../../components/NavTop";
import CardForm from "../form/CardForm";
import CardItem from "./CardItem";
import {deleteCard} from "../cardWidget";
import ReviewSlide from "src/views/review/ReviewSlide";

const CardList = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [slideVisible, setSlideVisible] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);
    const [inEdit, setInEdit] = useState(false);
    const [index, setIndex] = useState(0);
    
    const categories = useSelector(state => state.categories);
    const cards = useSelector(state => state.cards);

    const location = useLocation();
    const {categoryName, categoryId} = location.state;
    const currentCategory = categoryId ? categories.byId[categoryId] : null;
    
    const cardIdsForList = categoryId ? categories.byId[categoryId].cards : cards.allIds;
    const cardCounter = cardIdsForList.length;
    const dispatch = useDispatch();

    const handleDeleteOrAddCard = () => {
        if (inEdit && selectedCards.length) {
            const clone = [...selectedCards];
            setSelectedCards(() => {
                return [];
            });
            clone.forEach(cardId => {
                dispatch(deleteCard(cards.byId[cardId]));
            });
        } else {
            setFormVisible(true);
        }
    };

    const handleClickOnEdit = () => {
        if (inEdit) {
            window.location.reload();
        }

        setInEdit(!inEdit);
    };

    const selectCard = useCallback(cardId => {
        setSelectedCards(prevState => {
            return [...prevState, cardId];
        });
    }, []);

    const deselectCard = useCallback(cardId => {
        setSelectedCards(prevState => {
            return prevState.filter(id => {
                return id !== cardId;
            });
        });
    }, []);

    const renderedCards = React.useMemo(() => {
        return (
            cardIdsForList.map((cardId, index) => (
                <CardItem
                    key={cardId}
                    inEdit={inEdit}
                    card={cards.byId[cardId]}
                    select={selectCard}
                    deselect={deselectCard}
                />
            ))
        );
    }, [inEdit, cardIdsForList, cards, selectCard, deselectCard]);

    const rotateIndex = () => {
        setIndex((prevIndex) => {
            return (prevIndex === (cardCounter - 1)) ? 0 : prevIndex + 1;
        });
    };

    const handleSkipCard = cardId => {
        rotateIndex();
    };

    const handleRepeatCard = cardId => {
        rotateIndex();
    };

    const handleOpenSlide = () => {
        setSlideVisible(true);
    };

    const handleCloseSlide = () => {
        setSlideVisible(false);
    };

    return (
        <>
            <NavTop>
                <NavLink
                    text="❮"
                    position="left"
                    disabled={false}
                    route="/categories"
                    isBack={true}
                />

                {/* todo: show this title, if HeaderTitle not in view ports */}
                <NavLink text={""} position="center"/>
                <NavLink
                    text="Bearbeiten"
                    position="right"
                    disabled={cardCounter === 0}
                    handleClick={handleClickOnEdit}
                />
            </NavTop>
            <section className="page-content bg">
                <HeaderTitle title={categoryName || "Alle Karte"}/>
                {cardCounter > 0 && renderedCards}
            </section>
            <NavBottom>
                <NavLink
                    text="Review"
                    position="left"
                    disabled={cardCounter === 0}
                    handleClick={handleOpenSlide}
                />
                <NavLinkNote
                    text={cardCounter ? `${cardCounter} Karten` : "Keinen Karten"}
                />
                <NavLink
                    text={inEdit && selectedCards.length ? "Löschen" : "Neue karte"}
                    position="right"
                    handleClick={handleDeleteOrAddCard}
                />
            </NavBottom>
            <CardForm
                category={currentCategory}
                formVisible={formVisible}
                hideForm={() => {
                    setFormVisible(false);
                }}
            />
            <ReviewSlide
                card={(cardCounter && index < cardCounter) ? cards.byId[cardIdsForList[index]] : null}
                slideVisible={slideVisible}
                skipCard={handleSkipCard}
                repeatCard={handleRepeatCard}
                closeSlide={handleCloseSlide}
            />
        </>
    );
};

export default CardList;
