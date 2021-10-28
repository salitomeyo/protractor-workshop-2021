import { $, ElementFinder } from 'protractor';

export class ProductListPage{
  private addToCart: ElementFinder;

  constructor() {
    this.addToCart = $('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public getAddToCart(): ElementFinder {
    return this.addToCart;
  }

  public async addToCartClick(): Promise<void> {
    await this.addToCart.click();
  }
}
