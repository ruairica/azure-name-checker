import { defineRailway, github, project, service } from "railway/iac";

export default defineRailway(() => {
  const web = service("web", {
    source: github("ruairica/azure-name-checker", {
      branch: "main",
      rootDirectory: "/src",
    }),
    build: {
      builder: "RAILPACK",
      watchPatterns: ["/src/**"],
    },
    env: {
      RAILPACK_SPA_OUTPUT_DIR: "dist",
    },
    domains: ["www.azurenamechecker.com"],
    healthcheck: "/health",
    deploy: {
      sleepApplication: true,
      limitOverride: {
        containers: {
          cpu: 0.1,
          memoryBytes: 128 * 1024 * 1024,
        },
      },
    },
  });

  return project("azure-name-checker", {
    resources: [web],
  });
});
