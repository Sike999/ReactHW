export {};
declare global{
type CartType = {
    [key: string | number] : number
}
interface CardDataType {
    id : number,
    images : string[],
    make : string,
    model : string,
    price : number,
    isSpecialOffer? : boolean,
}
interface ProductType {
    id: number,
    category: string,
    make: string,
    model: string,
    price: number,
    images: string[],
    isSpecialOffer?: boolean,
    brand: string
}
type ProductsArrayType = ProductType[]
}