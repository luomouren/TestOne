package com.testone;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import io.realm.react.RealmReactPackage;
import io.realm.react.RealmReactPackage;
import io.realm.react.RealmReactPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.imagepicker.ImagePickerPackage; // import package
import com.reactnativecomponent.swiperefreshlayout.RCTSwipeRefreshLayoutPackage;    //import package
import java.util.Arrays;
import java.util.List;

import io.realm.react.RealmReactPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RealmReactPackage(),
            new ImagePickerPackage(),
			 new RCTSwipeRefreshLayoutPackage()  //register Module
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
