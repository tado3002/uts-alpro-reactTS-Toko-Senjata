import { Product } from "../models/Product";

export function sortAscending(data: Product[]): Product[] {
  // mencari panjang data
  const lenData = data.length;
  // membuat perulangan data pertama
  for (let i = 0; i < lenData; i++) {
    // membuat perulangan data ke dua
    for (let j = i + 1; j < lenData; j++) {
      // tukar posisi jika harga data pertama > kedua
      if (data[i].price > data[j].price) {
        [data[i], data[j]] = [data[j], data[i]];
      }
    }
  }

  return data;
}

export function sortDecending(data: Product[]): Product[] {
  // mencari panjang data
  const lenData = data.length;
  // membuat perulangan data pertama
  for (let i = 0; i < lenData; i++) {
    // membuat perulangan data ke dua
    for (let j = i + 1; j < lenData; j++) {
      // tukar posisi jika harga data pertama < kedua
      if (data[i].price < data[j].price) {
        [data[i], data[j]] = [data[j], data[i]];
      }
    }
  }

  return data;
}
