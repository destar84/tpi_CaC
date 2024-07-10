package com.ar.apimovies;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/peliculas")/* http://elServidor/peliculas  */
public class PeliculaServlet extends HttpServlet {

   private PeliculaDAO peliculaDAO = new PeliculaDAO();

   private ObjectMapper objectMapper = new ObjectMapper();

   @Override
   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

      resp.setHeader("Access-Control-Allow-Origin", "*");
      resp.setHeader("Access-Control-Allow-Methods", "*");
      resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

      req.setCharacterEncoding("UTF-8");      
      resp.setCharacterEncoding("UTF-8");

      Pelicula pelicula = objectMapper.readValue(req.getInputStream(), Pelicula.class);

      Long id = peliculaDAO.insertPelicula(pelicula);

      String jsonResponse = objectMapper.writeValueAsString(id);

      resp.setContentType("application/json");

      resp.getWriter().write(jsonResponse);

      resp.setStatus(HttpServletResponse.SC_CREATED);

      //super.doPost(req, resp);
   }

   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      
      resp.setHeader("Access-Control-Allow-Origin", "*");
      resp.setHeader("Access-Control-Allow-Methods", "*");
      resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

      req.setCharacterEncoding("UTF-8");      
      resp.setCharacterEncoding("UTF-8");

      try {
         
         List<Pelicula> peliculas = peliculaDAO.getAllPeliculas();
         
         String jsonResp = objectMapper.writeValueAsString(peliculas);
         resp.setContentType("application/json");
         resp.getWriter().write(jsonResp);

      } catch (NumberFormatException e) {
         resp.sendError(HttpServletResponse.SC_BAD_REQUEST,"ID invalido");
         e.printStackTrace();
      }
   }

  
   
}












