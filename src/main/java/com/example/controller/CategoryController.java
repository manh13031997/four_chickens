package com.example.controller;

import com.example.model.entity.Category;
import com.example.service.webService.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("category")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("")
    public ResponseEntity<List<Category>> findAll(){
        List<Category> categories = categoryService.findAll();
        if(categories.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(categories,HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<Category> create(@RequestBody Category category){
        category = categoryService.save(category);
        return new ResponseEntity<>(category,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Category> update(@PathVariable Long id, @RequestBody Category category){
        category.setId(id);
        categoryService.save(category);
        return new ResponseEntity<>(category,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Category> remove(@PathVariable Long id){
        categoryService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Category>> findById(@PathVariable Long id){
        Optional<Category> category = categoryService.findById(id);
        return new ResponseEntity<>(category,HttpStatus.OK);
    }
}
