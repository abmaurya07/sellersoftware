import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    leftHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 35,
      height: 30,
      resizeMode: 'stretch',
      marginTop: 5,
      
    },
    icon: {
      marginRight: 12, // Add spacing between icons
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 15,
      marginTop: 10,
      marginBottom: 20,
      backgroundColor: '#f2f2f2',
      borderRadius: 20,
      padding: 10,
    },
    searchInput: {
      flex: 1,
      paddingHorizontal: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginVertical: 16,
    },
  });

  export default styles