export function validEmailFormat(email: string) {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(email);
}

export function splitCamelCase(input: string): string {
  return input.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (str) => str.toUpperCase());
}

export function smoothScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
