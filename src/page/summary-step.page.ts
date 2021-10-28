import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckout: ElementFinder;

  constructor() {
    this.proceedToCheckout = $('.cart_navigation a > span');
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
