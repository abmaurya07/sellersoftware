module.exports = {
  presets: ['module:@react-native/babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "components": "./src/components",
          "screens": "./src/screens",
          "utils": "./src/utils",
          "clientBrandingStyles": "./src/Theme/ClientBrandingStyles",
          "assets": "./src/assets",
          // Add more aliases here
        }
      }
    ]
  ]
};
