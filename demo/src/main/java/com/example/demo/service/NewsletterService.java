package com.example.demo.service;


import com.example.demo.entity.Newsletter;
import java.util.List;

public interface NewsletterService {
    Newsletter subscribe(Newsletter newsletter);
    List<Newsletter> getAllSubscribers();



    void deleteSubscriber(Long id);
}

