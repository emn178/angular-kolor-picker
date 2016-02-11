# angular-kolor-picker
A tinyColorPicker plugin provides sampler function for Canvas.

## Download
[Compress JS](https://raw.github.com/emn178/angular-kolor-picker/master/build/angular-kolor-picker.min.js)  
[Uncompress JS](https://raw.github.com/emn178/angular-kolor-picker/master/src/angular-kolor-picker.js)

## Installation
You can also install angular-kolor-picker by using Bower.
```
bower install angular-kolor-picker
```

## Demo
[Demo](http://emn178.github.io/angular-kolor-picker/samples/demo/)

## Requirements
* [jQuery](http://jquery.com/)  
* [AngularJS](https://angularjs.org/)  
* [tinyColorPicker](https://github.com/PitPik/tinyColorPicker)  
* [color-sampler](https://github.com/emn178/color-sampler)  
* [kolor-picker](https://github.com/emn178/kolor-picker)  

## Usage
Add the ngKolorPicker module as a dependency to your application module:
```JavaScript
var myAppModule = angular.module('MyApp', ['ngKolorPicker'])
```

## ngKolorPicker
The ngKolorPicker directive allows you to specify element as a kolor-picker.

### Directive Info
This directive executes at priority level 0.

### Usage
as attribute:
```HTML
<div
  ng-kolor-picker="YOUR_OPTIONS">
```
### Arguments
| Param | Type | Details |
|:-----|:-------|-------|
|ngKolorPicker   |expression     |Expression to specify custom options to kolor-picker.    |

### Example
```HTML
<input
  ng-kolor-picker="{doRender: false, opacity: false}">
```
[See also](https://github.com/PitPik/tinyColorPicker#jqcolorpickerjs).

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/angular-kolor-picker  
Author: emn178@gmail.com
