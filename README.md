you can install and download the certbot-auto client:
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
./certbot-auto (it will install everything needed on first start)


export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
export GRADLE_HOME=/home/andy/Escritorio/android-studio-ide-173.4819257-linux/android-studio/gradle/gradle-4.4
export PATH=$PATH:$GRADLE_HOME/bin

keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android


Nombre de Alias: androiddebugkey
Fecha de Creación: 01/07/2018
Tipo de Entrada: PrivateKeyEntry
Longitud de la Cadena de Certificado: 1
Certificado[1]:
Propietario: C=US, O=Android, CN=Android Debug
Emisor: C=US, O=Android, CN=Android Debug
Número de serie: 1
Válido desde: Sun Jul 01 09:20:18 PET 2018 hasta: Tue Jun 23 09:20:18 PET 2048
Huellas digitales del certificado:
	 MD5: 0B:B7:C9:9E:25:62:6A:48:98:EA:00:76:B9:FD:E7:BD
	 SHA1: DF:BB:B9:9C:13:E8:93:4B:86:53:5B:AF:C7:4E:81:59:A0:F3:A1:81
	 SHA256: 79:46:53:87:FF:E2:67:0F:81:A7:2D:13:8D:5A:65:DF:FE:7D:6A:9D:76:45:F3:8C:1B:4A:59:02:C3:70:CD:DC
Nombre del algoritmo de firma: SHA1withRSA
Algoritmo de clave pública de asunto: Clave RSA de 2048 bits
Versión: 1

Warning:
El almacén de claves JKS utiliza un formato propietario. Se recomienda migrar a PKCS12, que es un formato estándar del sector que utiliza "keytool -importkeystore -srckeystore /root/.android/debug.keystore -destkeystore /root/.android/debug.keystore -deststoretype pkcs12".
root@Codigito:~/.android# 
keytool -exportcert -keystore path-to-debug-or-production-keystore -list -v



jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore /home/andy/MyIonicProject/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name



./zipalign -v 4 /home/andy/MyIonicProject/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk run.apk





