package com.example.demo.service;



import com.example.demo.entity.ContactForm;
import java.util.List;

public interface ContactFormService {
    ContactForm submitContact(ContactForm contactForm);
    List<ContactForm> getAllContacts();
    void deleteContact(Long id);
}
