package com.example.model.entity;

import com.example.model.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date orderDate;
    private String statusOrder;
    @ManyToOne
    private User user;

}
