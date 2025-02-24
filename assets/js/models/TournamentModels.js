//Level structure
export class Level {
    constructor(level, duration, smallBlind, bigBlind, ante) {
        this.level = level;
        this.duration = duration;
        this.smallBlind = smallBlind;
        this.bigBlind = bigBlind;
        this.ante = ante;
    }
}
//Prize structure
export class Prize {
    constructor(position, prize) {
        this.position = position;
        this.prize = prize;
    }
}
//Player structure
export class Player {
    constructor(id, name, email, stackSize) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.stackSize = stackSize;
    }
}
//Tournament stats
export class TournamentStats {
    constructor(totalPlayers, averageStack, reEntries, currentLevel, elapsedTimeSec, timeToNextBreakSec) {
        this.totalPlayers = totalPlayers;
        this.averageStack = averageStack;
        this.reEntries = reEntries;
        this.currentLevel = currentLevel;
        this.elapsedTimeSec = elapsedTimeSec;
        this.timeToNextBreakSec = timeToNextBreakSec;
    }
}
//# sourceMappingURL=TournamentModels.js.map