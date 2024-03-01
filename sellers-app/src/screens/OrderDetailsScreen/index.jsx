// OrderDetailsScreen.js

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Share,
  Linking,
} from 'react-native';

// Component for Rendering UI
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Assets
import PENDINGIMAGE from 'assets/images/PENDING.png';
import SEMICODIMAGE from 'assets/images/SEMICOD.png';
import PREPAIDIMAGE from 'assets/images/PREPAID.png';

// Components for rendering UI
import {
  Section,
  Column,
  Row,
  BlackText,
  GreyText,
  HeadingText,
  BoldText,
  Divider,
  Spacer,
} from 'ui-components';
const shareLink = async link => {
  console.log('links', link);
  try {
    await Share.share({
      message: 'Please use this payment link to complete your order:\n' + link,
    });
  } catch (error) {
    console.log(error);
  }
};

const shareWhatsapp = async (phone, link) => {
  let msg = 'Please use this payment link to complete your order:\n' + link;
  Linking.openURL(`https://api.whatsapp.com/send?phone=91${phone}&text=${msg}`);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  section: {
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
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
    width: 200,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  paymentStatusImage: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});
//----Screen----

const OrderDetailsScreen = ({route}) => {
  const {order} = route.params;

  return (
    <ScrollView>
      
      <Column>
        <HeadingText>Order #{order.id}</HeadingText>

        <CustomerDetails order={order} />

        <ShippingDetails order={order} />

        <Items order={order} />

        <InvoiceDetails order={order} />
      </Column>
    </ScrollView>
  );
};

//----Components----
const CustomerDetails = ({order}) => {
  const {fullname, email, phone} = {
    fullname: order.billing.first_name + ' ' + order.billing.last_name,
    email: order.billing.email,
    phone: order.billing.phone,
  };

  return (
    <Section label="Customer">
      <Row>
        <BlackText>{fullname}</BlackText>

        <Column>
          <Row>
            <MaterialCommunityIcons
              name="email"
              size={15}
              color="black"
              style={{marginRight: 5}}
            />
            <GreyText>{email}</GreyText>
          </Row>

          <Row justifyContent="flex-start">
            <MaterialCommunityIcons
              name="phone"
              size={15}
              color="black"
              style={{marginRight: 5}}
            />
            <GreyText>{phone}</GreyText>
          </Row>
        </Column>
      </Row>
    </Section>
  );
};
const ShippingDetails = ({order}) => {
  const {fullname, address, address2, email, city, state, postcode, country} = {
    fullname: order.billing.first_name + ' ' + order.billing.last_name,
    address: order.billing.address_1,
    address2: order.billing.address_2,
    city: order.billing.city,
    email: order.billing.email,
    state: order.billing.state,
    postcode: order.billing.postcode,
    country: order.billing.country,
  };
  return (
    <Section label="Shipping Details">
      <GreyText>{fullname}</GreyText>
      <GreyText>{address}</GreyText>
      {address2 !== '' && <GreyText>{address2}</GreyText>}
      <GreyText>{city}</GreyText>
      <GreyText>{state}</GreyText>
      <GreyText>{postcode}</GreyText>
      <GreyText>{country}</GreyText>
    </Section>
  );
};

const Items = ({order}) => {
  return (
    <Section label="Items">
      {order.line_items.map((item, idx, arr) => (
        <OrderItem key={item.id} item={item} idx={idx} arr={arr} />
      ))}
    </Section>
  );
};
const OrderItem = ({item, idx, arr}) => {
  const size = item.meta_data.find(m => m.key === 'pa_size')?.value;
  const color = item.meta_data.find(m => m.key === 'pa_color')?.value;

  return (
    <>
      <Spacer />

      <Row>
        <Row justifyContent="flex-start" width={200}>
          <Image source={{uri: item.image.src}} style={styles.image} />
          <Column>
            <BlackText>{item.name}</BlackText>
            <GreyText>
              {item.quantity} x ₹{item.price}
            </GreyText>
            {(color || size) && (
              <GreyText>
                {color ? `${color},` : ''} {size && size}
              </GreyText>
            )}
          </Column>
        </Row>

        <Row>
          <BlackText>₹{item.total}</BlackText>
        </Row>
      </Row>
      <Spacer />
      {idx !== arr.length - 1 && <Divider />}
    </>
  );
};

const InvoiceDetails = ({order}) => {
  const date = new Date(order.date_created).toDateString();
  console.log('date---->', order);
  const productTotal = order.line_items
    .reduce((total, item) => {
      const itemTotal = Number(item.total);
      return itemTotal + total;
    }, 0)
    .toFixed(2);

  return (
    <Section label="Invoice" rightSide={date}>
      <Row>
        <Column>
          <BlackText>#{order.id}</BlackText>
        </Column>
        {order.status === 'pending' ? (
          <Image source={PENDINGIMAGE} style={styles.paymentStatusImage} />
        ) : order.status === 'cancelled' ? (
          <Text>CANCELLED</Text>
        ) : order.status === 'processing' && order.fee_lines.length > 0 ? (
          <Image source={SEMICODIMAGE} style={styles.paymentStatusImage} />
        ) : (
          <Image source={PREPAIDIMAGE} style={styles.paymentStatusImage} />
        )}
      </Row>

      <Row>
        <BlackText>Product total</BlackText>
        <BlackText>₹{productTotal}</BlackText>
      </Row>

      <Row>
        <BlackText>Shipping</BlackText>
        <BlackText>+ ₹{order.shipping_total}</BlackText>
      </Row>
      <Divider />
      <Row>
        <BlackText>Sub Total</BlackText>
        <BlackText>₹{Number(productTotal) + Number(order.shipping_total)}</BlackText>
      </Row>

      {order.status === 'pending' && order.fee_lines.length > 0 ? (
        <>
          <Row>
            <BlackText>Cash on delivery</BlackText>
            <BlackText>₹{order.fee_lines[0].total * -1}</BlackText>
          </Row>
          <Row>
            <BlackText>Advance Payment</BlackText>
            <BlackText>₹{order.total}</BlackText>
          </Row>
          <Button
            title={`Share Payment Link of ₹${order.total}`}
            color="black"
            onPress={() =>
              shareWhatsapp(order.billing.phone, order.payment_url)
            }
          />
        </>
      ) : order.status === 'pending' && order.fee_lines.length === 0 ? (
        <>
          <Button
            title={`Share Payment Link of ₹${order.total}`}
            color="black"
            onPress={() =>
              shareWhatsapp(order.billing.phone, order.payment_url)
            }
          />
        </>
      ) : order.status === 'processing' && order.fee_lines.length > 0 ? (
        <>
          <Row>
            <BlackText>Cash on delivery</BlackText>
            <BlackText>₹{order.fee_lines[0].total * -1}</BlackText>
          </Row>
          <Row>
            <BlackText>Advance Payment</BlackText>
            <BlackText>₹{order.total}</BlackText>
          </Row>
        </>
      ) : order.status === 'processing' && order.fee_lines.length === 0 ? (
        <Row>
          <BlackText>Advance Payment</BlackText>
          <BlackText>₹{order.total}</BlackText>
        </Row>
      ) : null}
    </Section>
  );
};


export default OrderDetailsScreen;
