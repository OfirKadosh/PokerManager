import { initPlayerController } from "./controllers/PlayerController.js";
import { TournamentController } from "./controllers/TournamentController.js";
import { TournamentStats, Level, Prize } from "./models/TournamentModels.js";
document.addEventListener('DOMContentLoaded', () => {
    //Initial tournament data setup
    const initialLevels = [
        new Level(1, 15 * 60, 50, 100, 100),
        new Level(2, 15 * 60, 100, 200, 200),
        new Level(3, 15 * 60, 150, 300, 300),
    ];
    const initialPrizes = [
        new Prize(1, 1000),
        new Prize(2, 600),
        new Prize(3, 400),
    ];
    const initialStats = new TournamentStats(50, //total players
    75000, //average stack
    5, //reentries
    initialLevels[0], //current level
    0, //elapsed time
    10 * 60 //time to next break
    );
    const tournamentController = new TournamentController(initialStats, initialPrizes, initialLevels);
    tournamentController.startTournament();
    initPlayerController();
});
//# sourceMappingURL=main.js.map