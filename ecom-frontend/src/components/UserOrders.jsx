/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import api from "../api/api";
const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserOrders = async () => {
      try {
        // Use your shared api instance here
        const res = await api.get('/orders/user');
        setOrders(res.data);
      } catch (error) {
        console.error("Failed to fetch user orders", error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchUserOrders();
  }, []);

  if (loading) return <div className="flex justify-center mt-10"><CircularProgress /></div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Typography variant="h4" className="mb-6 text-center">Your Orders</Typography>
      {orders.length === 0 ? (
        <Typography>No orders found.</Typography>
      ) : (
        orders.map((order) => (
          <Card key={order.orderId} className="mb-4 shadow-md">
            <CardContent>
              <Typography variant="h6">Order ID: {order.orderId}</Typography>
              <Typography>Date: {order.orderDate}</Typography>
              <Typography>Status: {order.orderStatus}</Typography>
              <Typography>Total Amount: ${order.totalAmount}</Typography>
              <Typography variant="subtitle1" className="mt-3">Items:</Typography>
              {order.orderItems.map((item) => (
                <div key={item.orderItemId} className="flex gap-4 items-center my-2">
                  <img
                    src={`http://localhost:8080/images/${item.product.image}`}
                    alt={item.product.productName}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <Typography>{item.product.productName}</Typography>
                    <Typography>Quantity: {item.quantity}</Typography>
                    <Typography>Price: ${item.orderedProductPrice}</Typography>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default UserOrders;
