package br.com.devs2blu.projetosumo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devs2blu.projetosumo.entity.Rikishi;

public interface RikishiRepository extends JpaRepository<Rikishi, Long>{

	Rikishi findByShikona(String string);
	
	
}
