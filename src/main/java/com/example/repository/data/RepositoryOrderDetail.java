package com.example.repository.data;

import com.example.model.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Iterator;
import java.util.List;

@Repository

public interface RepositoryOrderDetail extends JpaRepository<OrderDetail,Long> {
    OrderDetail findOrderDetailByOrdersIdAndProductId(Long orderId,Long productId);
    List<OrderDetail> findByOrdersId(Long id);
}
