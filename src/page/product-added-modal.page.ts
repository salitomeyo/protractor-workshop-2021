import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckout: ElementFinder;

  constructor() {
    this.proceedToCheckout = $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
