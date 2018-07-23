export function GET(url, body) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body
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

export function POST(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(data => console.log(data));
}

export function DEL(url, body) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(data => console.log(data));
}
