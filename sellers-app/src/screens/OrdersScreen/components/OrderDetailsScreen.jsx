// OrderDetailsScreen.js

import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Button, Share, Linking} from 'react-native';

// Component for Rendering UI
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Assets
import PENDINGIMAGE from 'assets/images/PENDING.png'
import SEMICODIMAGE from 'assets/images/SEMICOD.png'
import PREPAIDIMAGE from 'assets/images/PREPAID.png'

const shareLink = async (link) => {
   console.log('links', link)
  try {
    await Share.share({    message:
      'Please use this payment link to complete your order:\n' + link});
  } catch (error) {
    console.log(error);
  }
};

const shareWhatsapp = async (phone, link) => {

  let msg = 'Please use this payment link to complete your order:\n' + link
  Linking.openURL(`https://api.whatsapp.com/send?phone=91${phone}&text=${msg}`)
}
const Divider = () => <View style={{borderBottomWidth: 1,
  borderBottomColor: '#ddd',}} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  section: {
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    color:'black'

  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 2,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },
  productInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  paymentStatusImage: {
    width: 120,
    height: 40,
    resizeMode: 'contain' 

  }

});

// Extract order details into separate component


const InvoiceDetails = ({order}) => {

  const date = new Date(order.date_created).toDateString();
  console.log('date---->', order)
  const productTotal = order.line_items.reduce((total, item) => {
    const itemTotal = Number(item.total); 
    return itemTotal + total;
  }, 0).toFixed(2);
  
  return (
    <Section label="Invoice">
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
         <View>
         <Text>#{order.id}</Text>
      <Text>{date}</Text>
         </View>
  {
    order.status === 'pending' ?
<Image source={PENDINGIMAGE} style={styles.paymentStatusImage} />
  : order.status === 'cancelled' ? 
  <Text>CANCELLED</Text> 
  : order.status === 'processing' && order.fee_lines.length > 0 ?
<Image source={SEMICODIMAGE} style={styles.paymentStatusImage} />
 : <Image source={PREPAIDIMAGE} style={styles.paymentStatusImage} />
  }



        </View>
      

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Product total</Text>
        <Text>₹{productTotal}</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Shipping</Text>
        <Text>+ ₹{order.shipping_total}</Text>
      </View>
      <Divider />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Sub Total</Text>
        <Text>₹{Number(productTotal) + Number(order.shipping_total)}</Text>
      </View>

      {
    order.status === 'pending' && order.fee_lines.length > 0 ?
<>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Cash on delivery</Text>
        <Text>₹{order.fee_lines[0].total * -1}</Text>  
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Advance Payment</Text>
        <Text>₹{order.total}</Text>  
      </View>
      <Button title={`Share Payment Link of ₹${order.total}`} color='black' onPress={() => shareWhatsapp(order.billing.phone, order.payment_url)} />

   </>
   : order.status === 'pending' && order.fee_lines.length === 0 ?
   <>

  
   <Button title={`Share Payment Link of ₹${order.total}`} color='black' onPress={() => shareWhatsapp(order.billing.phone, order.payment_url)} />

   </>
  : order.status === 'processing' && order.fee_lines.length > 0 ?
<>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Cash on delivery</Text>
        <Text>₹{order.fee_lines[0].total * -1}</Text>  
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Advance Payment</Text>
        <Text>₹{order.total}</Text>  
      </View>
      </>
 : order.status === 'processing' && order.fee_lines.length === 0 ?
 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
 <Text>Advance Payment</Text>
 <Text>₹{order.total}</Text>  
</View>
: null
  }


     
    


    </Section>
  );

};

const CustomerDetails = ({order}) => {
   const {
    fullname,
    email,
    phone
   } = {
    fullname: order.billing.first_name + ' ' + order.billing.last_name,
    email:order.billing.email,
    phone: order.billing.phone
   }

  return (
 

<Section label="Customer">
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>

  <Text>
  {fullname}
  </Text>

<View >
  <View style={{flexDirection:'row', alignItems:'center'}}>
  <MaterialCommunityIcons
            name="email"
            size={15}
            color="black"
            style={{marginRight: 5 }}
          />
  <Text >
  {email}
  </Text>
  </View>

  <View style={{flexDirection:'row', alignItems:'center'}}>
  <MaterialCommunityIcons
            name="phone"
            size={15}
            color="black"
            style={{marginRight: 5 }}
          />
  <Text >
  {phone}
  </Text>
  </View>



</View>

  </View>
 

</Section>
  )
}
const ShippingDetails = ({order}) => {
  const {
    fullname,
    address,
    address2,
    email,
    city,
    state,
    postcode,
    country,
  
  } = {
    fullname: order.billing.first_name + ' ' + order.billing.last_name,
    address: order.billing.address_1,
    address2: order.billing.address_2,
    city: order.billing.city,
    email:order.billing.email,
    state: order.billing.state,
    postcode: order.billing.postcode,
    country: order.billing.country,
  }
  return (
  
     

      <Section label="Shipping Details">
        <Text>{fullname}</Text>
          <Text>{address}</Text>
         {address2 !== '' && <Text>{address2}</Text>} 
          <Text>{city}</Text>
          <Text>{state}</Text>
          <Text>{postcode}</Text>
          <Text>{country}</Text>

      </Section>

  );
};

// Extract order item into separate component
const OrderItem = ({item}) => {
  const size = item.meta_data.find(m => m.key === 'pa_size')?.value;
  const color = item.meta_data.find(m => m.key === 'pa_color')?.value;

  return (
    <View style={styles.item}>
      <View style={styles.productInfoContainer}>
        <Image source={{uri: item.image.src}} style={styles.image} />
        <View >
          <Text style={{color:'black'}}>{item.name}</Text>
          <Text >
            {item.quantity} x ₹{item.price}
          </Text>
          {(color || size) && (
            <Text>
              {color ? `${color},` : ''} {size && size}
            </Text>
          )}
        </View>
      </View>

      <Text style={{color:'black'}}>₹{item.total}</Text>
    </View>
  );
};

// Extract section into separate component
const Section = ({label, children}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

const OrderDetailsScreen = ({route}) => {
  const {order} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.heading}>Order #{order.id}</Text>

       <CustomerDetails order={order} />
        
        <ShippingDetails order={order} />

        <Section label="Items">
          {order.line_items.map(item => (
            <OrderItem key={item.id} item={item} />
            ))}
        </Section>
            <InvoiceDetails order={order} />
      </View>
    </ScrollView>
  );
};

export default OrderDetailsScreen;
