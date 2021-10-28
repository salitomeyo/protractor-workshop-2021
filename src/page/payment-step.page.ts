import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByCheck: ElementFinder;

  private payByBankWire: ElementFinder;

  constructor() {
    this.payByCheck = $('#HOOK_PAYMENT .payment_module .cheque');
    this.payByBankWire = $('#HOOK_PAYMENT .payment_module .bankwire');
  }

  public async payByCheckClick(): Promise<void> {
    await this.payByCheck.click();
  }

  public async payByBankWireClick(): Promise<void> {
    await this.payByBankWire.click();
  }
}
