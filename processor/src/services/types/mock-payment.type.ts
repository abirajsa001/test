import { PaymentRequestSchemaDTO } from '../../dtos/mock-payment.dto';
import { CommercetoolsCartService, CommercetoolsPaymentService } from '@commercetools/connect-payments-sdk';
console.log('mock-payment.type.ts');
export type MockPaymentServiceOptions = {
  ctCartService: CommercetoolsCartService;
  ctPaymentService: CommercetoolsPaymentService;
};

export type CreatePaymentRequest = {
  data: PaymentRequestSchemaDTO;
};
