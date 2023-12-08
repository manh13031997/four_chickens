package com.example.controller;

import com.example.model.User;
import com.example.model.entity.OrderDetail;
import com.example.model.entity.Orders;
import com.example.model.entity.Product;
import com.example.model.entity.StatusBuy;
import com.example.service.UserService;
import com.example.service.webService.OrderDetailService;
import com.example.service.webService.OrderService;
import com.example.service.webService.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private ProductService productService;
    @Autowired
    private OrderDetailService orderDetailService;
    @Autowired
    private UserService userService;

    //thêm sản phẩm vào giỏ hàng.
    @PostMapping("/addToCart/{userId}")
    public ResponseEntity<?> addOrder(@PathVariable Long userId, @RequestBody OrderDetail orderDetail) {
        Optional<Product> product = productService.findById(orderDetail.getProduct().getId());
        Optional<Orders> orders = orderService.findByUserIdAndStatusBuyId(userId, 1L);
        Orders orders1;
        if (orders.isPresent()) {
            orders1 = orders.get();
        } else {
            orders1 = new Orders();
            orders1.setOrderDate(new Date());
            User user = userService.findById(userId).get();
            orders1.setUser(user);
            StatusBuy statusBuy = new StatusBuy();
            statusBuy.setId(1L);
            orders1.setStatusBuy(statusBuy);
            orders1 = orderService.save(orders1);
        }
        OrderDetail orderDetailOld = orderDetailService.findOrderDetailByIdAndProductId(orders1.getId(), product.get().getId());
        if (orderDetailOld != null) {
            orderDetailOld.setQuantity(orderDetailOld.getQuantity() + orderDetail.getQuantity());
            orderDetailOld.setPrice(product.get().getPrice());
            orderDetailOld.setTotalMoney(orderDetailOld.getPrice() * orderDetailOld.getQuantity());
            orderDetailService.save(orderDetailOld);
        } else {
            orderDetail.setProduct(product.get());
            orderDetail.setPrice(product.get().getPrice());
            orderDetail.setTotalMoney(orderDetail.getPrice() * orderDetail.getQuantity());
            orderDetail.setOrders(orders1);
            orderDetailService.save(orderDetail);
        }
        return new ResponseEntity<>(orderDetail, HttpStatus.OK);
    }

    //lấy ra tất cả order.
    @GetMapping("/order")
    public ResponseEntity<List<Orders>> findAllOrderDetail() {
        List<Orders> ordersList = orderService.findOrder();
        if (ordersList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(ordersList, HttpStatus.OK);
        }
    }

    //lấy ra tất cả orderDetail
    @GetMapping("/orderDetail")
    public ResponseEntity<List<OrderDetail>> findOrderDetail() {
        List<OrderDetail> orderDetails = orderDetailService.findAll();
        if (orderDetails.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(orderDetails, HttpStatus.OK);
        }
    }

    //lấy ra thông tin giỏ hàng của người dùng.
    @GetMapping("/cart/{userId}")
    public ResponseEntity<?> getCart(@PathVariable Long userId) {
        Optional<Orders> orders = orderService.findByUserIdAndStatusBuyId(userId, 1L);
        if (orders.isPresent()) {
            List<OrderDetail> orderDetails = orderDetailService.findOrderDetailByOrdersId(orders.get().getId());
            System.out.println(orderDetails);
            return new ResponseEntity<>(orderDetails, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("cart/{ordId}")
    public ResponseEntity<?> updateCart(@PathVariable Long ordId,@RequestBody OrderDetail orderDetail){
        OrderDetail orderDetailOld = orderDetailService.findById(ordId).get();
        orderDetailOld.setQuantity(orderDetail.getQuantity());
        orderDetailOld.setPrice(orderDetailOld.getProduct().getPrice());
        orderDetailOld.setTotalMoney(orderDetailOld.getQuantity()*orderDetailOld.getPrice());
        orderDetailService.save(orderDetailOld);
        return new ResponseEntity<>(HttpStatus.OK);
    }

        //thanh toán giỏ hàng.
    @GetMapping("/payment/{userId}")
    public ResponseEntity<?> payment(@PathVariable Long userId) {
        Long totalMoneyOrder = 0L;
        Optional<Orders> orders = orderService.findByUserIdAndStatusBuyId(userId, 1L);
        List<OrderDetail> orderDetails = orderDetailService.findOrderDetailByOrdersId(orders.get().getId());
        for (int i = 0; i < orderDetails.size(); i++) {
            totalMoneyOrder += orderDetails.get(i).getTotalMoney();
        }
        return new ResponseEntity<>(totalMoneyOrder,HttpStatus.OK);
    }

    @DeleteMapping("/cart/{ordId}")
    public ResponseEntity<?> remove(@PathVariable Long ordId){
        orderDetailService.delete(ordId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
