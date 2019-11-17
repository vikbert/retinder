import React, {useEffect, useState} from 'react';
import Hammer from 'hammerjs';
import Card from './components/Card';
import EyeBlocked from './assets/svg/eye-blocked.svg';
import EyePlus from './assets/svg/eye-plus.svg';

const App = () => {
    const [empty, setEmpty] = useState(false);

    let cardData = window.localStorage.getItem('cards') || '';
    cardData = JSON.parse(cardData);

    useEffect(() => {
        console.log('this will be rendered for once');
        const tinderContainer = document.querySelector('.tinder');
        const allCards = document.querySelectorAll('.tinder--card');
        const nope = document.getElementById('nope');
        const love = document.getElementById('love');

        function initCards(card, index) {
            console.log('initCards');
            const newCards = document.querySelectorAll('.tinder--card:not(.removed)');

            newCards.forEach(function(card, index) {
                card.style.zIndex = allCards.length - index;
                // 显示卡片重叠
                // card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
                card.style.opacity = (10 - index) / 10;
            });

            tinderContainer.classList.add('loaded');

            if (newCards.length === 0) {
                console.log('card is empty');
            }
        }

        initCards();

        allCards.forEach(function(el) {
            const hammertime = new Hammer(el);

            hammertime.on('pan', function(event) {
                el.classList.add('moving');
            });

            hammertime.on('pan', function(event) {
                if (event.deltaX === 0) {
                    return;
                }
                if (event.center.x === 0 && event.center.y === 0) {
                    return;
                }

                console.log(event.deltaX);
                tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
                tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

                var xMulti = event.deltaX * 0.03;
                var yMulti = event.deltaY / 80;
                var rotate = xMulti * yMulti;

                event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
            });

            hammertime.on('panend', function(event) {
                console.log('remove card from list');
                el.classList.remove('moving');
                tinderContainer.classList.remove('tinder_love');
                tinderContainer.classList.remove('tinder_nope');

                const moveOutWidth = document.body.clientWidth;
                const keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

                event.target.classList.toggle('removed', !keep);

                if (keep) {
                    event.target.style.transform = '';
                } else {
                    const endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
                    const toX = event.deltaX > 0 ? endX : -endX;
                    const endY = Math.abs(event.velocityY) * moveOutWidth;
                    const toY = event.deltaY > 0 ? endY : -endY;
                    const xMulti = event.deltaX * 0.03;
                    const yMulti = event.deltaY / 80;
                    const rotate = xMulti * yMulti;

                    event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
                    initCards();
                }
            });
        });

        function createButtonListener(love) {
            return function(event) {
                const cards = document.querySelectorAll('.tinder--card:not(.removed)');
                const moveOutWidth = document.body.clientWidth * 1.5;

                if (!cards.length) {
                    return false;
                }

                const card = cards[0];

                card.classList.add('removed');

                if (love) {
                    card.style.transform =
                        'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
                } else {
                    card.style.transform =
                        'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
                }

                initCards();

                event.preventDefault();
            };
        }

        const nopeListener = createButtonListener(false);
        const loveListener = createButtonListener(true);

        if (!empty) {
            nope.addEventListener('click', nopeListener);
            love.addEventListener('click', loveListener);
        }
    });

    return (
        <div className="tinder">
            {!empty && (
                <>
                    <div className="tinder--cards">
                        {cardData.map((card, index) => (
                            <Card key={index} card={card}/>
                        ))}
                    </div>
                    <div className="tinder--buttons">
                        <button id="nope"><img src={EyeBlocked} style={{width: '30px'}} alt="ok"/></button>
                        <button id="love"><img src={EyePlus} style={{width: '30px'}} alt="review"/></button>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
