package com.example.demo.controller;



import com.example.demo.entity.Newsletter;
import com.example.demo.service.NewsletterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/newsletter")
@CrossOrigin(origins = "*")
public class NewsletterController {

    private final NewsletterService newsletterService;

    public NewsletterController(NewsletterService newsletterService) {
        this.newsletterService = newsletterService;
    }

    @PostMapping
    public Newsletter subscribe(@RequestBody Newsletter newsletter) {
        return newsletterService.subscribe(newsletter);
    }

    @GetMapping
    public List<Newsletter> getAllSubscribers() {
        return newsletterService.getAllSubscribers();
    }


    @DeleteMapping("/{id}")
    public void deleteSubscriber(@PathVariable Long id) {
        newsletterService.deleteSubscriber(id);
    }
}


