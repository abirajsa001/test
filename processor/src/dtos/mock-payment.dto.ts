import { Static, Type } from '@sinclair/typebox';

export enum PaymentOutcome {
  AUTHORIZED = 'Authorized',
  REJECTED = 'Rejected',
}

export enum PaymentMethodType {
  CARD = 'card',
  INVOICE = 'invoice',
  PREPAYMENT = 'prepayment',
}

export const PaymentResponseSchema = Type.Object({
  paymentReference: Type.String(),
});
console.log('mock-payment-dto.ts');
export const PaymentOutcomeSchema = Type.Enum(PaymentOutcome);

export const PaymentRequestSchema = Type.Object({
  paymentMethod: Type.Object({
    type: Type.Enum(PaymentMethodType),
    poNumber: Type.Optional(Type.String()),
    invoiceMemo: Type.Optional(Type.String()),
  }),
  paymentOutcome: PaymentOutcomeSchema,
});

export type PaymentRequestSchemaDTO = Static<typeof PaymentRequestSchema>;
export type PaymentResponseSchemaDTO = Static<typeof PaymentResponseSchema>;
