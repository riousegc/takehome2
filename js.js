
// TASK A
const customerName = "John Doe";
const phoneNumber = "08012345678";
let isRegistered = true;
let airtimeBalance = 500;
const selectedBundleCode = 1; 

console.log("--- CUSTOMER DETAILS ---");
console.log("Name: " + customerName);
console.log("Phone: " + phoneNumber);
console.log("Balance: NGN " + airtimeBalance);
console.log("Selected Bundle: " + selectedBundleCode);
console.log("------------------------");



// TASK B

let bundlePrice = 0;
let bundleData = "";
let isValidBundle = true;

switch (selectedBundleCode) {
  case 1:
    bundleData = "500MB";
    bundlePrice = 200;
    break;
  case 2:
    bundleData = "1GB";
    bundlePrice = 350;
    break;
  case 3:
    bundleData = "2GB";
    bundlePrice = 600;
    break;
  case 4:
    bundleData = "5GB";
    bundlePrice = 1500;
    break;
  default:
    console.log("ERROR: Invalid bundle code selected.");
    isValidBundle = false;
    break;
}



// TASK C


if (isValidBundle === false) {
  console.log("Transaction Failed: Invalid bundle.");
} 
else if (airtimeBalance < 0) {
  console.log("Transaction Failed: Invalid balance. Balance cannot be negative.");
} 
else if (isRegistered === false) {
  console.log("Transaction Failed: Customer is not registered.");
} 
else if (airtimeBalance < bundlePrice) {
  console.log("Transaction Failed: Insufficient airtime. You need NGN " + bundlePrice + " but you only have NGN " + airtimeBalance + ".");
} 
else {
  
  airtimeBalance = airtimeBalance - bundlePrice; 
  
  console.log("--- PURCHASE SUCCESSFUL ---");
  console.log("Customer: " + customerName);
  console.log("Bundle: " + bundleData);
  console.log("Amount Deducted: NGN " + bundlePrice);
  console.log("Remaining Balance: NGN " + airtimeBalance);
}

