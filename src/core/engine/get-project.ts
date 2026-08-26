import { ProjectConfig } from "@/core/types/project";
import { quantPartnersConfig } from "@/projects/quant-partners/project.config";
import { templateBaseConfig } from "@/projects/template-base/project.config";

const projectsRegistry: Record<string, ProjectConfig> = {
  "quant-partners": quantPartnersConfig,
  "template-base": templateBaseConfig,
};

export function getProjectConfig(projectId?: string): ProjectConfig {
  const selectedId =
    projectId ||
    process.env.NEXT_PUBLIC_PROJECT_ID ||
    "quant-partners";

  return projectsRegistry[selectedId] || quantPartnersConfig;
}

export function getAllProjects(): ProjectConfig[] {
  return Object.values(projectsRegistry);
}
