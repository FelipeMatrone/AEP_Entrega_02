package com.AEP.backend.controller;

import com.AEP.backend.model.Chamado;
import com.AEP.backend.service.ChamadoService;
import org.springframework.web.bind.annotation.*;
import com.AEP.backend.dto.StatusRequest;

import java.util.List;

@RestController
@RequestMapping("/chamados")
public class ChamadoController {

    private final ChamadoService service;
    public ChamadoController(ChamadoService service){
        this.service = service;
    }

    @PostMapping
    public Chamado criar(@RequestBody Chamado chamado){
        return service.criar(chamado);
    }
    @GetMapping
    public List<Chamado> listar(){
        return service.listar();
    }
    @GetMapping("/{id}")
    public Chamado buscaPorId(@PathVariable Long id){
        return service.buscaPorId(id);
    }
    @PutMapping("/{id}/status")
    public Chamado atualizarStatus(@PathVariable Long id,@RequestBody StatusRequest request){
        return service.atualizarStatus(id, request.getStatus());
    }
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id){
        service.deletar(id);
    }
    @GetMapping("/status/{status}")
    public List<Chamado> buscarPorStatus(@PathVariable String status){
        return service.buscarPorStatus(status);
    }
    @GetMapping("/prioridade/{prioridade}")
    public List<Chamado> buscarPorPrioridade(@PathVariable String prioridade){
        return service.buscarPorPrioridade(prioridade);
    }

}
