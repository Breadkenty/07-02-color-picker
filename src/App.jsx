import React, { Component } from 'react'
import { Slider } from './Slider'

class App extends Component {
  render() {
    return (
      <>
        <main>
          <div className="color-box-container">
            <div>
              <p>#33833d</p>
              <p>hsl(, 100%, 50%)</p>
            </div>
          </div>

          <div className="adjusters">
            <button value="random color">Random Color</button>
            <Slider
              className="slider-hue"
              sliderName="Hue"
              max="359"
              value="0"
            />

            <Slider
              class="slider-saturation"
              sliderName="Saturation"
              max="100"
              value="0"
            />

            <Slider
              class="slider-lightness"
              sliderName="Lightness"
              max="100"
              value="0"
            />

            <Slider
              class="slider-opacity"
              sliderName="Opacity"
              min="0"
              max="1"
              value="0"
            />
          </div>
        </main>
        <footer>
          <button className="copy-to-clipboard">
            <img src="/svg/sheet.svg" />
          </button>
          <h3>CSS:</h3>
          <hr />
          <code>
            <p>
              <span>background:</span>
              <span>rgb(2,0,36);</span>
            </p>
            <p>
              <span>background:</span>
              <span>rgba(51,131,82,1) 54%;</span>
            </p>
          </code>
        </footer>
      </>
    )
  }
}

export default App
