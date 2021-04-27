const View = {
  target: document.querySelector('#clock'),
  render({minutes, seconds}) {
    View.target.innerHTML = `
    <span>${minutes}:${seconds}</span>
    `
  }
}
export { View }