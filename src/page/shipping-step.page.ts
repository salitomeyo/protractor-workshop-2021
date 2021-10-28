import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private terms: ElementFinder;

  private proceedToCheckout: ElementFinder;

  constructor() {
    this.terms = $('#cgv');
    this.proceedToCheckout = $('#form .cart_navigation > button > span');
  }

  public async acceptTermsClick(): Promise<void> {
    await this.terms.click();
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
