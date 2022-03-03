export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [100, 'Ошибка 100'],
      [110, 'Ошибка 110'],
      [120, 'Ошибка 120'],
      [130, 'Ошибка 130'],
      [200, 'Что-то пошло не так)'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
