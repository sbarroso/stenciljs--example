/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  ProgressBar as ProgressBar
} from './components/progress-bar/progress-bar';

declare global {
  interface HTMLProgressBarElement extends ProgressBar, HTMLElement {
  }
  var HTMLProgressBarElement: {
    prototype: HTMLProgressBarElement;
    new (): HTMLProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    "progress-bar": HTMLProgressBarElement;
  }
  interface ElementTagNameMap {
    "progress-bar": HTMLProgressBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "progress-bar": JSXElements.ProgressBarAttributes;
    }
  }
  namespace JSXElements {
    export interface ProgressBarAttributes extends HTMLAttributes {
      
        progress?: number
    }
  }
}


import {
  SliderComponent as MySlider
} from './components/slider/slider';

declare global {
  interface HTMLMySliderElement extends MySlider, HTMLElement {
  }
  var HTMLMySliderElement: {
    prototype: HTMLMySliderElement;
    new (): HTMLMySliderElement;
  };
  interface HTMLElementTagNameMap {
    "my-slider": HTMLMySliderElement;
  }
  interface ElementTagNameMap {
    "my-slider": HTMLMySliderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-slider": JSXElements.MySliderAttributes;
    }
  }
  namespace JSXElements {
    export interface MySliderAttributes extends HTMLAttributes {
      
        min?: number,
        max?: number,
        value?: number
    }
  }
}

