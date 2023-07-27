package com.contentmanagement.security.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.contentmanagement.security.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
	
	Optional<Blog> getBlogPostById(int id);

}
