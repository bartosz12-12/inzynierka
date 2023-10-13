export interface IWarehouse {
    id?: number;
    name: string;
    description: string;
    manufacturer: string;
    unitOfMeasurement: string;
    catalogNumber:string;
    quantityInStock: string;
    purchaseDate: Date;
    deliveryDate:Date;
    expiryDate:Date;
    category:string;
    minimumStockLevel:number;
  }