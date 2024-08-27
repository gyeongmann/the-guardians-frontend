import { Member } from "./Member";

export interface FamilyResponse {
  name: string;
  description: string;
  approval_request: number;
  users: Member[];
}
