import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HeaderTitle from '../../components/HeadTitle';
import NavBottom from '../../components/NavBottom';
import NavLink from '../../components/NavLink';
import NavLinkNote from '../../components/NavLinkNote';
import NavTop from '../../components/NavTop';
import NavBack from '../../components/NavBack';
import CardForm from '../form/CardForm';
import CardItem from './CardItem';
import { deleteCard } from '../cardWidget';

const CardList = () => {
  const [formInvisible, setFormInvisible] = useState(true);
  const [inEdit, setInEdit] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  const location = useLocation();
  const { categoryName, categoryId } = location.state;

  const categories = useSelector((state) => state.categories);
  const cards = useSelector((state) => state.cards);
  const currentCategory = categoryId ? categories.byId[categoryId] : null;
  const cardCounter = currentCategory ? currentCategory.cards.length : 0;

  const dispatch = useDispatch();

  const handleDeleteOrAddCard = () => {
    if (inEdit && selectedCards.length) {
      const clone = [...selectedCards];
      setSelectedCards(() => {
        return [];
      });
      clone.forEach((cardId) => {
        dispatch(deleteCard(cards.byId[cardId]));
      });
    } else {
      setFormInvisible(false);
    }
  };

  const handleClickOnEdit = () => {
    if (inEdit) {
      window.location.reload();
    }

    setInEdit(!inEdit);
  };

  const selectCard = (cardId) => {
    setSelectedCards((prevState) => {
      return [...prevState, cardId];
    });
  };

  const deselectCard = (cardId) => {
    setSelectedCards((prevState) => {
      return prevState.filter((id) => {
        return id !== cardId;
      });
    });
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

        {/* <NavBack route="/categories" /> */}
        {/* todo: show this title, if HeaderTitle not in view ports */}
        <NavLink text={''} position="center" />
        <NavLink
          text="Bearbeiten"
          position="right"
          disabled={cardCounter === 0}
          handleClick={handleClickOnEdit}
        />
      </NavTop>
      <section className="page-content bg">
        <HeaderTitle title={categoryName || 'Alle Karte'} />
        {cardCounter > 0 &&
          categories.byId[categoryId].cards.map((cardId, index) => (
            <CardItem
              key={cardId}
              inEdit={inEdit}
              card={cards.byId[cardId]}
              select={selectCard}
              deselect={deselectCard}
            />
          ))}
      </section>
      <NavBottom>
        <NavLink
          text="ReviewAll"
          position="left"
          disabled={cardCounter === 0}
        />
        <NavLinkNote
          text={cardCounter ? `${cardCounter} Karten` : 'Keinen Karten'}
        />
        <NavLink
          text={inEdit && selectedCards.length ? 'Löschen' : 'Neue karte'}
          position="right"
          handleClick={handleDeleteOrAddCard}
        />
      </NavBottom>
      <CardForm
        category={currentCategory}
        invisible={formInvisible}
        hideForm={() => {
          setFormInvisible(true);
        }}
      />
    </>
  );
};

export default CardList;
