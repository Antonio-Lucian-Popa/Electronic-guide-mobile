import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.asusoftware.app',
  appName: 'electronic-guide',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'myapp', // Configurat pentru schema personalizată
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#A34C04",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
