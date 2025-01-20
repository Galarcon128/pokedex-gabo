export default function updateLocalStorage() {
  const event = new CustomEvent("localStorageChange", {});
  window.dispatchEvent(event);
}
