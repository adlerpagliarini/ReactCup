import { ApiDto } from '../../models/apis/ApiDto';
import { GameCupDto, GameDto } from '../../models/games/GameDto';
import HttpService from '../clients/HttpService';

export abstract class GameService {

    public static async getLambdaGames(): Promise<GameDto[]> {
        const games = await HttpService.get<ApiDto<GameDto[]>>('/v1/game/GetAllLambdaGames');
        return games.data.response;
    }

    public static async getGameCupById(idGameCup: string): Promise<GameCupDto> {
        const gamecup = await HttpService.get<ApiDto<GameCupDto>>('/v1/game/' + idGameCup);
        return gamecup.data.response;
    }

    public static async creataGameCup(games: GameDto[]): Promise<GameCupDto> {
        const gamesPost = { games: games };
        const gamecup = await HttpService.post<ApiDto<GameCupDto>>('/v1/game/', gamesPost).then(r => r.data.response);
        return gamecup;
    }
}
