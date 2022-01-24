export class CategoryModel {
    _id!: string;
    CategoryID!: string;
    CategoryName!: string;
    CategoryStatus!: string;
    CreatedDate!: string;
    ModifiedDate!: string;
}

export class ProductsModel {
    _id!: string;
    ProductID!: string;
    CategoryID!: string;
    ProductName!: string;
    UnitPrice!: string;
    UnitInStock!: string;
    ProductPicture!: string;
    CreatedDate!: string;
    ModifiedDate!: string;
}