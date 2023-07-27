package com.content.demo.entity;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
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
	@ElementCollection
//    @CollectionTable(joinColumns = @JoinColumn(name = "blog_id"))
	private List<String> subcategory;
	private String description;
	private String authorname;
	@Lob
    private byte[] authoravatar;
	private String createdAt;
	@Lob
    private byte[] cover;
	
}