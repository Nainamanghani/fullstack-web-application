package com.example.demo.controller;



import com.example.demo.entity.ContactForm;
import com.example.demo.service.ContactFormService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactFormController {

    private final ContactFormService contactFormService;

    public ContactFormController(ContactFormService contactFormService) {
        this.contactFormService = contactFormService;
    }

    @PostMapping
    public ContactForm submitContact(@RequestBody ContactForm contactForm) {
        return contactFormService.submitContact(contactForm);
    }

    @GetMapping
    public List<ContactForm> getAllContacts() {
        return contactFormService.getAllContacts();
    }
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactFormService.deleteContact(id);
    }
}
