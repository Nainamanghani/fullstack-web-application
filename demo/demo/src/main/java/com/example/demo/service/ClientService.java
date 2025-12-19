package com.example.demo.service;

import com.example.demo.entity.Client;
import java.util.List;

public interface ClientService {

    Client addClient(Client client);

    List<Client> getAllClients();
    Client updateClient(Long id, Client client);
    void deleteClient(Long id);
}
