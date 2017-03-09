import './styles/image_viewer.css'
import big from './assets/big.jpg'
import small from './assets/small.jpg'

export default () => {
  const smallImage = document.createElement('img')
  smallImage.src = small

  document.body.appendChild(smallImage)
}
