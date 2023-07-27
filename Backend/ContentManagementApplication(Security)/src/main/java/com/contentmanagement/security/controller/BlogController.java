package com.contentmanagement.security.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.contentmanagement.security.entity.Blog;
import com.contentmanagement.security.service.BlogService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class BlogController {
	@Autowired 
	private BlogService serv;

    @PostMapping("/add")
    public ResponseEntity<String> addBlogPost(
            @RequestParam("title") String title,
            @RequestParam("category") String category,
            @RequestParam("subCategory") String subCategory,
            @RequestParam("description") String description,
            @RequestParam("authorName") String authorName,
            @RequestParam("createdAt") String createdAt,
            @RequestParam("cover") MultipartFile cover,
            @RequestParam("avatar") MultipartFile avatar) 
    {

        try {
            Blog blogPost = new Blog();
            blogPost.setTitle(title);
            blogPost.setCategory(category);
            blogPost.setSubcategory(subCategory);
            blogPost.setDescription(description);
            blogPost.setAuthorname(authorName);
            blogPost.setCreatedAt(createdAt);
            blogPost.setCover(cover.getBytes());
            blogPost.setAuthoravatar(avatar.getBytes());

            serv.addBlogPost(blogPost);
            return ResponseEntity.status(HttpStatus.CREATED).body("Blog post added successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save blog post");
        }
    }
    
    @GetMapping("/getposts")
	public ResponseEntity<List<Blog>> getAllBlogPosts() {
        List<Blog> blogPosts = serv.getAllBlogPosts();
        return ResponseEntity.ok(blogPosts);
	}
    
    @GetMapping("/getpost/{id}")
    public ResponseEntity<Blog> getBlogPostById(@PathVariable int id) {
        Blog blogPost = serv.getBlogPostById(id);
        if (blogPost != null) {
            return ResponseEntity.ok(blogPost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
