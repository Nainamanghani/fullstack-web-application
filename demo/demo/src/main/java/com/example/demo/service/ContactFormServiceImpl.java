package com.example.demo.service;



import com.example.demo.entity.ContactForm;
import com.example.demo.repository.ContactFormRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContactFormServiceImpl implements ContactFormService {

    private final ContactFormRepository contactFormRepository;

    public ContactFormServiceImpl(ContactFormRepository contactFormRepository) {
        this.contactFormRepository = contactFormRepository;
    }

    @Override
    public ContactForm submitContact(ContactForm contactForm) {
        return contactFormRepository.save(contactForm);
    }

    @Override
    public List<ContactForm> getAllContacts() {
        return contactFormRepository.findAll();
    }
    @Override
    public void deleteContact(Long id) {
        contactFormRepository.deleteById(id);
    }
}
