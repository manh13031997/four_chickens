package com.example.service.webService;

import com.example.model.entity.Category;
import com.example.repository.data.RepositoryCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService{
    @Autowired
    private RepositoryCategory repositoryCategory;
    @Override
    public List<Category> findAll() {
        return repositoryCategory.findAll();
    }

    @Override
    public Category save(Category category) {
        return repositoryCategory.save(category);
    }

    @Override
    public void delete(Long id) {
        repositoryCategory.deleteById(id);
    }

    @Override
    public Optional<Category> findById(Long id) {
        return repositoryCategory.findById(id);
    }
}
