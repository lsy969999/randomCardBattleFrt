package l.sy.randomcardbattle.modules;

import android.util.Log;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SampleModule extends ReactContextBaseJavaModule {
    private static final String TAG = "SampleModule";
    public SampleModule(ReactApplicationContext context){
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "SampleModule";
    }

    @ReactMethod
    public void sampleCall(String name, Promise promise){
        Log.d(TAG, "sampleCall: name: " + name);
        Integer eventId = 123;
        try{
            if(Integer.parseInt(name)%2 == 0){
                throw new RuntimeException("a");
            }
            promise.resolve(eventId);
        } catch (Exception e){
            Log.e(TAG, "sampleCall: ERROR" + e.getMessage());
            promise.reject("Sampl1", "Sampl2", e);
        }

    }
}
