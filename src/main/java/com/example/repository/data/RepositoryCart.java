package com.example.repository.data;

import com.example.model.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryCart extends JpaRepository<Cart,Long> {
    @Query(value = "SELECT COUNT(*) FROM cart WHERE id_user = :idUser", nativeQuery = true)
    public int totalProduct(@Param("idUser") Long idUser);

}
