package com.example.repository.data;

import com.example.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RepositoryCategory extends JpaRepository<Category,Long> {
}
