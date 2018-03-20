
# react-native-bugly

## Getting started

`$ npm install react-native-bugly --save`

### Mostly automatic installation

`$ react-native link react-native-bugly`

### 配置

#### iOS
使用Bugly的Info.plist配置初始化信息
Bugly支持读取Info.plist文件读取SDK初始化参数，可配置的参数如下：

- Appid
    - Key: BuglyAppIDString
    - Value: 字符串类型
- 渠道标识
    - Key: BuglyAppChannelString
    - Value: 字符串类型
- 版本信息
    - Key: BuglyAppVersionString
    - Value: 字符串类型
- 开启Debug信息显示
    - Key: BuglyDebugEnable
    - Value: BOOL类型


### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-bugly` and add `RNBugly.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNBugly.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android TODO
1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNBuglyPackage;` to the imports at the top of the file
  - Add `new RNBuglyPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-bugly'
  	project(':react-native-bugly').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-bugly/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-bugly')
  	```

## Usage
```javascript
import RNBugly from 'react-native-bugly';

// TODO: What to do with the module?
RNBugly;
```
