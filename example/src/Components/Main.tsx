import React from 'react';
import './Main.css';
import { useState } from 'react';
import chroma from 'chroma-js';
import Identicon, { type IdenticonOptions, type RGBA } from '../../../src';

const Main: React.FC = () => {
  const [value, setValue] = useState<string>('Welcome');
  const [options, setOptions] = useState<IdenticonOptions>({
    size: 200,
    format: 'png',
    background: [255, 255, 255],
  });

  const addAlphaToRgb = (rgb: RGBA, alpha: number): RGBA => {
    return [rgb[0], rgb[1], rgb[2], alpha];
  };

  return (
    <main className="main">
      <div className="identicon">
        <Identicon value={value || 'default'} options={options} />
        <input
          name="value"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className="size">
          <label htmlFor="size">Size: </label>
          <select
            name="size"
            id="size"
            onChange={(e) => {
              setOptions({ ...options, size: parseInt(e.target.value) });
            }}
            defaultValue="200"
          >
            <option value="100">100 x 100 px</option>
            <option value="200">200 x 200 px</option>
            <option value="300">300 x 300 px</option>
            <option value="400">400 x 400 px</option>
          </select>
        </div>
        <div className="size">
          <label htmlFor="type">Format: </label>
          <select
            name="type"
            id="type"
            onChange={(e) => {
              setOptions({ ...options, format: e.target.value as 'png' | 'svg' });
            }}
            defaultValue="png"
          >
            <option value="png">PNG</option>
            <option value="svg">SVG</option>
          </select>
        </div>
      </div>
      <div className="ranges">
        <div className="range">
          <label htmlFor="saturation">Saturation: </label>
          <input
            type="range"
            name="saturation"
            id="saturation"
            min={1}
            defaultValue={70}
            onChange={(e) => {
              setOptions({ ...options, saturation: parseInt(e.target.value) / 100 });
            }}
          />
        </div>
        <div className="range">
          <label htmlFor="brightness">Brightness: </label>
          <input
            type="range"
            name="brightness"
            id="brightness"
            min={1}
            defaultValue={50}
            onChange={(e) => {
              setOptions({ ...options, brightness: parseInt(e.target.value) / 100 });
            }}
          />
        </div>
        <div className="range">
          <label htmlFor="margin">Margin: </label>
          <input
            type="range"
            name="margin"
            id="margin"
            min={1}
            defaultValue={8}
            onChange={(e) => {
              setOptions({ ...options, margin: parseInt(e.target.value) / 100 });
            }}
          />
        </div>
        <div className="range">
          <label htmlFor="margin">Foreground: </label>
          <input
            type="color"
            name="background"
            id="background"
            onChange={(e) => {
              setOptions({ ...options, foreground: chroma(e.target.value).rgb() });
            }}
          />
        </div>
        <div className="range opacity">
          <label htmlFor="foreground_opacity">Opacity: </label>
          <input
            type="range"
            name="foreground_opacity"
            id="foreground_opacity"
            defaultValue={255}
            max={255}
            onChange={(e) => {
              setOptions({
                ...options,
                foreground: options.foreground ? addAlphaToRgb(options.foreground, parseInt(e.target.value)) : undefined,
              });
            }}
          />
        </div>
        <div className="range">
          <label htmlFor="margin">Background: </label>
          <input
            type="color"
            name="background"
            id="background"
            defaultValue="#ffffff"
            onChange={(e) => {
              setOptions({ ...options, background: chroma(e.target.value).rgb() });
            }}
          />
        </div>
        <div className="range opacity">
          <label htmlFor="background_opacity">Opacity: </label>
          <input
            type="range"
            name="background_opacity"
            id="background_opacity"
            defaultValue={255}
            max={255}
            onChange={(e) => {
              setOptions({
                ...options,
                background: options.background ? addAlphaToRgb(options.background, parseInt(e.target.value)) : undefined,
              });
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
