import { StyleSheet } from "react-native";

//What to Change?
//
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    tab: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: '#000',
    },
    tabText: {
      fontSize: 16,
      color: '#666',
    },
    activeTabText: {
      fontWeight: 'bold',
      color: '#000',
    },
    contentContainer: {
      padding: 10,
    },
  });
  
  export default styles
