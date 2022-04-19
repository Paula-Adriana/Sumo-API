package br.com.api.sumoproject.dtos;

import javax.validation.constraints.NotBlank;

public class RikishiDto {
	
	//mesmos campos do model exceto id
	@NotBlank
	private String shikona;
	@NotBlank
	private String heya;
	@NotBlank
	private String posRank;
	@NotBlank
	private String favoriteGrip;
	
	
	
	public RikishiDto() {}
	
	
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
