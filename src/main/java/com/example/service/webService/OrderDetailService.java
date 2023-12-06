package com.example.service.webService;

import com.example.model.entity.OrderDetail;
import com.example.repository.data.RepositoryOrderDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailService implements IOrderDetailService{
    @Autowired
    private RepositoryOrderDetail repositoryOrderDetail;
    @Override
    public List<OrderDetail> findAll() {
        return repositoryOrderDetail.findAll();
    }

    @Override
    public OrderDetail save(OrderDetail orderDetail) {
        return repositoryOrderDetail.save(orderDetail);
    }

    @Override
    public void delete(Long id) {
        repositoryOrderDetail.deleteById(id);
    }

    @Override
    public Optional<OrderDetail> findById(Long id) {
        return repositoryOrderDetail.findById(id);
    }

    @Override
    public OrderDetail findOrderDetailByIdAndProductId(Long odId, Long productId) {
        return repositoryOrderDetail.findOrderDetailByOrdersIdAndProductId(odId,productId);
    }

    @Override
    public List<OrderDetail> findOrderDetailByOrdersId(Long orderId) {
        return repositoryOrderDetail.findByOrdersId(orderId);
    }
}
