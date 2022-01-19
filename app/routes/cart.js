import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ preço: 10 }, { preço: 15 }];
    return items;
  }
}
