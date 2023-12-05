package com.example.service.webService;

import com.example.model.entity.Cart;
import com.example.repository.data.RepositoryCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CartService implements ICartService{
    @Autowired
    private RepositoryCart repositoryCart;

    @Override
    public int totalProduct(Long id) {
        return repositoryCart.totalProduct(id);
    }

    @Override
    public List<Cart> findAll() {
        return repositoryCart.findAll();
    }

    @Override
    public Cart save(Cart cart) {
        return repositoryCart.save(cart);
    }

    @Override
    public void delete(Long id) {
        repositoryCart.deleteById(id);
    }

    @Override
    public Optional<Cart> findById(Long id) {
        return repositoryCart.findById(id);
    }
}
