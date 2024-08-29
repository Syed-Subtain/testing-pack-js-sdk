# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`


# Get Items by Status

Retrieve a list of items based on their status.

```ts
async getItemsByStatus(  status: StatusEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<ItemsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Template, Required | The status of the items to filter by. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ItemsResponse[]`](../../doc/models/items-response.md)

## Example Usage

```ts
const status = StatusEnum.Pending;

try {
  const { result, ...httpResponse } = await apiController.getItemsByStatus(status);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request, possibly due to an invalid status value. | `ApiError` |
| 404 | No items found for the given status. | `ApiError` |

