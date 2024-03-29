import { redis } from "../../../redis";
import {v4} from "uuid";
export const createConfirmationUrl = async (userId: number) => {
  const token = v4();
  await redis.set ('confirm_user'+token, userId,  "EX", 60 * 60 * 24);
  return `https://localhost:3000/user/confirm/${token}`;
}