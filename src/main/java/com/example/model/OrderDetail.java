package com.example.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private Long quantity;
    private Long price;
    private Long totalMoney;
    @ManyToOne
    private Orders orders;
    @ManyToOne
    private Product product;
}
