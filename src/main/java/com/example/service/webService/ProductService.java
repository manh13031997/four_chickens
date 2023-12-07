package com.example.service.webService;

import com.example.model.entity.Product;
import com.example.repository.data.RepositoryProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService implements IProductService {
    @Autowired
    private RepositoryProduct repositoryProduct;
    @Override
    public List<Product> findAll() {
        return repositoryProduct.findAll();
    }

    @Override
    public Product save(Product product) {
      return repositoryProduct.save(product);
    }

    @Override
    public void delete(Long id) {
        repositoryProduct.deleteById(id);
    }

    @Override
    public Optional<Product> findById(Long id) {
        return repositoryProduct.findById(id);
    }

    @Override
    public List<Product> findProductByNameContaining(String name) {
        if (name != null) {
            return repositoryProduct.findProductByNameContaining(name);
        }
        return repositoryProduct.findAll();
    }
}
