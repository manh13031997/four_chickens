package com.example.service.webService;

import com.example.model.entity.Product;

import java.util.List;

public interface IProductService extends IGenerateService<Product> {
    List<Product> findProductByNameContaining(String name);
}
