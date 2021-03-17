export function getList(value) {
  return fetch(`/api/users?value=${value}`)
    .then((res) => res.json())
    .catch((err) => err.log);
}
