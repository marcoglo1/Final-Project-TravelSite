//TODO Load picture from selection on home page

const firstNameElement = document.getElementById("fname");
const lastNameElement = document.getElementById("lname");
const phoneNumberElement = document.getElementById("phoneNumber");
const creditCardNumberElement = document.getElementById("creditCardNumber");
const emailAddressElement = document.getElementById("emailAddress");

// TODO: 
const isValidData = (firstName, lastName, phoneNumber, creditCardNumber, emailAddress) => {
  return true;
};

function purchaseSubmitButtonHandler() {
  const firstName         = firstNameElement.value;
  const lastName          = lastNameElement.value;
  const phoneNumber       = phoneNumberElement.value;
  const creditCardNumber  = creditCardNumberElement.value;
  const emailAddress      = emailAddressElement.value;

  if(isValidData(firstName, lastName, phoneNumber, creditCardNumber, emailAddress)) {
    // TODO: find better design for getting current ID initialized and to not require loading from all orders from database
    controller.loadPurchaseOrdersFromLocalStorage();
    controller.addPurchaseOrder(firstName, lastName, phoneNumber, creditCardNumber, emailAddress);
    controller.saveOrdersToDataStore();

  };

}

const deleteAllPurchseOrders = () => {
  // Remove travel packages from the data store, and the controller, to prevent duplicates from
  // being stored. Duplicates would otherwise occur when writing sample data below each time a
  // user clicks button "Load Sample Data".
  controller.removeAllPurchaseOrdersFromDataStore();

  // clearRenderedTravelPackages();
}



const controller =  new purchaseOrdersController();


const testAddPurchaseOrder = () => {
  deleteAllPurchseOrders();

  controller.loadPurchaseOrdersFromLocalStorage();
  controller.addPurchaseOrder("Amber", "Biggart", "123-456-7897", "987654321", "email@email.com");
  controller.addPurchaseOrder("Emma", "Biggart", "123-456-7897", "987654321", "email@email.com");
  controller.addPurchaseOrder("Cody", "Biggart", "123-456-7897", "987654321", "email@email.com");
  controller.saveOrdersToDataStore();


}
// TODO: delete test
// testAddPurchaseOrder();