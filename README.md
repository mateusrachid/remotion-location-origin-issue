### Minimal reproduction of [remotion-dev/remotion #3502](https://github.com/remotion-dev/remotion/issues/3502)

#### Reference / working scenario

```
$ npm install
$ npm start
```


At `http://localhost:3000`, both native video element and the Remotion composition within `Player` render normally.

#### Reproduction / broken scenario

```
$ npm install
$ npm run build
```

Open `./build/index.html` in a browser. Native video element renders normally but the Remotion composition crashes when the document is loaded from the `file:` protocol.
