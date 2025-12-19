package com.example.demo.service;

import com.example.demo.entity.Client;
import com.example.demo.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }
    @Override
    public Client updateClient(Long id, Client client) {

        Client existingClient = clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found with id: " + id));

        existingClient.setName(client.getName());
        existingClient.setDesignation(client.getDesignation());
        existingClient.setDescription(client.getDescription());
        existingClient.setImageUrl(client.getImageUrl());

        return clientRepository.save(existingClient);
    }

    // ===== DELETE =====
    @Override
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
