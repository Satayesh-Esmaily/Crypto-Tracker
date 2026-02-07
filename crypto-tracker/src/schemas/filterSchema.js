import { z } from "zod";

export const filterSchema = z.object({
  search: z.string().optional(),
  minPrice: z
    .string()
    .regex(/^\d*$/, "Must be a number")
    .optional(),
  maxPrice: z
    .string()
    .regex(/^\d*$/, "Must be a number")
    .optional(),
});
