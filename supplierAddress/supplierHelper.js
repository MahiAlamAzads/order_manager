export default async function getSupplierNames(){
    const response = await fetch("http://localhost:3000/suppliers");
    const result = await response.json();
    return result;
}
