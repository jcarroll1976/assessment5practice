import RedWingsPlayer from "../src/RedWingsPlayer";

describe("RedWingsPlayer Class",() => {
    test("parameters set from constructor",() => {
        const forward = new RedWingsPlayer("Dylan Larkin",71,"Center","Detroit,MI",0,true,27);
        expect(forward.playerName).toBe("Dylan Larkin");
        expect(forward.jerseyNumber).toBe(71);
        expect(forward.positionPlayed).toBe("Center");
        expect(forward.cityPlayedIn).toBe("Detroit,MI");
        expect(forward.numberOfCups).toBe(0);
        expect(forward.isCaptain).toBe(true);
        expect(forward.goalsScored).toBe(27);
    })
    test("calling increaseNumberOfCups twice increases numberOfCups by 2", () => {
        const forward = new RedWingsPlayer("Dylan Larkin",71,"Center","Detroit,MI",0,true,27);
        forward.increaseNumberOfCups();
        forward.increaseNumberOfCups();
        expect(forward.numberOfCups).toBe(2);
    })
    test("increaseGoals function", () => {
        const forward = new RedWingsPlayer("Dylan Larkin",71,"Center","Detroit,MI",0,true,27);
        forward.increaseGoals();
        expect(forward.goalsScored).toBe(28);
    })
    test("describePlayer function", () => {
        const forward = new RedWingsPlayer("Dylan Larkin",71,"Center","Detroit,MI",0,true,27);
        forward.describePlayer();
        expect(forward.describePlayer()).toBe("My name is Dylan Larkin,I wear number 71,I play Center in Detroit,MI,and have won 0 Stanley Cups.I've scored 27 goals this year.");
    })
    test("isEliteGoalScorer function to return true", () => {
        const forward = new RedWingsPlayer("Dylan Larkin",71,"Center","Detroit,MI",0,true,41);
        forward.isEliteGoalScorer();
        expect(forward.isEliteGoalScorer()).toBe(true);
    })
    test("isEliteGoalScorer function to return false", () => {
        const forward = new RedWingsPlayer("Tyler Bertuzzi",59,"Left Wing","Detroit,MI",0,false,27);
        forward.isEliteGoalScorer();
        expect(forward.isEliteGoalScorer()).toBe(false);
    })
})