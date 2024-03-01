import {View, Text, ScrollView, StyleSheet, Image, Button, Share, Linking} from 'react-native';

export const Divider = () => (
  <View style={{borderBottomWidth: 1, borderBottomColor: '#ddd'}} />
);

export const Spacer = ({space = 5 }) => <View style={{height: space}} />;

export const Center = ({children}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    {children}
  </View>
);

//-------------------Text-------------------
export const BlackText = ({color="black",children}) => (
  <Text
    style={{
      color: color,
    }}
    >
        {children}
    </Text>
)

export const GreyText = ({children}) => (
  <Text
    style={{
      color: '#4d4d4d',
    }}
    >
        {children}
</Text>
)

export const BoldText = ({color='black', children}) => (
  <Text
    style={{
      fontWeight: 'bold',
      color: color
    }}
    >
        {children}
</Text>
)

export const HeadingText = ({color='black', children}) => (
    <Text
      style={
        {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: color,
          }
      }
    >
        {children}
    </Text>
)


// ----------------------//
export const Row = ({justifyContent='space-between',alignItems='center', width, children}) => (
  <View style={{flexDirection:'row', justifyContent:justifyContent, alignItems:alignItems, width:width}}>{children}
  </View>
)

export const Column = ({children}) => (
  <View style={{flexDirection:'column'}}>
    {children}
    </View>
)


XMLHttpRequest
export const Section = ({label,rightSide, children}) => {
  return (
    <View
      style={{
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
      }}>
        <Row>
        <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
        }}>
               {label}
      </Text>

      {rightSide && <GreyText>{rightSide}</GreyText>}
        </Row>

     
      {children}
    </View>
  );
};
