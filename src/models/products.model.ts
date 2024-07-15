// product.model.ts
export interface Product {
  status: {
    code: number;
    message: string | null;
  };
  response: {
    productCategory: {
      productCategoryId: string;
      productCategoryName: string;
      productCategoryImage: string;
      wholeSale: boolean;
      retail: boolean;
      orderIndex: number;
    };
    subCategories: any; // Adjust this based on the actual structure of subCategories
  }[];
}
