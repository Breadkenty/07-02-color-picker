import React, { Component } from 'react'
import { Code } from './Code'

class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 359),
    saturation: Math.floor(Math.random() * 101),
    lightness: Math.floor(Math.random() * 101),
    opacity: 1,
    clipboard: '',
  }
  changeHueBasedOnLightness() {
    if (this.state.lightness < 50) {
      return 'white'
    }
  }
  handleChangeHue = event => {
    this.setState({ hue: event.target.value })
  }

  handleChangeSaturation = event => {
    this.setState({ saturation: event.target.value })
  }

  handleChangeLightness = event => {
    this.setState({ lightness: event.target.value })
  }

  handleChangeOpacity = event => {
    this.setState({ opacity: event.target.value })
  }

  generateRandomColor = event => {
    this.setState({
      hue: Math.floor(Math.random() * 359),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101),
    })
  }

  copyToClipboard = event => {
    const copyText = document.querySelector('.code span')
    console.log(copyText.textContent)
  }
  render() {
    return (
      <>
        <main>
          <div className="color-box-container">
            <div
              style={{
                backgroundColor: `hsla(${this.state.hue}, ${this.state.saturation}%,
                ${this.state.lightness}%, ${this.state.opacity})`,
              }}
            >
              <p style={{ color: `'${this.changeHueBasedOnLightness}'` }}>
                #33833d
              </p>
              <p>
                hsla({this.state.hue}, {this.state.saturation}%,{' '}
                {this.state.lightness}%, {this.state.opacity})
              </p>
            </div>
          </div>

          <div className="adjusters">
            <button onClick={this.generateRandomColor} value="random color">
              Random Color
            </button>
            <p>Hue</p>
            <input
              onChange={this.handleChangeHue}
              className="slider-hue"
              type="range"
              min="0"
              max="359"
              value={this.state.hue}
            />

            <p>Saturation</p>
            <input
              onChange={this.handleChangeSaturation}
              className="slider-saturation"
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
            />

            <p>Lightness</p>
            <input
              onChange={this.handleChangeLightness}
              className="slider-lightness"
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
            />

            <p>Opacity</p>
            <input
              onChange={this.handleChangeOpacity}
              className="slider-opacity"
              type="range"
              min="0"
              max="1"
              step="0.001"
              value={this.state.opacity}
            />
          </div>
        </main>
        <footer>
          <button onClick={this.copyToClipboard} className="copy-to-clipboard">
            <img src="/svg/sheet.svg" />
          </button>
          <h3>CSS:</h3>
          <hr />
          <code>
            <Code
              cssPropertyName="background"
              cssPropertyValue={`hsla(${this.state.hue}, ${this.state.saturation}
                %, ${this.state.lightness}%, ${this.state.opacity})`}
            />
          </code>
        </footer>
      </>
    )
  }
}

export default App
