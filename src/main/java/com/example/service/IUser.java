package com.example.service;

import com.example.model.User;
import com.example.repository.RepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IUser implements IUserService{
    @Autowired
    private RepositoryUser repositoryUser;
    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public User save(User user) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.empty();
    }
}
