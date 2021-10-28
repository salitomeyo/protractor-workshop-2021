import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
} from '../src/page';
describe('Buy a t-shirt', () => {
  const menuContentPage = new MenuContentPage();
  const productListPage = new ProductListPage();
  const productAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage = new SummaryStepPage();
  const signInStepPage = new SignInStepPage();
  const addressStepPage = new AddressStepPage();
  const shippingStepPage = new ShippingStepPage();
  const paymentStepPage = new PaymentStepPage();
  const bankPaymentPage = new BankPaymentPage();
  const orderSummaryPage = new OrderSummaryPage();

  describe('given a online shop', () => {
    it('Open page ', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('then should select a t-shirt', () => {
    it('pick t-shirt', async () => {
      await menuContentPage.goToTShirtMenu();
      await productListPage.addToCartClick();
    });
  });

  describe('then should checkout', () => {
    it('go to checkout process', async () => {
      await productAddedModalPage.goToCheckout();
      await summaryStepPage.goToCheckout;
    });
  });

  describe('then should login', () => {
    it('fill email, and password', async () => {
      await signInStepPage.fillSignIn();
      await signInStepPage.login();
    });
  });
  describe('should select default address', () => {
    it('pick address', async () => {
      await addressStepPage.goToCheckout();
      await shippingStepPage.acceptTermsClick();
      await shippingStepPage.goToCheckout();
    });
  });

  describe('should pay via bank wire', () => {
    it('then should be bought a t-shirt', async () => {
      await paymentStepPage.payByBankWireClick();
      await bankPaymentPage.goToConfirmOrder();
      await orderSummaryPage.getConfirmationMessage();
    });
  });
});
