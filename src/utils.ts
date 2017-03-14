export function unreachable(x: never): never {
  throw 'Unreachable code';
}

export function uuid(): number {
  return Math.floor(+new Date() + Math.random() * 0xffffffff);
}

export type Endpoint = {
  url: String,
  method: 'GET' | 'POST' | 'DELETE',
};

export async function apiRequest(endpoint: Endpoint, data: Object = {}): Promise<Object> {
  const response = await fetch(`https://ssp-stage.dev.architech.nyc/${endpoint.url}`,
    endpoint.method !== 'GET' ?
    {
      method: endpoint.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        body: undefined,
      },
      body: data ? JSON.stringify(data) : undefined,
    }
    : undefined,
  );

  const responseData: Object = response.status === 204 // NO ceontent status
    ? {}
    : await response.json();

  if (response.status === 403 || response.status === 401) {
    console.error('403 or 401');
  }

  if (!response.ok) {
    throw responseData;
  }

  return responseData;
}