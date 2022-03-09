import HockeyPlayer from "./HockeyPlayer";

class RedWingsPlayer extends HockeyPlayer{
    goalsScored:number;
    constructor(playerName:string,jerseyNumber:number,positionPlayed:string,cityPlayedIn:string,numberOfCups:number,isCaptain:boolean=false, goalsScored:number) {
        super(playerName,jerseyNumber,positionPlayed,cityPlayedIn,numberOfCups,isCaptain);
        this.goalsScored = goalsScored;
    }

    increaseGoals():void {
        this.goalsScored+=1;
    }

    describePlayer(): string {
        return super.describePlayer() + `I've scored ${this.goalsScored} goals this year.`;
    }

    isEliteGoalScorer():boolean {
        if(this.goalsScored >= 40) {
            return true;
        } else {
            return false;
        }
    }
}

export default RedWingsPlayer;