const team = {
    _players : [
    {
      firstName: 'Jayson',
      lastName: 'Tatum',
      age: 22
    }, 
    {
      firstName: 'Jaylen',
      lastName: 'Brown',
      age: 23
    },
    {
      firstName: 'Kemba',
      lastName: 'Walker',
      age: 30
    }],
    _games : [
    {
      opponent: 'Raptors',
      teamPoints: 93,
      opponentPoints: 100
    },
    {
      opponent: 'Raptors',
      teamPoints: 103,
      opponentPoints: 104
    },
    {
      opponent: 'Raptors',
      teamPoints: 102,
      opponentPoints: 99
    }],
  
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(playerFirstName, playerLastName, playerAge){
        const player = {
            firstName: playerFirstName,
            lastName: playerLastName,
            age: playerAge
        };

        return this._players.push(player)
    },

    addgame(opponentName, myTeamPoints, myOpponentPoints){
        const game = {
          opponent: opponentName,
          teampoints: myTeamPoints,
          opponentPoinsts: myOpponentPoints
        };
  
        return this._games.push(game)
      }
  };
  
  
    team.addPlayer('Steph', 'Curry', 28);
    team.addPlayer('Lisa', 'Leslie', 44);
    team.addPlayer('Bugs', 'Bunny', 76);
    
    console.log(team._players)
  
    team.addgame("76's", 110, 106);
    team.addgame("76's", 102, 94);
    team.addgame("76's", 128, 101);
  
    console.log(team._games)