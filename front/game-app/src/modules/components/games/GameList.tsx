import React, { useState, useEffect } from 'react';
import { GameContext, IGameContext } from './context/GameContext';
import { GameService } from '../../services/gameServices/GameService';
import { GameDto } from '../../models/games/GameDto';
import { GameCard } from './GameCard';
import './GameList.css'
import { Button, Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../errors/context/ModalContext';


interface State extends IGameContext { }

export const GameList: React.FC = () => {
    const navigate = useNavigate();
    const { showModal } = useModal();

    const [isSubmitButtonEnabled, setSubmitButtonState] = useState<boolean | null>(null);

    const isPowerOfTwoAndBiggerThanFour = (value: number) =>
        ((value >= 4) && ((value) & (value - 1)) === 0);

    const enableSubmitButton = (amountOfSelectedItems: number) => {
        if (isPowerOfTwoAndBiggerThanFour(amountOfSelectedItems))
            setSubmitButtonState(true);
        else
            setSubmitButtonState(false);
    }

    useEffect(() => { }, []); // [] Load just once

    const toggleGameSelection = (game: GameDto) => {
        setState((prevState: State) => {
            if (prevState.selectedGames.includes(game)) {
                const updatedSelectedGames = prevState.selectedGames.filter((i) => i !== game);
                enableSubmitButton(prevState.selectedGames.length - 1);
                return { ...prevState, selectedGames: updatedSelectedGames };
            } else {
                const updatedSelectedGames = [...prevState.selectedGames, game];
                enableSubmitButton(prevState.selectedGames.length + 1);
                return { ...prevState, selectedGames: updatedSelectedGames };
            }
        });
    };

    const [state, setState] = useState<State>({
        isLoading: true,
        selectedGames: [],
        toggleGameSelection: toggleGameSelection,
    });


    useEffect(() => {
        async function fetchData() {
            try {
                await GameService
                    .getLambdaGames()
                    .then(games => setState((prevState: State) => ({ ...prevState, games, isLoading: false })));
            } catch (e: any) {
                showModal({
                    title: 'Não foi possível obter a lista de Games',
                    body: 'Ocorreu um erro ao chamar o serviço. Tente novamente mais tarde.',
                });
            }
        }
        fetchData();
    }, []);

    const createGameCup = async () => {
        try {
            setSubmitButtonState(false);
            var gamescup = await GameService.creataGameCup(state.selectedGames);
            if (gamescup?.idGameCup)
                navigate(`/gamecup/${gamescup.idGameCup}`);
        } catch (e: any) {
            showModal({
                title: 'Falha na criação da Copa de Games',
                body: e.message
            });            
            setSubmitButtonState(true);
        }
    }

    const styleLoad = state.isLoading ? { color: '#000', padding: '20px 0' } : { display: 'none' };

    return (
        <GameContext.Provider value={state}>
            {state.isLoading ?
                <h2 style={styleLoad}>Os dados estão sendo carregados por favor, aguarde...</h2> :
                <Container>
                    <div>
                        <div className="counter">
                            <p>Jogos selecionados: {state.selectedGames.length}</p>
                            <Button className="postBtn" color="warning" size="sm"
                                onClick={() => createGameCup()} disabled={!isSubmitButtonEnabled}>
                                Gerar Campeonato
                            </Button>

                        </div>
                        <hr className="line"></hr>
                    </div>
                    <div className="listOfGames">
                        {state.games?.map((p: GameDto, i: number) =>
                            <GameCard key={i} game={p} />
                        )}
                    </div>
                </Container>
            }
        </GameContext.Provider>
    );
};