package com.example.service.webService;

import com.example.model.entity.Product;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductService extends IGenerateService<Product> {
    List<Product> findProductByNameContaining(String name);
}
