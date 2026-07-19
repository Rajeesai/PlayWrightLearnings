function paymentType(PaymentMethod) {
    switch (PaymentMethod) {
        case "UPI":
            console.log("UPI Payment Method is accepted!");
            break;
        case "CreditCard":
            console.log("Creditcard Payment Method is accepted!");
            break;
        case "Paypal":
            console.log("Paypal Payment Method is accepted!");
            break;
        default:
            console.log("not a valid Payment Method ");
    }
}
paymentType("UPI");
paymentType("CreditCard");
paymentType("Paypal");
