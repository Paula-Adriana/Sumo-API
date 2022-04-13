package br.com.devs2blu.projetosumo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rikishi {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String shikona;
	private String heya;
	private String posRank;
	private String favoriteGrip;
	
	public Rikishi() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getShikona() {
		return shikona;
	}

	public void setShikona(String shikona) {
		this.shikona = shikona;
	}

	public String getHeya() {
		return heya;
	}

	public void setHeya(String heya) {
		this.heya = heya;
	}

	public String getPosRank() {
		return posRank;
	}

	public void setPosRank(String posRank) {
		this.posRank = posRank;
	}

	public String getFavoriteGrip() {
		return favoriteGrip;
	}

	public void setFavoriteGrip(String favoriteGrip) {
		this.favoriteGrip = favoriteGrip;
	}

	
	
	

}
