package com.example.service.webService;

import com.example.model.entity.Product;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductService extends IGenerateService<Product> {
    @Query("SELECT p from Product p WHERE p.name LIKE %?1%" )
    List<Product> findProductByNameContaining(String name);
}
