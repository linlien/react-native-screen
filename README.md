
# react-native-screen

## Getting started

`$ npm install react-native-screen --save`

### Mostly automatic installation

`$ react-native link react-native-screen`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-screen` and add `RNScreen.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNScreen.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.screen.RNScreenPackage;` to the imports at the top of the file
  - Add `new RNScreenPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-screen'
  	project(':react-native-screen').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-screen/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-screen')
  	```


## Usage
```javascript
import RNScreen from 'react-native-screen';

// TODO: What to do with the module?
RNScreen;
```
  