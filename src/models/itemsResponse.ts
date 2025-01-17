/**
 * Enum as Template Parameter Example APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { StatusEnum, statusEnumSchema } from './statusEnum';

export interface ItemsResponse {
  id?: number;
  name?: string;
  status?: StatusEnum;
}

export const itemsResponseSchema: Schema<ItemsResponse> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  status: ['status', optional(statusEnumSchema)],
});
