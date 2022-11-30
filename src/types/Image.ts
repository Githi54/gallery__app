import { URLS } from "./Urls";
import { User } from "./User";

export interface Image {
  id: string,
  user: User,
  urls: URLS,
};