package com.ar.apimovies;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.sql.PreparedStatement;

public class PeliculaDAO {

   public Long insertPelicula(Pelicula pelicula) {
      DatabaseConnection conexion = new DatabaseConnection();
		
      Statement stm = null;
      PreparedStatement pstm = null;
      ResultSet rs = null;

      String insertarPeliculaSql = "INSERT INTO peliculas(titulo,genero,duracion,imagen) VALUES(?,?,?,?)";
      
      Connection cn = conexion.conectar();

      try {
         pstm = cn.prepareStatement(insertarPeliculaSql);
         
         pstm.setString(1, pelicula.getTitulo());
         pstm.setString(2, pelicula.getGenero());
         pstm.setString(3, pelicula.getDuracion());
         pstm.setString(4, pelicula.getImagen());

         int result = pstm.executeUpdate();

         if(result > 0) {

            rs = pstm.getGeneratedKeys();

            if(rs.next()) {
               System.out.println("Se cargo exitosamente un nueva pelicula");
               return rs.getLong(1);
            }
            else {
               System.out.println("Error al obtener ID de la pelicula insertada");
               return null;
            }
         }
         else {
            System.out.println("Error al insertar la pelicula");
            return null;
         }

      } catch (Exception e) {
         e.printStackTrace();
         return null;
      }
   }

   public List<Pelicula> getAllPeliculas() {

      DatabaseConnection conexion = new DatabaseConnection();
      Connection cn = conexion.conectar();
		
      List<Pelicula> peliculas = new ArrayList<>();

      Statement stm = null;
      PreparedStatement pstm = null;
      ResultSet rs = null;

      String SelectPeliculaSql = "SELECT * FROM peliculas";
      
      try {
         
         // stm = cn.createStatement();
         // stm.executeQuery(SelectPeliculaSql);

         pstm = cn.prepareStatement(SelectPeliculaSql);
         
         rs = pstm.executeQuery();

         while (rs.next()) {
            
            Long idP = rs.getLong("id");
            String tit = rs.getString("titulo");
            String gen = rs.getString("genero");
            String durac = rs.getString("duracion");
            String img = rs.getString("imagen");

            Pelicula pelicula = new Pelicula(idP, tit, gen, durac, img);

            peliculas.add(pelicula);
         }

      } catch (Exception e) {
         e.printStackTrace();
      }
      return peliculas;
   }

}










