package com.AEP.backend.service;

import com.AEP.backend.model.Usuario;
import com.AEP.backend.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository){
        this.repository = repository;
    }
    public Usuario cadastrar(Usuario usuario){
        if(repository.findByEmail(usuario.getEmail()).isPresent()){
            throw new RuntimeException("Email já cadastrado.");
        }
        return repository.save(usuario);
    }
    public List<Usuario> listar(){
        return repository.findAll();
    }
    public Usuario login(String email, String senha){
        Usuario usuario = repository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuário ou senha inválidos."));
        if (!usuario.getSenha().equals(senha)){
            throw new RuntimeException("Usuário ou senha inválidos.");
        }
        return usuario;
    }

}
