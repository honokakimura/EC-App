/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {OrderDetail} from "@prisma/client";
import {orders} from "./order";
import {products} from "./products";

export const orderDetails: OrderDetail[] = [
  {
    id: 1,
    productId: 1,
    orderId: 1,
    price: products.find(product => product.id === 1)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 1)!.createdAt,
    updatedAt: orders.find(order => order.id === 1)!.updatedAt,
  },
  {
    id: 2,
    productId: 2,
    orderId: 1,
    price: products.find(product => product.id === 2)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 1)!.createdAt,
    updatedAt: orders.find(order => order.id === 1)!.updatedAt,
  },
  {
    id: 3,
    productId: 3,
    orderId: 1,
    price: products.find(product => product.id === 3)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 1)!.createdAt,
    updatedAt: orders.find(order => order.id === 1)!.updatedAt,
  },
  {
    id: 4,
    productId: 1,
    orderId: 2,
    price: products.find(product => product.id === 1)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 2)!.createdAt,
    updatedAt: orders.find(order => order.id === 2)!.updatedAt,
  },
  {
    id: 5,
    productId: 2,
    orderId: 2,
    price: products.find(product => product.id === 2)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 2)!.createdAt,
    updatedAt: orders.find(order => order.id === 2)!.updatedAt,
  },
  {
    id: 6,
    productId: 3,
    orderId: 2,
    price: products.find(product => product.id === 3)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 2)!.createdAt,
    updatedAt: orders.find(order => order.id === 2)!.updatedAt,
  },
  {
    id: 7,
    productId: 1,
    orderId: 3,
    price: products.find(product => product.id === 1)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 3)!.createdAt,
    updatedAt: orders.find(order => order.id === 3)!.updatedAt,
  },
  {
    id: 8,
    productId: 2,
    orderId: 3,
    price: products.find(product => product.id === 2)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 3)!.createdAt,
    updatedAt: orders.find(order => order.id === 3)!.updatedAt,
  },
  {
    id: 9,
    productId: 3,
    orderId: 3,
    price: products.find(product => product.id === 3)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 3)!.createdAt,
    updatedAt: orders.find(order => order.id === 3)!.updatedAt,
  },
  {
    id: 10,
    productId: 1,
    orderId: 4,
    price: products.find(product => product.id === 1)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 4)!.createdAt,
    updatedAt: orders.find(order => order.id === 4)!.updatedAt,
  },
  {
    id: 11,
    productId: 2,
    orderId: 4,
    price: products.find(product => product.id === 2)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 4)!.createdAt,
    updatedAt: orders.find(order => order.id === 4)!.updatedAt,
  },
  {
    id: 12,
    productId: 3,
    orderId: 4,
    price: products.find(product => product.id === 3)!.price,
    quantity: 1,
    createdAt: orders.find(order => order.id === 4)!.createdAt,
    updatedAt: orders.find(order => order.id === 4)!.updatedAt,
  },
];
