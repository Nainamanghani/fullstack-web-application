package com.example.demo.service;

import com.example.demo.entity.Project;
import java.util.List;

public interface ProjectService {
    Project saveProject(Project project);   // Add a project
    List<Project> getAllProjects();
    Project updateProject(Long id, Project project);
    void deleteProject(Long id);
}


