export class AdminController {
    constructor() {
        this.channel = new BroadcastChannel("tournament_channel");
        this.setupEventListeners();
    }
    setupEventListeners() {
        var _a, _b;
        (_a = document.getElementById("start-tournament")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            this.channel.postMessage("start");
        });
        (_b = document.getElementById("pause-tournament")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.channel.postMessage("pause");
        });
    }
}
//# sourceMappingURL=AdminController.js.map