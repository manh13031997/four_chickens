package com.example.service.webService;

import com.example.model.entity.Orders;
import com.example.repository.data.RepositoryOrders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements IOrderService<Orders>{
    @Autowired
    private RepositoryOrders repositoryOrders;


    @Override
    public List<Orders> findOrder() {
        return repositoryOrders.findAll();
    }

    @Override
    public Optional<Orders> findByUserIdAndStatusBuyId(Long userId, Long statusId) {
        return repositoryOrders.findByUserIdAndStatusBuyId(userId,statusId);
    }

    @Override
    public Orders save(Orders orders) {
        return repositoryOrders.save(orders);
    }
}
