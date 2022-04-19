package br.com.api.sumoproject.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import br.com.api.sumoproject.dtos.RikishiDto;
import br.com.api.sumoproject.models.RikishiModel;
import br.com.api.sumoproject.repositories.RikishiRepository;
import br.com.api.sumoproject.services.RikishiService;

@RestController
@CrossOrigin("*")
@RequestMapping("/rikishi")
public class RikishiController {

	// injeçao do service
	final RikishiService rikishiService;

	public RikishiController(RikishiService rikishiService) {
		this.rikishiService = rikishiService;
	}

	@PostMapping
	public ResponseEntity<Object> saveRikishi(@RequestBody @Valid RikishiDto rikishiDto) {
		var rikishiModel = new RikishiModel();
		BeanUtils.copyProperties(rikishiDto, rikishiModel); // convertendo o dto em model
		return ResponseEntity.status(HttpStatus.CREATED).body(rikishiService.save(rikishiModel));
	}

	@GetMapping
	public ResponseEntity<List<RikishiModel>> getAllRikishi() {
		return ResponseEntity.status(HttpStatus.OK).body(rikishiService.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> getOneRikishi(@PathVariable ("id") int id) {
		Optional<RikishiModel> rikishiModelOptional = rikishiService.findById(id);
		if (!rikishiModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Rikishi not found!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(rikishiModelOptional.get());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteRikishi(@PathVariable ("id") int id) {
		Optional<RikishiModel> rikishiModelOptional = rikishiService.findById(id);
		if (!rikishiModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Rikishi not found!");
		}
		rikishiService.delete(rikishiModelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("Rikishi deleted successfully!");
	}
	
		@PutMapping("/{id}")
	public ResponseEntity<Object> updateRikishi(@PathVariable("id") int id,
			@RequestBody @Valid RikishiDto rikishiDto) {
		Optional<RikishiModel> rikishiModelOptional = rikishiService.findById(id);
		if (!rikishiModelOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Rikishi not found!");
		}
		var rikishiModel = new RikishiModel();
		BeanUtils.copyProperties(rikishiDto, rikishiModel);
		rikishiModel.setId(rikishiModelOptional.get().getId());
		return ResponseEntity.status(HttpStatus.OK).body(rikishiService.save(rikishiModel));
	}
}
