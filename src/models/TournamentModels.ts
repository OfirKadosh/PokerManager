//Level structure
export class Level {
    constructor(
        public level: number,
        public duration: number,
        public smallBlind: number,
        public bigBlind: number,
        public ante: number,
    ) { }
}

//Prize structure
export class Prize {
    constructor(public position: number, public prize: number) { }
}

//Player structure
export class Player {
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public stackSize:number,
    ) {}
}

//Tournament stats
export class TournamentStats {
    constructor(
        public totalPlayers: number,
        public averageStack:number,
        public reEntries:number,
        public currentLevel:Level,
        public elapsedTimeSec:number,
        public timeToNextBreakSec:number,
    ) {}
}