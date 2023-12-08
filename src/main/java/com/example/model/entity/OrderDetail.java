package com.example.model.entity;

import com.example.model.User;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long quantity;
    private Long price;
    private Long totalMoney;
    @ManyToOne
    private Orders orders;
    @ManyToOne
    private Product product;
}
