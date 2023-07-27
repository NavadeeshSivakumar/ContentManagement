package com.contentmanagement.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Blog {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String category;
	private String subcategory;
	private String description;
	private String authorname;
	@Lob
	@Column(length=2097152)
    private byte[] authoravatar;
	private String createdAt;
	@Lob
	@Column(length=2097152)
    private byte[] cover;
}
