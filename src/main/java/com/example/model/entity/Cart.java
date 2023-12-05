package com.example.model.entity;

import com.example.model.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long quantity;
    private String statusBuy;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "Product_Cart", joinColumns = {@JoinColumn(name = "Product_id", referencedColumnName = "id")},
            inverseJoinColumns = {
                    @JoinColumn(name = "Cart_id", referencedColumnName = "id")})
    private Set<Product> products = new HashSet<>();
    @OneToOne
    private User user;
}
