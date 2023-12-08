package com.example.model.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class CartRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdProduct;
    private Long IdUser;


}
