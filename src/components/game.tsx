'use client';
import { useEffect, useState } from 'react';

const emojis = ['🐙', '🦋', '🐢', '🦅', '🐣', '🦥'];

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export function Game() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0); // New state for moves


  const initializeCards = () => {
    const duplicatedEmojis = [...emojis, ...emojis];
    const shuffledEmojis = duplicatedEmojis
      .sort(() => Math.random() - 0.5)
      .slice(0, 12);

    const initialCards: Card[] = shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji: emoji,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(initialCards);
    setScore(0);
    setFlippedCards([]);
    setMoves(0);
  };

  useEffect(() => {
    initializeCards();
  }, []);


  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;

      if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
        setScore(score + 10);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstIndex || card.id === secondIndex
              ? { ...card, isMatched: true, isFlipped: true }
              : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.isMatched ? card : { ...card, isFlipped: false }
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards, score]);

  function handleCardClick(index: number) {
    if (
      flippedCards.length < 2 &&
      !cards[index].isFlipped &&
      !cards[index].isMatched
    ) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards([...flippedCards, index]);
      setMoves(moves + 1);
    }
  }

  return (
    <div className="container mx-auto mt-[4rem] w-[400px] mb-[8rem]">
      <h2 className="text-center mb-4">
        <span className="text-sm leading-8 sm:text-base block">
          Before you go, play a little 👾
        </span>
        <span className="text-3xl leading-8 sm:text-4xl block">
          Have Fun
        </span>
      </h2>

      <div className="mb-4 text-center mt-8 flex justify-between items-end text-xs">
        <span>
          Score: {score} | Moves: {moves}
        </span>
        <button
          className="ml-4 px-4 py-2 bg-rose-500/10 text-white rounded text-xs"
          onClick={initializeCards}
        >
          Reset Game
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative h-24 w-full rounded-lg flex items-center justify-center text-4xl font-bold cursor-pointer ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''} hover:bg-rose-600/50`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-back absolute inset-0 bg-gray-500/50 rounded-lg"></div>
            <div className="card-front absolute inset-0 bg-rose-700/10 rounded-lg flex items-center justify-center text-4xl">
              {card.emoji}
            </div>
            <style jsx>{`
              .card-back {
                transition: transform 0.5s;
                backface-visibility: hidden;
              }

              .card-front {
                transition: transform 0.5s;
                backface-visibility: hidden;
                transform: rotateY(180deg);
              }

              .flipped .card-back {
                transform: rotateY(180deg);
              }

              .flipped .card-front {
                transform: rotateY(0deg);
              }

              .matched {
                border: 1px solid green;
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
}
