
package com.bugly;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.tencent.bugly.Bugly;
import com.tencent.bugly.beta.Beta;

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

  public static void init(Context context, String appId, boolean isDebug) {
    Bugly.init(context, appId, isDebug);
  }

}