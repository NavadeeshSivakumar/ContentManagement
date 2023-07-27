package com.content.demo.repo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.content.demo.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Integer> {

	Optional<Blog> getBlogPostById(int id);
}
