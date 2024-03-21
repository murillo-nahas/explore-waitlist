import { z } from "zod";

export const joinWaitlistSchema = z.object({
  firstname: z.string().min(1),
  email: z.string().email().min(1),
});

export type JoinWaitlistSchema = z.infer<typeof joinWaitlistSchema>;
