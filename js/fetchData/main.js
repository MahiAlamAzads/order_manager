export async function getSupplierNames(){
    const response = await fetch("http://localhost:3000/suppliers");
    const result = await response.json();
    return result;
}

export async function getCompanyDetails(){
    const response = await fetch("http://localhost:3000/company-sections");
    const result = await response.json();
    return result;
}

