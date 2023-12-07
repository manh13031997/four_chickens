package com.example.service.webService;

import com.example.model.entity.Cart;

public interface ICartService extends IGenerateService<Cart> {
      int totalProduct(Long idUser);
}
