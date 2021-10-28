import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckout: ElementFinder;

  constructor() {
    this.proceedToCheckout = $('#center_column > .cart_navigation > a.button.btn.btn-default.standard-checkout.button-medium');
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
