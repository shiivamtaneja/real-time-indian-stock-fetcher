import { z } from "zod"

export const updateSymbolSchema = z.object({
  symbol: z.enum(["TCS", "INFY", "RELIANCE", "HDFCBANK", "ITC"])
});