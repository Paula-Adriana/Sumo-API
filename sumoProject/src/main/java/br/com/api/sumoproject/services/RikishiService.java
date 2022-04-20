package br.com.api.sumoproject.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import br.com.api.sumoproject.models.RikishiModel;
import br.com.api.sumoproject.repositories.RikishiRepository;

@Service
public class RikishiService {
	
	//injetando o repositorio via construtor
	final
	RikishiRepository rikishiRepository;
	
	//construtor
	public RikishiService(RikishiRepository rikishiRepository) {
		this.rikishiRepository = rikishiRepository;
	}
	
	//salvar rikishi
	@Transactional
	public RikishiModel save(RikishiModel rikishiModel) {
		return rikishiRepository.save(rikishiModel);
	}

	//Listar todos
	public List<RikishiModel> findAll() {
		return rikishiRepository.findAll();
	}

	
	@Transactional
	public void delete(RikishiModel rikishiModel) {
		rikishiRepository.delete(rikishiModel);
	}

	public Optional<RikishiModel> findById(int id) {
		return rikishiRepository.findById(id);
	}

	
}
 