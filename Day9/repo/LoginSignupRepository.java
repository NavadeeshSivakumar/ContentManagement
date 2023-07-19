package com.content.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.content.demo.entity.Login;

public interface LoginSignupRepository extends JpaRepository <Login,String>{

	@Query("select user from Login user where user.email = :email ")
	Login findByEmail(@Param("email") String email);
}
