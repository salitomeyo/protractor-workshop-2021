import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrder: ElementFinder;

  constructor() {
    this.confirmOrder = $('#cart_navigation > .button-medium');
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.confirmOrder.click();
  }
}
