import HockeyPlayer from "../src/HockeyPlayer";

describe("RedWingsPlayer Class",()=> {
    test("parameters set from constructor", () => {
        const player = new HockeyPlayer("Dylan Larkin",71,"Center","Detroit,MI",0,true);
        expect(player.playerName).toBe("Dylan Larkin");
        expect(player.jerseyNumber).toBe(71);
        expect(player.positionPlayed).toBe("Center");
        expect(player.cityPlayedIn).toBe("Detroit,MI");
        expect(player.numberOfCups).toBe(0);
        expect(player.isCaptain).toBe(true);
    })
    test("isCaptain defaults to false when last parameter omitted", () => {
        const player = new HockeyPlayer("Tyler Bertuzzi",59,"Left Wing","Detroit,MI",0);
        expect(player.isCaptain).toBe(false);
    })
    test("calling increaseNumberOfCups increases numberOfCups by one", () => {
        const player = new HockeyPlayer("Tyler Bertuzzi",59,"Left Wing","Detroit,MI",0);
        player.increaseNumberOfCups();
        expect(player.numberOfCups).toBe(1);
    })
    test("calling describePlayer returns a string",() => {
        const player = new HockeyPlayer("Lucas Raymond",23,"Left Wing","Detroit,MI",0);
        expect(player.describePlayer()).toBe("My name is Lucas Raymond,I wear number 23,I play Left Wing in Detroit,MI,and have won 0 Stanley Cups.")
    })
})