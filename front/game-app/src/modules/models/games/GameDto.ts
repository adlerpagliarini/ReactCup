
export interface GameDto {
    id: string,
    titulo: string,
    nota: number,
    ano: number,
    urlImagem: string
}

export interface GameApiDto {
    id: string,
    title: string,
    rate: number,
    year: number,
    imageUrl: string
}

export interface MatchDto {
    id: number,
    idWinner: string,
    gameOne: GameApiDto,
    gameTwo: GameApiDto
}

export interface MatchStageDto {
    matchs: MatchDto[]
}

export interface GameCupDto {
    idGameCup: string,
    winner: GameApiDto,
    second: GameApiDto
    matchStages: MatchStageDto[]
}