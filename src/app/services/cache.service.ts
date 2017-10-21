
export class CacheService {
  private cache = {};

  constructor() {
    // code...
  }

  set(key, value) {
    this.cache[key] = value;
  }

  get(key) {
    return this.cache[key];
  }

  remove(key) {
    delete this.cache[key];
  }
}