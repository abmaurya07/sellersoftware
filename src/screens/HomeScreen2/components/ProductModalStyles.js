import { StyleSheet } from "react-native";

//What to Change?
//

const styles = StyleSheet.create({

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  storeInfo: {
    width: '100%',
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center children vertically in the container
    justifyContent: 'space-between', // Center children horizontally in the container
    padding: 2, // Add some padding around the content
    // Add additional styling as needed
  },
  heartIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -50, // Adjust to center the icon on the image
    marginLeft: -50, // Adjust to center the icon on the image
  },
  storeImage: {
    width: 30, // Set the width of the image
    height: 30, // Set the height of the image
    borderRadius: 15, // Make the image circular
    marginRight: 8, // Add some margin to the right of the image
    // Add additional styling as needed
    
  },
  storeName: {
    fontWeight: 'bold', // Make the store name bold
    fontSize: 12, // Increase the font size
    color: '#000'
  },
  storeInfo: {
    width: '100%',
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center children vertically in the container
    justifyContent: 'space-between', // Center children horizontally in the container
    padding: 2, // Add some padding around the content
    // Add additional styling as needed
  },
  image: {
    width: '100%', // specify a width
    height: '100%', // specify a height
    resizeMode: 'contain'     
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject, // This will make the backdrop cover the whole screen
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust color and opacity to your liking
  },
  
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8, // Adjust the margin as needed
  },
  dot: {
    width: 8, // Dot size
    height: 8, // Dot size
    borderRadius: 4, // Half of the width/height to make it circular
    marginHorizontal: 4, // Spacing between dots
  },
  activeDot: {
    backgroundColor: '#111', // Active dot color
  },
  inactiveDot: {
    backgroundColor: '#999', // Inactive dot color
  },
  salePriceText: {
    fontWeight: 'bold',
    fontSize: 16, 
    marginVertical: 10,
    color: '#000'

  },
  regularPriceText: {
    fontWeight: 'bold',
    fontSize: 14, 
    marginVertical: 10,
    textDecorationLine: 'line-through',

  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16, 
    marginVertical: 10,
    color: '#000'
  },
  viewReviewsText: {
    color: 'blue',
    marginTop: 10
  }

  

});

  export default styles