import { z } from "zod";

export const paymentFormSchema = z.object({
  cardNumber: z.string().min(18, "Card number must have 16 digits"),
  cardHolderName: z
    .string()
    .min(3, { message: "Name must have more than 3 letters" })
    .refine((value) => value.trim().split(" ").length >= 2, {
      message: "Name must include both first and last name",
    }),
  expiryMonth: z.string().min(1, "Expiry Month must be selected"),
  expiryYear: z.string().min(1, "Expiry Year must be selected"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

export type PaymentFormSchemaType = z.infer<typeof paymentFormSchema>;