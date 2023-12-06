package com.example.controller;

import com.example.model.entity.Cart;
import com.example.model.entity.Category;
import com.example.model.entity.Product;
import com.example.service.webService.ICartService;
import com.example.service.webService.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")

public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/product")
    public ResponseEntity<List<Product>> findAll() {
        List<Product> products = productService.findAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @PostMapping("/admin/product/create")
    public ResponseEntity<Product> create(@RequestBody Product product) {
        product = productService.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/admin/product/edit/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        productService.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping("/admin/product/delete/{id}")
    public ResponseEntity<Product> remove(@PathVariable Long id) {
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Optional<Product>> findById(@PathVariable Long id) {
        Optional<Product> product = productService.findById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/product/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String name) {
        List<Product> list = productService.findProductByNameContaining(name);
        if (list.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(list, HttpStatus.OK);
        }
    }
}
