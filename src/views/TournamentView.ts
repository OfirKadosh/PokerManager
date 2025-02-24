import { TournamentStats, Prize, Level } from "../models/TournamentModels.js";

export class TournamentView {
    //Update timers
    updateTimers(stats: TournamentStats): void {
        document.getElementById('level-timer')!.innerText = this.formatTime(stats.currentLevel.duration);
        document.getElementById('break-timer')!.innerText = `☕︎ ${this.formatTime(stats.timeToNextBreakSec)}`;
        document.getElementById('tournament-duration')!.innerText = `⏱ ${this.formatTime(stats.elapsedTimeSec)}`;
    }

    //Update prize pool
    updatePrizePool(prizes: Prize[]): void {
        const prizesList = document.getElementById('prizes-list')!;
        prizesList.innerHTML = '';
        prizes.forEach(prize => {
            prizesList.innerHTML += `<li>${prize.position} - ${prize.prize}</li>`;
        });
    }

    //Update player stats
    updatePlayerStats(stats: TournamentStats): void {
        document.getElementById('player-count')!.innerText = `Players: ${stats.totalPlayers}`;
        document.getElementById('average-stack')!.innerText = `Average stack: ${stats.averageStack}`;
        document.getElementById('re-entry-count')!.innerText = `${stats.reEntries}`;
    }

    //Update current blinds
    updateCurrentBlinds(level: Level): void {
        document.getElementById('small-blind-info')!.innerText = `${level.smallBlind}`;
        document.getElementById('big-blind-info')!.innerText = `${level.bigBlind}`;
        document.getElementById('ante-info')!.innerText = `Ante: ${level.ante}`;
    }

    //Format seconds to HH:MM:SS
    private formatTime(seconds: number): string {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    }
}