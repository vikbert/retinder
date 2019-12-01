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
  const [slideVisible, setSlideVisible] = useState(false);
  const [inEdit, setInEdit] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

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
    return idsForCurrentList.map((cardId, slideIndex) => (
      <CardItem
        key={cardId}
        inEdit={inEdit}
        card={allCards.byId[cardId]}
        select={selectCard}
        deselect={deselectCard}
      />
    ));
  }, [idsForCurrentList, inEdit, allCards.byId, selectCard, deselectCard]);

  const handleUpdateSlideIndex = () => {
    setSlideIndex(prevslideIndex => {
      return prevslideIndex === cardCounter - 1 ? 0 : prevslideIndex + 1;
    });
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
        <NavLink text={""} position="center" />
        <NavLink
          text="Bearbeiten"
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
      {}
      <ReviewSlide
        card={
          cardCounter && slideIndex < cardCounter
            ? allCards.byId[idsForCurrentList[slideIndex]]
            : null
        }
        slideVisible={slideVisible}
        closeSlide={handleCloseSlide}
        updateSlideIndex={handleUpdateSlideIndex}
      />
    </>
  );
};

export default CardList;
