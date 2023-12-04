package com.example.repository.data;

import com.example.model.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RepositoryOrderDetail extends JpaRepository<OrderDetail,Long> {
}
