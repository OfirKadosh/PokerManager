export class PlayerView {
    render(player: any): string {
      return `<div>${player.id}. ${player.name} - ${player.email}</div>`;
    }
  }