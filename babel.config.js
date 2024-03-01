module.exports = {
  presets: ['module:@react-native/babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "components": "./sellers-app/src/components",
          "screens": "./sellers-app/src/screens",
          "utils": "./sellers-app/src/utils",
          "clientBrandingStyles": "./sellers-app/src/Theme/ClientBrandingStyles",
          "assets": "./sellers-app/src/assets",
          "store": "./sellers-app/src/store",
          "getData": "./sellers-app/src/store/GetStateData",
          "ui-components": "./sellers-app/src/ui-components"
          // Add more aliases here
        }
      }
    ],
    'react-native-reanimated/plugin',
  ]
};
