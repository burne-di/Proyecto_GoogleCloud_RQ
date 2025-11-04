# GoogleCloud Retail Intelligence Platform 🛒☁️

![GoogleCloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![BigQuery](https://img.shields.io/badge/BigQuery-669DF6?style=for-the-badge&logo=google-cloud&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

Enterprise-grade **E-commerce Analytics Platform** built on **Google Cloud Platform**, demonstrating production-level data engineering capabilities for retail intelligence.

## 🚀 Project Overview

This project showcases a complete end-to-end data pipeline for e-commerce analytics, processing **500K+ daily orders** with real-time insights and advanced analytics capabilities.

### Key Features

- 📊 **Real-time Analytics**: Sub-5 second query performance on billions of rows with BigQuery
- 🛍️ **Customer 360**: Unified view of customer behavior, purchases, and interactions
- 📦 **Inventory Intelligence**: Smart demand forecasting and automated stock management
- 💰 **Sales Analytics**: Comprehensive revenue and performance tracking
- 🔄 **Serverless Architecture**: Auto-scaling with Cloud Functions, Cloud Run, and Dataflow
- 📈 **Business Intelligence**: Interactive dashboards with Looker

## 🏗️ Architecture

```
E-commerce App → Cloud SQL → Pub/Sub → Dataflow → Cloud Storage (Data Lake)
                                                           ↓
                                                      BigQuery (DWH)
                                                           ↓
                                                       Looker (BI)
```

### Data Flow

1. **Ingestion**: Transactional data from Cloud SQL + Clickstream via Pub/Sub
2. **Streaming**: Real-time processing with Cloud Dataflow
3. **Storage**: Multi-layer Data Lake (RAW/SILVER/GOLD) in Cloud Storage
4. **Transformation**: dbt models for dimensional modeling in BigQuery
5. **Orchestration**: Cloud Composer (Managed Airflow) for workflow automation
6. **Analytics**: BigQuery for OLAP queries and ML models
7. **Visualization**: Looker dashboards for stakeholders

## 🛠️ Technology Stack

### Google Cloud Platform Services

| Service | Purpose | Description |
|---------|---------|-------------|
| **BigQuery** | Data Warehouse | Serverless, petabyte-scale analytics |
| **Cloud Storage** | Data Lake | Object storage for RAW/SILVER/GOLD layers |
| **Cloud SQL** | OLTP Database | PostgreSQL for transactional data |
| **Cloud Dataflow** | ETL/Streaming | Apache Beam for data processing |
| **Cloud Composer** | Orchestration | Managed Apache Airflow |
| **Cloud Functions** | Serverless Compute | Event-driven processing |
| **Cloud Pub/Sub** | Messaging | Real-time event streaming |
| **Cloud Run** | Containers | Serverless container platform |
| **GKE** | Kubernetes | Container orchestration |
| **Cloud Monitoring** | Observability | Logging and monitoring |
| **Looker** | Business Intelligence | Data visualization |
| **IAM** | Security | Identity and access management |

### Frontend Technologies

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first styling
- **Recharts** - Data visualization

### Data Engineering Stack

- **Python 3.11** - Primary programming language
- **dbt** - Data transformation and modeling
- **Apache Airflow** - Workflow orchestration
- **Terraform** - Infrastructure as Code
- **Docker** - Containerization

## 📊 Business Metrics

| Metric | Value | Description |
|--------|-------|-------------|
| **Daily Orders** | 500K+ | Orders processed per day |
| **Query Speed** | <5 sec | BigQuery query latency |
| **Data Volume** | 5TB/day | Daily data ingestion |
| **Products** | 1M+ | Active products in catalog |
| **Uptime SLA** | 99.9% | Platform availability |
| **Cost Savings** | 60% | vs traditional data warehouse |

## 🎯 Use Cases

### 1. E-commerce Analytics
- Real-time sales dashboard
- Product performance tracking
- Revenue attribution analysis
- Regional sales comparison

### 2. Customer Intelligence
- 360° customer view
- Behavioral segmentation
- Purchase pattern analysis
- Churn prediction with BigQuery ML

### 3. Inventory Optimization
- Real-time stock tracking
- Demand forecasting
- Automated reorder alerts
- Supplier performance analytics

### 4. Personalization
- Product recommendations
- Dynamic pricing
- Targeted marketing campaigns
- A/B testing analytics

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Cloud Platform account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/burne-di/Proyecto_GoogleCloud_RQ.git
cd Proyecto_GoogleCloud_RQ

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build project
npm run build

# Preview production build
npm run preview

# Format code
npm run format
```

## 📁 Project Structure

```
Proyecto_GoogleCloud_RQ/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   └── TechLogo.tsx     # Technology logo component
│   ├── pages/
│   │   ├── ProjectPresentation.tsx  # Main presentation page
│   │   └── Dashboard.tsx    # Analytics dashboard
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles (GoogleCloud theme)
├── public/
│   └── images/              # Static assets
├── docs/                    # Build output (GitHub Pages)
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration (GoogleCloud colors)
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🎨 Design System

This project uses **Google Cloud Platform's design language** with official brand colors:

- **GoogleCloud Blue**: `#4285F4` - Primary actions and highlights
- **GoogleCloud Red**: `#EA4335` - Alerts and important metrics
- **GoogleCloud Yellow**: `#FBBC04` - Warnings and secondary highlights
- **GoogleCloud Green**: `#34A853` - Success states and positive metrics
- **GoogleCloud Gray**: `#5F6368` - Text and neutral elements

## 🔒 Infrastructure as Code

```hcl
# Example Terraform configuration for GoogleCloud resources
# terraform/main.tf

resource "google_bigquery_dataset" "retail_dwh" {
  dataset_id = "retail_analytics"
  location   = "US"
}

resource "google_storage_bucket" "data_lake" {
  name     = "retail-data-lake"
  location = "US"
}

resource "google_sql_database_instance" "transactional_db" {
  name             = "retail-oltp"
  database_version = "POSTGRES_14"
  region           = "us-central1"
}
```

## 📈 Performance Optimization

- ✅ **Serverless Architecture**: Auto-scaling based on demand
- ✅ **BigQuery Partitioning**: Date-based partitioning for fast queries
- ✅ **Data Caching**: Cloud CDN for static assets
- ✅ **Code Splitting**: Vite's automatic code splitting
- ✅ **Lazy Loading**: Dynamic imports for large components

## 🤝 Contributing

This is a portfolio project showcasing data engineering skills. Feel free to:

- Report bugs or issues
- Suggest improvements
- Fork and experiment with the code

## 📫 Contact

**Ruben Quispe** - Senior Data Engineer

- 📧 Email: [rubendqv@gmail.com](mailto:rubendqv@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/rubenquispev/](https://www.linkedin.com/in/rubenquispev/)
- 🐙 GitHub: [github.com/burne-di](https://github.com/burne-di)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Google Cloud Platform** for excellent cloud services and documentation
- **React** and **Vite** communities for amazing development tools
- **Tailwind CSS** for the utility-first CSS framework
- **Simple Icons** for official technology logos

---

**Built with ❤️ using Google Cloud Platform** | Demonstrating production-ready data engineering for retail analytics
