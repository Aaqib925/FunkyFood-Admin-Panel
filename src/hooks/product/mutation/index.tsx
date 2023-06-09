import { Product } from "@/pages/dashboard/products";
import { Post } from "@/utils/apiService";
import { useMutation } from "@tanstack/react-query";


const updateProductAction = async (body: Product) => {
  return Post({
    url: '/updatedProduct',
    body,
  })
}

// Sends verification code to the phone number
export const useUpdateProduct = () => {
  return useMutation((body: Product) => updateProductAction(body))
}


const addProductAction = async (body: Partial<Product>) => {
  return Post({
    url: '/addProduct',
    body,
  })
}


export const useAddProduct = () => {
  return useMutation((body: Partial<Product>) => addProductAction(body))
}