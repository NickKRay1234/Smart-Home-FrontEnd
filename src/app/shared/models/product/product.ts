export interface Product {
  productId: number;
  productName: string;
  productCode: number;
  productPrice: number;
  productDiscount: number;
  priceWithDiscount: number;
  isAvailable: boolean;
  quantityInStock: number;
  productUrl: string;
  productDescription: string;
  images: Images[];
}

interface Categories {
  categoryId: number;
  categoryName: string;
  url: string;
  isSubCategory: boolean;
  products: string[];
}

interface Images {
  imageId: number;
  filename: string;
  fileExtension: string;
  title: string;
  imageUrl: string;
  dateCreated: Date;
  productId: number;
}

interface Characteristics {
  characteristicId: number;
  productCharacteristicName: string;
  productCharacteristicDescription: string;
  productId: number;
}

interface Comments {
  commentId: number;
  commentText: string;
  commentUsername: string;
  commentUsersurname: string;
  commentPublishedAt: Date;
  repliesToComment: [
    {
      replyId: number;
      replyText: string;
      replyUsername: string;
      replyUsersurname: string;
      replyPublishedAt: Date;
    }
  ];
}

export type ProductRes = {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Product[];
};
