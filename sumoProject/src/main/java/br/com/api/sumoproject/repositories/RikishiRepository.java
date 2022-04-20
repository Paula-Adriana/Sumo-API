package br.com.api.sumoproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.sumoproject.models.RikishiModel;

@Repository
public interface RikishiRepository extends JpaRepository<RikishiModel, Integer>{
	
	
}
