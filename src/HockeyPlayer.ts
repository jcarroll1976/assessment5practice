import Player from "./Player";
export default class HockeyPlayer implements Player{
    playerName:string;
    jerseyNumber:number;
    positionPlayed:string;
    cityPlayedIn:string;
    numberOfCups: number;
    isCaptain:boolean;
    constructor(playerName:string,jerseyNumber:number,positionPlayed:string,cityPlayedIn:string,numberOfCups:number,isCaptain:boolean = false) {
        this.playerName = playerName;
        this.jerseyNumber = jerseyNumber;
        this.positionPlayed = positionPlayed;
        this.cityPlayedIn = cityPlayedIn;
        this.numberOfCups = numberOfCups;
        this.isCaptain = isCaptain;
    }
    
    increaseNumberOfCups():void {
        this.numberOfCups++;
    }

    describePlayer():string {
        return `My name is ${this.playerName},I wear number ${this.jerseyNumber},I play ${this.positionPlayed} in ${this.cityPlayedIn},and have won ${this.numberOfCups} Stanley Cups.`

    }
}
