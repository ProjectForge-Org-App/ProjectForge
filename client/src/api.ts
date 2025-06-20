import type { ProjectTemplate } from '../types';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/project';

export const createProject = async (formData: ProjectTemplate) => {
  const res = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error('Failed to create project');
  return res.json();
};

export const fetchAllProjects = async () => {
  const res = await fetch(`${API_BASE_URL}/all`);
  if (!res.ok) throw new Error('Failed to fetch project list');
  return res.json();
};

export const fetchProjectByName = async (name: string) => {
  const res = await fetch(`${API_BASE_URL}/find?name=${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error('Project not found');
  return res.json();
};
