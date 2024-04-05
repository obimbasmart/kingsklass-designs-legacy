// @types product.d.ts


type ProductType = {
    id: string;
    img_url: string;
    price: string | number;
    estimated: number;
    name: string;
    created_at: string;
    description?: string;
  };
  