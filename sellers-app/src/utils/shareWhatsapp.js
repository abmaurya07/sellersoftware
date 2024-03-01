export const shareWhatsapp = async (phone, link) => {

    let msg = 'Please use this payment link to complete your order:\n' + link
    Linking.openURL(`https://api.whatsapp.com/send?phone=91${phone}&text=${msg}`)
  }