/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { SetMetadata } from "@nestjs/common";

export const Roles_Key='roles';

export const Roles=(...roles:string[])=>SetMetadata(Roles_Key,roles);