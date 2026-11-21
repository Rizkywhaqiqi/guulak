export type FoodItem = {
  id: string;
  name: string;
  descriptor: string;
  category: "Food" | "Drinks";
  image: string;
  alt: string;
  label: string;
};

export const foods: FoodItem[] = [
  {
    id: "food-01",
    name: "Your Signature Dish",
    descriptor: "Menu resmi Guulak akan hadir di sini.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    alt: "Ilustrasi makanan sementara, bukan produk resmi Guulak",
    label: "PLACEHOLDER 01",
  },
  {
    id: "food-02",
    name: "Your Crowd Favorite",
    descriptor: "Siapkan foto produk resmi berkualitas tinggi.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
    alt: "Ilustrasi makanan sementara, bukan produk resmi Guulak",
    label: "PLACEHOLDER 02",
  },
  {
    id: "drinks-01",
    name: "Your Favorite Drink",
    descriptor: "Nama dan kategori perlu dikonfirmasi.",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=85",
    alt: "Ilustrasi minuman sementara, bukan produk resmi Guulak",
    label: "PLACEHOLDER 03",
  },
];
