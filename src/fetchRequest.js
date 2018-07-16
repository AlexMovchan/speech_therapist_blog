export function GET(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  })
    .then(data => data.json());
}

export function PUT(url, body) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(data => console.log(data));
}
