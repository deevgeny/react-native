# Hello World Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [Run app on your device](#run-app-on-your-device)
* [Run app on iPhone simulator](#run-app-on-iphone-simulator)
* [Run app on Android emulator](#run-app-on-android-emulator)


## Create new expo app project
```sh
# Create new mobile app project
npx create-expo-app@latest HelloWorld

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## Run app on your device

1. Run application to get QR code:
```sh
# Start application (QR code will be displayed)
npm start
```

2. Install Expo Go app on your device.

3. Connect to the same WiFi network with you device and computer.

4. Scan QR code to run app on your device.

## Run app on iPhone simulator
Only possible to run on iOS.

## Run app on Android emulator
1. Install [Android Studio](https://developer.android.com/studio).
2. Select: More actions -> Virtual Device Manager.
3. Select default device or create another virtual device (where the play store icon is displayed).
4. Select Android API level (latest API 34 or download required image).
5. Create new device.
5. Run the device.
6. Go back to VS code and press "a" to onep Android<br>
    Check that path is correct for linux `/home/username/Android/sdk`<br>
    Or setup correct path to environment variable `ANDROID_HOME`
7. It will install and start Expo Go on virtual device.

