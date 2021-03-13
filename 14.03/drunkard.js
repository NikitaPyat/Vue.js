class pyan {
  run(player_1, player_2) {
    let round = 0;
    let c_1 = 0;
    let c_2 = 0;
    while ((player_1.length !== 0) || (player_2.length !== 0) && round < 100) {
      round += 1;
      c_1 = player_1.pop();
      c_2 = player_2.pop();
      if (c_1 > c_2) {
        player_1.unshift(c_1, c_2);
      } else if (c_2 > c_1) {
        player_2.unshift(c_2, c_1);
      }
      if (player_1.length === 0 && player_2.length !== 0) {
        return `Second player. Round: ${round}`;
      }
      if (player_2.length === 0 && player_1.length !== 0) {
        return `First player. Round: ${round}`;
      }
    }
    return 'Botva!';
  }
}

export default pyan;
