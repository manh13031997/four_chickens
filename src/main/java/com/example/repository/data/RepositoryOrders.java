package com.example.repository.data;

import com.example.model.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RepositoryOrders extends JpaRepository<Orders,Long> {
}
