package com.AEP.backend.service;

import com.AEP.backend.model.Chamado;
import com.AEP.backend.repository.ChamadoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChamadoService {

    private final ChamadoRepository repository;
    public ChamadoService(ChamadoRepository repository){
        this.repository = repository;
    }

    public Chamado criar(Chamado chamado){
        chamado.setStatus("ABERTO");
        return repository.save(chamado);
    }
    public List<Chamado> listar(){
        return repository.findAll();
    }
    public Chamado buscaPorId(Long id){
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Não encontrado"));
    }
    public Chamado atualizarStatus(Long id, String status){
        Chamado chamado = repository.findById(id).orElseThrow(() -> new RuntimeException("Não encontrado"));
        chamado.setStatus(status);
        return repository.save(chamado);
    }
    public void deletar(Long id){
        repository.deleteById(id);
    }
    public List<Chamado> buscarPorStatus(String status){
        return repository.findByStatus(status);
    }
    public List<Chamado> buscarPorPrioridade(String prioridade){
        return repository.findByPrioridade(prioridade);
    }

}
