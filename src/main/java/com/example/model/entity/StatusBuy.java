package com.example.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class StatusBuy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String statusBuy;
}
