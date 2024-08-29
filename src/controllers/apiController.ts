/**
 * Enum as Template Parameter Example APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ItemsResponse, itemsResponseSchema } from '../models/itemsResponse';
import { StatusEnum, statusEnumSchema } from '../models/statusEnum';
import { array } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';

export class ApiController extends BaseController {
  /**
   * Retrieve a list of items based on their status.
   *
   * @param status The status of the items to filter by.
   * @return Response from the API call
   */
  async getItemsByStatus(
    status: StatusEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ItemsResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ status: [status, statusEnumSchema] });
    req.appendTemplatePath`/items/${mapped.status}`;
    req.throwOn(
      400,
      ApiError,
      'Bad request, possibly due to an invalid status value.'
    );
    req.throwOn(404, ApiError, 'No items found for the given status.');
    return req.callAsJson(array(itemsResponseSchema), requestOptions);
  }
}
