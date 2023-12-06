package com.example.service.webService;

import com.example.model.entity.Cart;

import java.util.List;

public interface ICartService extends IGenerateService<Cart> {
    public int totalProduct(Long idUser);
}
