package com.contentmanagement.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.contentmanagement.security.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
