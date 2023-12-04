package com.example.model.entity;

import com.example.model.entity.Category;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Long price;
    private Long quantity;
    private String photo;
    @ManyToOne
    private Category category;
}
