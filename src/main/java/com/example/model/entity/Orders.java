package com.example.model.entity;

import com.example.model.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Entity
@Data
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date orderDate;
    private Long totalMoney;
    @ManyToOne
    private User user;
    @ManyToOne
    private StatusBuy statusBuy;
}
