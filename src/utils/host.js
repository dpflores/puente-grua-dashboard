var host = "";

export function setHost(newHost, port) {
  host = `${newHost}:${port}`;
}
export function getHostPath(path) {
  return `${host}/${path}`;
}
