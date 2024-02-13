import React from "react";
import { GameDto } from "../../../models/games/GameDto";

export interface IGameContext {
    isLoading: boolean,
    games?: GameDto[],
    selectedGames: GameDto[];
    toggleGameSelection: (game: GameDto) => void;
}

export const GameContext = React.createContext<IGameContext>({
  isLoading: true,
  selectedGames: [],
  toggleGameSelection: (game: GameDto) => { },  
});