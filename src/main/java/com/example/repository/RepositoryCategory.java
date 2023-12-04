package com.example.repository;

import com.example.model.Category;
import com.example.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RepositoryCategory extends JpaRepository<Category,Long> {
}
