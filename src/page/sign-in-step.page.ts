import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;

  private password: ElementFinder;

  private submit: ElementFinder;

  constructor() {
    this.email = $('#email');
    this.password = $('#passwd');
    this.submit = $('#SubmitLogin > span');
  }

  public async fillSignIn(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
  }

  public async login(): Promise<void> {
    await this.submit.click();
  }
}
