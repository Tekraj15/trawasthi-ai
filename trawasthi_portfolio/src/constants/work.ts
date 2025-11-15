import IncedoLogo from "../assets/incedo-inc.jpg";
import CollaberaDigitalLogo from "../assets/collabera-digital.jpeg";
import BungeeTechLogo from "../assets/bungee-tech.jpeg";
export interface WorkItem {
  id: number;
  company: string;
  jobTitle: string;
  description: string[];
  dateRange: string;
  mode: "On Site" | "Remote" | "Hybrid";
  tag?: string;
  logo: string; // path to image
  showLink?: boolean;
}

export const WORK_EXPERIENCE: WorkItem[] = [
  {
    id: 1,
    company: "Incedo Inc",
    jobTitle: "Senior Data Engineer",
    description: [
      "Led the migration of Roche data warehouse from AWS to Snowflake, accelerating customer analytics and reducing monthly API operation and ad-hoc query costs by 28–30%.",
      " Built MLOps experiment tracking pipeline (MLFlow, DagsHub) to analyze model performance and user feedback for Roche Medicine sales.",
      "Optimized PySpark ETL pipeline using Adaptive Query Execution(AQE) and Cache/Persist strategy on 350 GB+ datasets: reduced runtime by 2.5 times and shuffle volume 70%.",
    ],
    dateRange: "March 2024 – Oct 2024",
    mode: "On Site",
    logo: IncedoLogo,
  },
  {
    id: 2,
    company: "Collabera Digital(Client - ZS Associates)",
    jobTitle: "Data Engineer",
    description: [
      "Migrated the legacy Oracle Data warehouse to Snowflake and introduced configurable features, resulting in 32-35% faster data availability.",
      "Automated Snowflake Materialized View refresh using Stored Proc, resulting in 1.5x faster data availability.",
      "Orchestrated ETL workflows using Airflow, and automated infra provisioning with Terraform.",
    ],
    dateRange: "January 2025 – June 2025",
    mode: "On Site",
    logo: CollaberaDigitalLogo,
  },
  {
    id: 3,
    company: "Bungee Tech",
    jobTitle: "Data and ML Engineer",
    description: [
      " Developed an ML-powered product category segmentation using SentenceTransformer model, enhancing assortment segmentation accuracy by nearly 25%.",
      "Orchestrated ML workflows and experiment tracking for retail price matching model using MLflow and DagsHub",
      "Automated client onboarding and catalog ingestion pipeline using Python, PySpark, and AWS, reducing manual onboarding effort by 40%.",
    ],
    dateRange: "June 2021 – April 2023",
    mode: "On Site",
    logo: BungeeTechLogo,
    showLink: true,
  },
];
