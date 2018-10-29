cd $ANDROID_HOME/build-tools/27.0.3/

./zipalign -v 4 /home/andy/gamarra_firebase/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk gamarrax6.apk

cp gamarrax6.apk /home

cd /home/andy/MyIonicProject
