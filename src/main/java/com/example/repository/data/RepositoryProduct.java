package com.example.repository.data;

import com.example.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryProduct extends JpaRepository<Product,Long> {
    @Query(value = "select * from product where name like product.name", nativeQuery = true)
    List<Product> findProductByNameContaining(String name);
}
