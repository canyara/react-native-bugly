
package com.bugly;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.tencent.bugly.crashreport.CrashReport;

public class RNBuglyModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNBuglyModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNBugly";
  }

  @ReactMethod
  public void setUserIdentifier(String userID) {
    CrashReport.setUserId(userID);
  }

  @ReactMethod
  public void updateAppVersion(String version) {
    CrashReport.setAppVersion(this.getReactApplicationContext(), version);
  }
}