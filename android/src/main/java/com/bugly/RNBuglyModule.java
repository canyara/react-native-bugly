package com.bugly;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.tencent.bugly.Bugly;
import com.tencent.bugly.beta.Beta;
import com.tencent.bugly.crashreport.CrashReport;

public class RNBuglyModule extends ReactContextBaseJavaModule {

  public RNBuglyModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNBugly";
  }

  @ReactMethod
  public void checkUpgrade() {
    Log.i("ReactNative-bugly", "checkUpgrade()");
    Beta.checkUpgrade();
  }

  // 主动上报开发者 catch 的异常
  @ReactMethod
  public void postCatchedException(String str) {
    Log.i("ReactNative-bugly", "postCatchedException(): " + str);
    CrashReport.postCatchedException(new MyBuglyException(str));
  }

  public static void init(Context context, String appId, boolean isDebug) {
    Bugly.init(context, appId, isDebug);
  }

}