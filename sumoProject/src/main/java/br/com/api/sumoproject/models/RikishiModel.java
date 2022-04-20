package br.com.api.sumoproject.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_rikishi")
public class RikishiModel implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column (nullable = false, unique = true, length = 45)
	private String shikona;
	@Column (nullable = false, length = 45)
	private String heya;
	@Column (nullable = false, length = 45)
	private String posRank;
	@Column (nullable = false, length = 45)
	private String favoriteGrip;
	
	public RikishiModel() {}
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
