import { getCompanyDetails } from "../fetchData/main.js";

const DOM = {
  companyName: document.getElementById("companyName"),
  shippingAddress: document.getElementById("shippingAddress"),
  shippingMerchendiser: document.getElementById("shippingMerchendiser"),
  shippingContact: document.getElementById("shippingContact"),
};

const companyDetails = await getCompanyDetails();

function searchCompanyById(id) {
  return companyDetails.filter((company) => {
    return company.id === id;
  });
}
function searchShippingByCompanyId(id) {
  return companyDetails.filter((company) => {
    return company.id === id;
  })[0];
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

const addOptionToCompanyShippingAddress = (idToFindShippingAddress) => {
  const element = DOM.shippingAddress;
  const shippingAddresses = searchShippingByCompanyId(
    idToFindShippingAddress,
  ).shippingDetails;
  element.innerHTML = `<option value="" selected disabled hidden>Select Option</option>`;
  shippingAddresses.forEach((shippingCAddress) => {
    const option = document.createElement("option");
    option.value = shippingCAddress.id;
    option.textContent = shippingCAddress.address;
    element.appendChild(option);
  });
};

const addOptionToMerchandier = (idToFindShippingAddress) => {
  const element = DOM.shippingAddress;
  const shippingAddresses = searchMerchByShippingAddressId(
    idToFindShippingAddress,
  ).shippingDetails;
  element.innerHTML = `<option value="" selected disabled hidden>Select Option</option>`;
  shippingAddresses.forEach((shippingCAddress) => {
    const option = document.createElement("option");
    option.value = shippingCAddress.id;
    option.textContent = shippingCAddress.address;
    element.appendChild(option);
  });
};

DOM.companyName.addEventListener("input", (e) => {
  const companyIdValue = e.target.value;
  DOM.shippingAddress.innerHTML = "";
  addOptionToCompanyShippingAddress(companyIdValue);
});

DOM.shippingAddress.addEventListener("input", (e)=>{

});
