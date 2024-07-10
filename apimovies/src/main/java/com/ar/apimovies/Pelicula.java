package com.ar.apimovies;

public class Pelicula {

   private Long idPelicula;
   private String titulo;
   private String genero;
   private String duracion;
   private String imagen;

   public Pelicula() {

   }

   public Pelicula(Long idPelicula, String titulo, String genero, String duracion, String imagen) {
      this.idPelicula = idPelicula;
      this.titulo = titulo;
      this.genero = genero;
      this.duracion = duracion;
      this.imagen = imagen;
   }

   public Long getIdPelicula() {
      return idPelicula;
   }

   public void setIdPelicula(Long idPelicula) {
      this.idPelicula = idPelicula;
   }

   public String getTitulo() {
      return titulo;
   }

   public void setTitulo(String titulo) {
      this.titulo = titulo;
   }

   public String getGenero() {
      return genero;
   }

   public void setGenero(String genero) {
      this.genero = genero;
   }

   public String getDuracion() {
      return duracion;
   }

   public void setDuracion(String duracion) {
      this.duracion = duracion;
   }

   public String getImagen() {
      return imagen;
   }

   public void setImagen(String imagen) {
      this.imagen = imagen;
   }

   @Override
   public String toString() {
      return "Pelicula [idPelicula=" + idPelicula + ", titulo=" + titulo + ", genero=" + genero + ", duracion="
            + duracion + ", imagen=" + imagen + "]";
   }

   
}
