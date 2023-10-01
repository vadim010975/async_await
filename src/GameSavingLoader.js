import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      return JSON.parse(await json(await read()));
    } catch (e) {
      throw new Error(e);
    }
  }
}
