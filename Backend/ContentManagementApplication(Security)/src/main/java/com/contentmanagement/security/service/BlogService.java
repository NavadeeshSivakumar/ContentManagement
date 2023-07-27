package com.contentmanagement.security.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contentmanagement.security.entity.Blog;
import com.contentmanagement.security.repository.BlogRepository;


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
