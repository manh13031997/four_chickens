package com.example.controller;

import com.example.model.entity.Cart;
import com.example.model.entity.CartRequest;
import com.example.model.entity.Category;
import com.example.service.webService.ICartService;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class CartController {
    @Autowired
    private ICartService cartService;
    @GetMapping("/cart")
    public List<Cart> getAll(){
        return cartService.findAll();
    }
    @PostMapping("/addToCart")
    public ResponseEntity<?> addToCart(@RequestBody CartRequest cartRequest) {
        Cart cart = new Cart();
        cart.setIdProduct(cartRequest.getIdProduct());
        cart.setIdUser(cartRequest.getIdUser());
        Cart cart1 = cartService.save(cart);
        return new ResponseEntity<>(cart1, HttpStatus.OK);
    }

    @GetMapping("/total")
    public ResponseEntity<Integer> total(@RequestParam Long id) {
        return new ResponseEntity<>(Integer.valueOf(cartService.totalProduct(id)), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> remove(@PathVariable Long id){
        cartService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
