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

function searchMerchByShippingAddressId(id) {
  return companyDetails.filter((company) => {
    return company.id === id;
  })[0];
}
console.log(searchMerchByShippingAddressId("3NA-ADDR-001"));

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
  shippingAddresses.forEach((shippingAddress) => {
    const option = document.createElement("option");
    option.value = shippingAddress.id;
    option.textContent = shippingAddress.address;
    element.appendChild(option);
  });
};

const addOptionToMerchandiser = (idToFindAddresses, idToFindMerch) => {
  const element = DOM.shippingMerchendiser;
  const addresses =
    searchShippingByCompanyId(idToFindAddresses).shippingDetails;
  console.log("addOptionToMerchandiser:", addresses[0].merchandiser);
  console.log("idToFindMerch", idToFindMerch);
  const merchandisers = addresses.filter(
    (address) => address.id === idToFindMerch,
  )[0].merchandiser;

  element.innerHTML = `<option value="" selected disabled hidden>Select Option</option>`;
  merchandisers.forEach((merchandiser) => {
    const option = document.createElement("option");
    option.value = merchandiser.id;
    option.textContent = merchandiser.name;
    element.appendChild(option);
  });
};

DOM.companyName.addEventListener("input", (e) => {
  const companyIdValue = e.target.value;
  DOM.shippingAddress.innerHTML = "";
  addOptionToCompanyShippingAddress(companyIdValue);
});

// when adding real database one of the best option to query shipping address directly by id
DOM.shippingAddress.addEventListener("input", (e) => {
  const shippingAddressValue = e.target.value;
  const companyValue = document.getElementById("companyName").value;
  DOM.shippingMerchendiser.innerHTML = "";
  addOptionToMerchandiser(companyValue, shippingAddressValue);
});
