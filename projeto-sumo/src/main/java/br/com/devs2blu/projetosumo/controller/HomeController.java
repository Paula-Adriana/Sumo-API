package br.com.devs2blu.projetosumo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/")
public class HomeController {

	public HomeController() {
		System.out.println(("Funcionou!"));
	}

}
