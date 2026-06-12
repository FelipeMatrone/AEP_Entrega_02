package com.AEP.backend.controller;

import com.AEP.backend.model.Usuario;
import com.AEP.backend.service.UsuarioService;
import org.springframework.web.bind.annotation.*;
import com.AEP.backend.dto.LoginRequest;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service){
        this.service = service;
    }
    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario){
        return service.cadastrar(usuario);
    }
    @GetMapping
    public List<Usuario> listar(){
        return service.listar();
    }
    @PostMapping("/login")
    public  Usuario login(@RequestBody LoginRequest request){
        return service.login(request.getEmail(), request.getSenha());
    }

}
