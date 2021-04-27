const View = {
  target: document.querySelector('#clock'),
  init() {
    View.target.innerHTML = `
    <span>00:00</span>
    `
  }
}
export { View }