document
  .getElementById("checkout-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the payment details from the form
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    // Make an API call to BudPay's payment endpoint
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
    };

    // Perform an AJAX request or use a library like Axios to make the API call
    axios
      .post(
        "https://paymentlink.api.budpay.ng/paymentlink/v2/payLinks/api",
        paymentData,
        {
          headers: {
            Authorization: "Bearer pk_test",
          },
        }
      )
      .then(function (response) {
        // Payment successful, handle the response
        console.log("Payment successful:", response.data);
      })
      .catch(function (error) {
        // Payment failed, handle the error
        console.error("Payment failed:", error.response.data);
      });
  });
