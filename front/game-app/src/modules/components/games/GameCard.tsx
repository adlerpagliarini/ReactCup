
import React, { useContext } from 'react';
import { GameContext } from './context/GameContext';
import { GameDto } from '../../models/games/GameDto';

interface Props {
  game: GameDto
}

export const GameCard: React.FC<Props> = props => {
  const gameContext = useContext(GameContext);
  const game = props.game;

  return (
    <div className="item">
      <div className="selected">
        <input
          type="checkbox"
          checked={gameContext.selectedGames.includes(game)}
          onChange={() => gameContext.toggleGameSelection(game)}
        />
      </div>
      <div className="details">
        <div className="title">{game.titulo}</div>
        <div className="imgYear">
          <div className="year">Ano: {game.ano}</div>
          <div className="imageBox"><img src={game.urlImagem} alt={game.titulo} /></div>
        </div>
      </div>
    </div>
  );
};