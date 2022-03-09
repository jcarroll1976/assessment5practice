interface Player {
    playerName:string;
    jerseyNumber:number;
    positionPlayed:string;
    cityPlayedIn:string;
    describePlayer: () => string;
}

export default Player