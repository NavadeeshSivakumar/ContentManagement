package com.content.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.content.demo.entity.Blog;
import com.content.demo.repo.BlogRepository;

@Service
public class BlogService {
	@Autowired
	private BlogRepository repo;
	
	public Blog addBlogPost(Blog blog)
	{
		return repo.save(blog);
	}
	
	public List<Blog> getAllBlogPosts() {
        return repo.findAll();
	}
	
	public Blog getBlogPostById(int id) {
        Optional<Blog> optionalBlog = repo.findById(id);
        return optionalBlog.orElse(null);
    }

}
