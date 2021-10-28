import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private message: ElementFinder;

  constructor() {
    this.message = $('#center_column > div > .cheque-indent > strong');
  }

  public async getConfirmationMessage(): Promise<string> {
    return this.message.getText();
  }
}
