import { StyleSheet } from "react-native";

//What to Change?
//

const styles = StyleSheet.create({

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',

  },
  categoryWrapper: {
    alignItems: 'center', // Center the items vertically
    margin: 10,
  },
  categoryItem: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 50, // Make it half of width and height to get a circle
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryText: {
    marginTop: 8, // Add space between the image and text
    color: '#333',
  },
});

  export default styles