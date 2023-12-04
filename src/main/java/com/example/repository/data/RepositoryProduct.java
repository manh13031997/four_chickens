package com.example.repository.data;

import com.example.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryProduct extends JpaRepository<Product,Long> {
    List<Product> findProductByNameContaining(String name);
}
