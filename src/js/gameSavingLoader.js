import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    const res = await read();
    const value = await json(res);
    return game = new GameSaving({
      id: value.id,
      created: value.created,
      userInfo: {
        id: value.userInfo.id,
        name: value.userInfo.name,
        level: value.userInfo.level,
        points: value.userInfo.points,
      },
    });
  }
}
