'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { InteractiveHoverButton } from './magicui/InteractiveHoverButton';

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
  const [moves, setMoves] = useState(0);
  const [highScore, setHighScore] = useState(0); // New state for high score

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
    const savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore) {
      setHighScore(Number(savedHighScore));
    }
    initializeCards();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;

      if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
        setScore(score + 3);
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

  useEffect(() => {
    // Check if all cards are matched
    if (cards.every(card => card.isMatched)) {
      const finalScore = moves * score;
      if (finalScore > highScore) {
        setHighScore(finalScore);
        localStorage.setItem('highScore', String(finalScore));
      }
    }
  }, [cards, score, moves, highScore]);

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
        <span className='text-left'>
          <span className='block'>Score: {score} - Moves: {moves}</span>
          <span className='block'>High Score: {highScore}</span>
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

      <div className="grid place-items-center mt-8">
        <Link href="https://daniilogamesjs.netlify.app/" target="_blank" rel="noopener noreferrer">
          <InteractiveHoverButton>
            See all Games
          </InteractiveHoverButton>
        </Link>
      </div>
    </div>
  );
}
