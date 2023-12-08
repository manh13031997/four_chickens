package com.example.service.webService;

import com.example.model.entity.Orders;

import java.util.List;
import java.util.Optional;

public interface IOrderService<E> {
    List<E> findOrder();
    Optional<Orders> findByUserIdAndStatusBuyId(Long userId, Long statusId);
    E save(E e);
}
