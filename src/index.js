const button = document.createElement('button')
button.textContent = 'Click Me'
button.addEventListener('click', () => {
  System.import('./image_viewer').then(module => {
    module.default()
  })
})

document.body.appendChild(button)
