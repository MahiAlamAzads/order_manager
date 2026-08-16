import { getCompanyDetails } from "../fetchData/main.js";

const DOM = {
  companyName: document.getElementById("companyName"),
  shippingAddress: document.getElementById("shippingAddress"),
  shippingMerchendiser: document.getElementById("shippingMerchendiser"),
  shippingContact: document.getElementById("shippingContact"),
};

const companyDetails = await getCompanyDetails();
console.log(companyDetails);
function searchCompanyById(id) {
  return companyDetails.filter((company) => {
    return company.id === id;
  });
}

const addOptionToCompanyName = () => {
  const element = DOM.companyName;
  companyDetails.forEach((company) => {
    const option = document.createElement("option");
    option.value = company.id;
    option.textContent = company.name;
    element.appendChild(option);
  });
};

addOptionToCompanyName();

const addOptionToCompanyShippingAddress = () => {
  const element = DOM.shippingAddress;
  companyDetails.shippingAddress.forEach((address) => {
    const option = document.createElement("option");
    option.value = address;
    option.textContent = company.name;
    element.appendChild(option);
  });
};

// addOptionToCompanyShippingAddress();

DOM.companyName.addEventListener("input", (e) => {
  const companyIdValue = e.target.value;
  const data = searchCompanyById(companyIdValue)[0];
  console.log(data);
  DOM.shippingAddress.value = data.address;
  DOM.shippingMerchendiser.value = data.merchandiser;
  DOM.shippingContact.value = data.contact;
});
