package com.AEP.backend.repository;

import com.AEP.backend.model.Chamado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChamadoRepository extends JpaRepository<Chamado, Long> {

    List<Chamado> findByStatus(String status);
    List<Chamado> findByPrioridade(String prioridade);

}
