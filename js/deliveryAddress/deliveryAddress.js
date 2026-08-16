// import getSupplierNames from "./";

const DOM = {
    companyName: document.getElementById("companyName"),
    shippingAddress: document.getElementById("shippingAddress"),
    shippingMerchendiser: document.getElementById("shippingMerchendiser"),
    shippingContact: document.getElementById("shippingContact"),
};

const supplierNames = await getSupplierNames();

function searchSupplierById(id) {
    return supplierNames.filter((supplier) => {
        return supplier.id === id;
    });
}

const addOptionTOSupplierName = () => {
    const element = DOM.supplierName;
    supplierNames.forEach((supplier) => {
        const option = document.createElement("option");
        option.value = supplier.id;
        option.textContent = supplier.name;
        DOM.supplierName.appendChild(option);
    });
};
addOptionTOSupplierName();

DOM.supplierName.addEventListener("input", (e) => {
    const supplierValue = e.target.value;
    const data = searchSupplierById(supplierValue)[0];
    DOM.supplierAddress.value = data.address;
    DOM.supplierMerchendiser.value = data.merchandiser;
    DOM.supplierContact.value = data.contact;
});
