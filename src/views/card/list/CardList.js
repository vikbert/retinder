import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ReviewSlide from "src/views/review/ReviewSlide";
import HeaderTitle from "../../components/HeadTitle";
import NavBottom from "../../components/NavBottom";
import NavLink from "../../components/NavLink";
import NavLinkNote from "../../components/NavLinkNote";
import NavTop from "../../components/NavTop";
import { deleteCard } from "../cardWidget";
import CardForm from "../form/CardForm";
import CardItem from "./CardItem";

const CardList = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [inSlide, setInSlide] = useState(false);
  const [inEdit, setInEdit] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardInEdit, setCardInEdit] = useState(null);

  const categories = useSelector(state => state.categories);
  const allCards = useSelector(state => state.cards);

  const location = useLocation();
  const { categoryName, categoryId } = location.state;
  const currentCategory = categoryId ? categories.byId[categoryId] : null;

  const idsForCurrentList = categoryId
    ? categories.byId[categoryId].cards
    : allCards.allIds;

  const cardCounter = idsForCurrentList.length;
  const dispatch = useDispatch();

  const handleDeleteOrAddCard = () => {
    if (inEdit && selectedCards.length) {
      const clone = [...selectedCards];
      setSelectedCards(() => {
        return [];
      });
      clone.forEach(cardId => {
        dispatch(deleteCard(allCards.byId[cardId]));
      });
    } else {
      setCardInEdit(null);
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const editCard = cardId => {
    setCardInEdit(prevCard => {
      const currentCard = allCards.byId[cardId];

      return currentCard;
    });

    setFormVisible(true);
  };

  const renderCardForm = React.useMemo(() => {
    return (
      <CardForm
        category={currentCategory}
        formVisible={formVisible}
        hideForm={() => {
          setFormVisible(false);
        }}
        card={cardInEdit}
      />
    );
  }, [cardInEdit, currentCategory, formVisible]);

  const renderedCards = React.useMemo(() => {
    return idsForCurrentList.map((cardId, slideIndex) => (
      <CardItem
        key={cardId}
        inEdit={inEdit}
        card={allCards.byId[cardId]}
        edit={editCard}
        select={selectCard}
        deselect={deselectCard}
        cartegoy={currentCategory ? currentCategory : null}
      />
    ));
  }, [
    idsForCurrentList,
    inEdit,
    allCards.byId,
    editCard,
    selectCard,
    deselectCard,
    currentCategory
  ]);

  const handleUpdateSlideIndex = () => {
    setSlideIndex(prevslideIndex => {
      return prevslideIndex === cardCounter - 1 ? 0 : prevslideIndex + 1;
    });
  };

  const handleOpenSlide = () => {
    setInSlide(true);
  };

  const handleCloseSlide = () => {
    setInSlide(false);
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
        <NavLink text={""} position="center" />
        <NavLink
          text={inEdit ? "Abbrechen" : "Bearbeiten"}
          position="right"
          disabled={cardCounter === 0}
          handleClick={handleClickOnEdit}
        />
      </NavTop>
      <section className="page-content bg">
        <HeaderTitle title={categoryName || "Alle Karte"} />
        {cardCounter > 0 && renderedCards}
      </section>
      <NavBottom>
        <NavLink
          text="Review"
          position="left"i
          disabled={cardCounter === 0 || inEdit}
          handleClick={handleOpenSlide}
        />
        <NavLinkNote
          text={cardCounter ? `${cardCounter} Karten` : "Keinen Karten"}
        />
        <NavLink
          text={inEdit && selectedCards.length ? "Löschen" : "Neue karte"}
          position="right"
          handleClick={handleDeleteOrAddCard}
          disabled={inEdit || inSlide}
        />
      </NavBottom>
      {renderCardForm}
      <ReviewSlide
        card={
          cardCounter && slideIndex < cardCounter
            ? allCards.byId[idsForCurrentList[slideIndex]]
            : null
        }
        slideVisible={inSlide}
        closeSlide={handleCloseSlide}
        updateSlideIndex={handleUpdateSlideIndex}
      />
    </>
  );
};

export default CardList;
