package com.example.demo.service;



import com.example.demo.entity.Newsletter;
import com.example.demo.repository.NewsletterRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NewsletterServiceImpl implements NewsletterService {

    private final NewsletterRepository newsletterRepository;

    public NewsletterServiceImpl(NewsletterRepository newsletterRepository) {
        this.newsletterRepository = newsletterRepository;
    }

    @Override
    public Newsletter subscribe(Newsletter newsletter) {
        return newsletterRepository.save(newsletter);
    }

    @Override
    public List<Newsletter> getAllSubscribers() {
        return newsletterRepository.findAll();
    }
    @Override
    public void deleteSubscriber(Long id) {
        newsletterRepository.deleteById(id);
    }
}

