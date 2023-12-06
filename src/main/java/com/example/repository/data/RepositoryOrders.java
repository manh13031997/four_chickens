package com.example.repository.data;

import com.example.model.entity.OrderDetail;
import com.example.model.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RepositoryOrders extends JpaRepository<Orders,Long> {
    Optional<Orders> findByUserIdAndStatusBuyId(Long userId,Long statusId);

}
