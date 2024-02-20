import { StyleSheet } from "react-native";

//What to Change?
//

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 10,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40, // Half the width/height to make it circular
      marginRight: 20,
    },
    statsContainer: {
      alignItems: 'center',
    },
    statsCount: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    statsLabel: {
      fontSize: 14,
      color: 'grey',
    },
    bio: {
      marginTop: 10,
      fontSize: 14,
      textAlign: 'center',
    },
  });

  export default styles
