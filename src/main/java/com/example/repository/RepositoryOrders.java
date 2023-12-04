package com.example.repository;

import com.example.model.Orders;
import com.example.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RepositoryOrders extends JpaRepository<Orders,Long> {
}
