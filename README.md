# react-native-bugly

## Getting started

`$ yarn add git+https://github.com/canyara/react-native-bugly.git`

### Mostly automatic installation

`$ react-native link react-native-bugly`

### 配置

#### iOS

使用 Bugly 的 Info.plist 配置初始化信息
Bugly 支持读取 Info.plist 文件读取 SDK 初始化参数，可配置的参数如下：

- Appid
  - Key: BuglyAppIDString
  - Value: 字符串类型
- 渠道标识
  - Key: BuglyAppChannelString
  - Value: 字符串类型
- 版本信息
  - Key: BuglyAppVersionString
  - Value: 字符串类型
- 开启 Debug 信息显示
  - Key: BuglyDebugEnable
  - Value: BOOL 类型

### Manual installation

#### iOS

node node_modules/react-native-bugly/scripts/postlink

#### Android

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

#### Android

AppDelegate.m

```objective-c
#import "RNBugly.h"
-(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //Add Bugly
  [RNBugly startWithAppId];
}
```

src/main/java/your_project/MainApplication

```java
import com.tencent.bugly.crashreport.CrashReport;

@Override
public void onCreate() {
  super.onCreate();
  //bugly
  CrashReport.initCrashReport(getApplicationContext());

  ...
}
```

```javascript
import RNBugly from "react-native-bugly";

RNBugly.updateAppVersion(version);
RNBugly.setUserIdentifier(userId);
```
