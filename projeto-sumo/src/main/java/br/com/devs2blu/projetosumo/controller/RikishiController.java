package br.com.devs2blu.projetosumo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devs2blu.projetosumo.entity.Rikishi;
import br.com.devs2blu.projetosumo.repository.RikishiRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/rikishi")
public class RikishiController {
	
	@Autowired
	RikishiRepository rikishiRepository;

	public RikishiController() {}
	
	//CRUD
	
	@GetMapping
	public List<Rikishi> listar() {
		return rikishiRepository.findAll();
	}
	
	@GetMapping("/{shikona}")
	public Rikishi getRikishiByShikona(@PathVariable ("shikona") String shikona) {
		Rikishi rikishi = rikishiRepository.findByShikona(shikona);
		return rikishi;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public boolean adiciona(@RequestBody Rikishi rikishi) {//o corpo da requisição será convertido em objeto java do tipo rikishi
		Rikishi rikishiResponse = rikishiRepository.save(rikishi);
		return true;
	}
	
	@PutMapping
	@ResponseStatus(HttpStatus.OK)
	public boolean altera(@RequestBody Rikishi rikishi) {
		 rikishiRepository.save(rikishi);
		 return true;
	}
	
	@DeleteMapping
	@ResponseStatus(HttpStatus.OK)
	public boolean deleta(@RequestBody Long id) throws Exception {
		rikishiRepository.findById(id).orElseThrow(
				() -> new Exception("Rikishi não encontrado"));
		rikishiRepository.deleteById(id);
		return true;
	}
	
}
