package com.example.repository.data;

import com.example.model.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryCart extends JpaRepository<Cart,Long> {

}
