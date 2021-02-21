# react-jam-button
Login with jam react component

`npm i react-jam-button`

``` ts
import {JamLoginButton} from "react-jam-button";

//...

<JamLoginButton
    size="regular"
    shape="squared"
    lang="en"
    appId="YOUR APP ID"
    callback="YOUR CALLBACK URL" />
```

## Props :
 
| props |required| description | value | default |
|---|---|---| -----|---|
| `appId` | :heavy_check_mark: | Your application ID | string | **(required)** |
| `callback` | :heavy_check_mark: | Your callback url | string | **(required)** |
| `lang`      | :x: | Change the button language | string : `en`/`fr` | navigator setting or `en` |
| `shape`      | :x: | Change the button shape | string : `squared`/`rounded` | `squared` |
| `size`      | :x: | Change the button size | string : `small`/`regular`/`large` | `large` |
