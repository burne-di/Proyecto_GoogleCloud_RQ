import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import TechLogo from '@/components/TechLogo'
import {
  Database,
  Workflow,
  Cloud,
  BarChart3,
  Shield,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Play,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Zap,
  ShoppingCart,
  Package,
} from 'lucide-react'

export default function ProjectPresentation() {
  const [activeTab, setActiveTab] = useState('overview')
  const navigate = useNavigate()

  const technologies = [
    { name: 'BigQuery', displayName: 'BigQuery', category: 'Data Warehouse', color: 'bg-gcp-blue' },
    { name: 'GCP', displayName: 'Cloud Storage', category: 'Data Lake', color: 'bg-gcp-yellow' },
    { name: 'GCP', displayName: 'Cloud SQL', category: 'Database', color: 'bg-gcp-red' },
    { name: 'Dataflow', displayName: 'Dataflow', category: 'ETL/Streaming', color: 'bg-gcp-green' },
    { name: 'Airflow', displayName: 'Cloud Composer', category: 'Orchestration', color: 'bg-cyan-600' },
    { name: 'Python', displayName: 'Python 3.11', category: 'Backend', color: 'bg-yellow-600' },
    { name: 'dbt', displayName: 'dbt', category: 'Transformation', color: 'bg-orange-600' },
    { name: 'Looker', displayName: 'Looker', category: 'BI', color: 'bg-indigo-600' },
    { name: 'Terraform', displayName: 'Terraform', category: 'IaC', color: 'bg-purple-600' },
    { name: 'Docker', displayName: 'Docker', category: 'DevOps', color: 'bg-blue-400' },
    { name: 'Kubernetes', displayName: 'GKE', category: 'Container Orchestration', color: 'bg-blue-600' },
    { name: 'React', displayName: 'React 18', category: 'Frontend', color: 'bg-cyan-500' },
  ]

  const gcpServices = [
    { name: 'Cloud SQL (PostgreSQL)', status: 'active', type: 'Database', region: 'us-central1' },
    { name: 'Cloud Storage', status: 'active', type: 'Data Lake', region: 'us-central1' },
    { name: 'BigQuery', status: 'active', type: 'Data Warehouse', region: 'us-central1' },
    { name: 'Cloud Dataflow', status: 'active', type: 'ETL/Streaming', region: 'us-central1' },
    { name: 'Cloud Composer', status: 'active', type: 'Orchestration', region: 'us-central1' },
    { name: 'Cloud Functions', status: 'active', type: 'Serverless', region: 'us-central1' },
    { name: 'Cloud Pub/Sub', status: 'active', type: 'Messaging', region: 'us-central1' },
    { name: 'Cloud Run', status: 'active', type: 'Containers', region: 'us-central1' },
    { name: 'GKE', status: 'active', type: 'Kubernetes', region: 'us-central1' },
    { name: 'Cloud Monitoring', status: 'active', type: 'Observability', region: 'us-central1' },
    { name: 'Looker', status: 'active', type: 'BI', region: 'us-central1' },
    { name: 'IAM', status: 'active', type: 'Security', region: 'global' },
  ]

  const businessValue = [
    {
      title: 'Real-time Analytics',
      value: '<5sec',
      description: 'Query latency on 1B+ rows',
      icon: Zap,
      color: 'text-gcp-yellow',
    },
    {
      title: 'Cost Optimization',
      value: '60%',
      description: 'Savings vs traditional DWH',
      icon: DollarSign,
      color: 'text-gcp-green',
    },
    {
      title: 'Customer Insights',
      value: '360°',
      description: 'Unified customer view',
      icon: Users,
      color: 'text-gcp-blue',
    },
    {
      title: 'Sales Increase',
      value: '+23%',
      description: 'Through personalization',
      icon: TrendingUp,
      color: 'text-gcp-red',
    },
    {
      title: 'Inventory Accuracy',
      value: '99.5%',
      description: 'Real-time stock tracking',
      icon: Package,
      color: 'text-gcp-green',
    },
    {
      title: 'Processing Speed',
      value: '50TB/h',
      description: 'Data ingestion rate',
      icon: Clock,
      color: 'text-gcp-yellow',
    },
  ]

  const features = [
    {
      title: 'E-commerce Data Pipeline',
      description: 'End-to-end retail data flow from transactions to insights',
      icon: ShoppingCart,
      details: [
        'Cloud SQL for transactional data (orders, customers, products)',
        'Real-time streaming with Pub/Sub and Dataflow',
        'Multi-layer Data Lake (RAW/SILVER/GOLD) in Cloud Storage',
        'BigQuery as analytical data warehouse',
      ],
    },
    {
      title: 'Customer 360 Platform',
      description: 'Unified view of customer behavior and preferences',
      icon: Users,
      details: [
        'Clickstream analytics from web and mobile',
        'Purchase history and product interactions',
        'Customer segmentation with ML models',
        'Personalized recommendations engine',
      ],
    },
    {
      title: 'Inventory Intelligence',
      description: 'Smart inventory management and demand forecasting',
      icon: Package,
      details: [
        'Real-time stock levels across all warehouses',
        'Demand forecasting with BigQuery ML',
        'Automated reordering alerts',
        'Supplier performance analytics',
      ],
    },
    {
      title: 'Sales Analytics',
      description: 'Comprehensive sales performance monitoring',
      icon: TrendingUp,
      details: [
        'Daily/Weekly/Monthly sales dashboards',
        'Product performance metrics',
        'Regional sales comparison',
        'Revenue attribution analysis',
      ],
    },
    {
      title: 'Data Orchestration',
      description: 'Production-grade workflow automation',
      icon: Workflow,
      details: [
        'Cloud Composer (Managed Airflow)',
        'Complex DAG dependencies',
        'Error handling & monitoring',
        'Auto-scaling & cost optimization',
      ],
    },
    {
      title: 'Business Intelligence',
      description: 'Interactive dashboards and reporting',
      icon: BarChart3,
      details: [
        'Looker dashboards for stakeholders',
        'Real-time KPI monitoring',
        'Self-service analytics portal',
        'Mobile BI applications',
      ],
    },
  ]

  const metrics = [
    { label: 'Daily Orders', value: '500K+', icon: ShoppingCart },
    { label: 'Products Tracked', value: '1M+', icon: Package },
    { label: 'Data Processed', value: '5TB/day', icon: Database },
    { label: 'BigQuery Queries', value: '10K+/day', icon: BarChart3 },
    { label: 'GCP Services', value: '15+', icon: Cloud },
    { label: 'Uptime SLA', value: '99.9%', icon: CheckCircle2 },
  ]

  const handleViewDashboard = () => {
    navigate('/dashboard')
  }

  const handleGitHub = () => {
    window.open('https://github.com/burne-di', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:rubendqv@gmail.com'
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/rubenquispev/', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gcp-lightGray to-white">
      {/* Hero Section with GCP Design */}
      <div className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-r from-gcp-blue via-gcp-green to-gcp-yellow">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(66, 133, 244, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(52, 168, 83, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 90%, rgba(251, 188, 4, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            {/* Left Side - Profile & Info */}
            <div className="space-y-6 lg:space-y-8">
              {/* Profile Section */}
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div className="absolute -inset-1 gcp-gradient rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.svg`}
                    alt="Ruben Quispe - Data Engineer"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const fallback = document.createElement('div')
                      fallback.className = 'relative w-32 h-32 rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-gcp-blue to-gcp-green flex items-center justify-center text-white text-4xl font-bold'
                      fallback.textContent = 'RQ'
                      e.currentTarget.parentElement?.appendChild(fallback)
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Ruben Quispe</h2>
                  <Badge variant="outline" className="text-white border-white/30 px-3 py-1 bg-white/10">
                    <Shield className="w-3 h-3 mr-2 inline" />
                    Senior Data Engineer
                  </Badge>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  GCP Retail
                  <span className="block mt-2 gcp-gradient bg-clip-text text-transparent">
                    Intelligence Platform
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-white">
                  E-commerce → Data Lake → BigQuery → Looker
                </p>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  Enterprise-grade retail analytics platform built on Google Cloud Platform,
                  processing <span className="text-gcp-yellow font-semibold">500K+ daily orders</span> with
                  <span className="text-gcp-yellow font-semibold"> real-time insights</span>
                </p>
              </div>

              {/* Tech Stack Icons */}
              <div>
                <p className="text-sm text-white/70 mb-3 uppercase tracking-wide">Powered By Google Cloud</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'GCP', color: 'bg-white' },
                    { name: 'BigQuery', color: 'bg-gcp-blue' },
                    { name: 'Python', color: 'bg-gcp-yellow' },
                    { name: 'Airflow', color: 'bg-gcp-green' },
                    { name: 'dbt', color: 'bg-gcp-red' },
                    { name: 'Terraform', color: 'bg-purple-600' },
                    { name: 'Kubernetes', color: 'bg-blue-600' },
                    { name: 'React', color: 'bg-cyan-500' },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="group relative flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg border border-white/30 hover:border-white/50 transition-all hover:scale-105 cursor-pointer backdrop-blur-sm"
                    >
                      <div className={`${tech.color} p-1.5 rounded`}>
                        <TechLogo name={tech.name} className="w-4 h-4 text-gray-800" />
                      </div>
                      <span className="text-sm font-medium text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap">
                <Button
                  size="lg"
                  className="bg-white text-gcp-blue hover:bg-white/90 shadow-lg transform hover:scale-105 transition-all font-semibold"
                  onClick={handleViewDashboard}
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Live Dashboard
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  onClick={handleGitHub}
                >
                  <Github className="mr-2 h-5 w-5" />
                  Source Code
                </Button>
              </div>
            </div>

            {/* Right Side - Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Daily Orders', value: '500K+', icon: ShoppingCart, color: 'text-gcp-yellow', bg: 'bg-white/20' },
                { label: 'Query Speed', value: '<5sec', icon: Clock, color: 'text-white', bg: 'bg-white/20' },
                { label: 'GCP Services', value: '15+', icon: Cloud, color: 'text-gcp-blue', bg: 'bg-white/90' },
                { label: 'Uptime SLA', value: '99.9%', icon: CheckCircle2, color: 'text-gcp-green', bg: 'bg-white/90' },
                { label: 'Data Volume', value: '5TB/day', icon: Database, color: 'text-white', bg: 'bg-white/20' },
                { label: 'Products', value: '1M+', icon: Package, color: 'text-white', bg: 'bg-white/20' },
              ].map((metric, index) => {
                const MetricIcon = metric.icon
                return (
                  <div
                    key={index}
                    className={`${metric.bg} backdrop-blur-xl p-6 rounded-xl border border-white/30 hover:border-white/50 transition-all gcp-card-hover cursor-pointer`}
                  >
                    <MetricIcon className={`w-8 h-8 ${metric.color} mb-3 group-hover:scale-110 transition-transform`} />
                    <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                    <div className={`text-sm ${metric.bg === 'bg-white/90' ? 'text-gray-700' : 'text-white/80'}`}>{metric.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-white border-gcp-lightGray gcp-card-hover"
            >
              <CardContent className="p-6 text-center">
                <metric.icon className="w-8 h-8 mx-auto mb-2 text-gcp-blue" />
                <div className="text-3xl font-bold text-gcp-blue">{metric.value}</div>
                <div className="text-sm text-gcp-gray">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Business Value Section */}
      <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-gcp-blue/5 to-gcp-green/5">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gcp-gray mb-4">Business Value Delivered</h2>
          <p className="text-xl text-gcp-gray/70">
            Measurable impact on retail operations and customer experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessValue.map((item, index) => (
            <Card
              key={index}
              className="bg-white border-gcp-lightGray gcp-card-hover"
            >
              <CardContent className="p-6">
                <item.icon className={`w-12 h-12 mb-4 ${item.color}`} />
                <div className="text-4xl font-bold text-gcp-gray mb-2">{item.value}</div>
                <h3 className="text-lg font-semibold text-gcp-gray mb-1">{item.title}</h3>
                <p className="text-sm text-gcp-gray/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* GCP Services Deployed */}
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-white border-gcp-lightGray">
          <CardHeader>
            <CardTitle className="text-3xl text-gcp-gray flex items-center gap-3">
              <Cloud className="w-8 h-8 text-gcp-blue" />
              Google Cloud Services Deployed
            </CardTitle>
            <CardDescription className="text-gcp-gray/70 text-lg">
              Production infrastructure with 12+ GCP services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {gcpServices.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 bg-gradient-to-r from-gcp-blue/5 to-gcp-green/5 p-3 rounded-lg border border-gcp-lightGray hover:border-gcp-blue/50 gcp-card-hover"
                >
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-gcp-green rounded-full animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gcp-gray text-sm truncate">
                      {service.name}
                    </div>
                    <div className="text-xs text-gcp-gray/60">{service.type}</div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-gcp-green/30 text-gcp-green"
                  >
                    Active
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-gcp-lightGray">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gcp-blue data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-gcp-blue data-[state=active]:text-white">
              Features
            </TabsTrigger>
            <TabsTrigger value="stack" className="data-[state=active]:bg-gcp-blue data-[state=active]:text-white">
              Tech Stack
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-white border-gcp-lightGray">
              <CardHeader>
                <CardTitle className="text-3xl text-gcp-gray">Project Overview</CardTitle>
                <CardDescription className="text-gcp-gray/70 text-lg">
                  Enterprise-grade e-commerce analytics platform on Google Cloud
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-gcp-gray">
                <div>
                  <h3 className="text-xl font-semibold text-gcp-gray mb-3">What This Platform Does</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      Ingests 500K+ daily orders from e-commerce platform into Cloud SQL
                    </li>
                    <li>
                      Streams clickstream data via Cloud Pub/Sub to Cloud Storage Data Lake
                    </li>
                    <li>Processes data through RAW → SILVER → GOLD layers using Cloud Dataflow</li>
                    <li>
                      Loads transformed data into BigQuery for lightning-fast analytics
                    </li>
                    <li>Provides real-time dashboards via Looker for business stakeholders</li>
                    <li>Implements ML models for customer segmentation and demand forecasting</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gcp-gray mb-3">
                    Key Technical Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-gcp-blue/10 to-gcp-blue/5 p-4 rounded-lg border border-gcp-blue/20 gcp-card-hover">
                      <h4 className="font-semibold text-gcp-blue mb-2">Serverless Architecture</h4>
                      <p className="text-sm text-gcp-gray/70">
                        Cloud Functions, Cloud Run, and Dataflow for auto-scaling and cost optimization
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gcp-green/10 to-gcp-green/5 p-4 rounded-lg border border-gcp-green/20 gcp-card-hover">
                      <h4 className="font-semibold text-gcp-green mb-2">Real-time Streaming</h4>
                      <p className="text-sm text-gcp-gray/70">
                        Pub/Sub and Dataflow for sub-second data ingestion and processing
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gcp-yellow/10 to-gcp-yellow/5 p-4 rounded-lg border border-gcp-yellow/20 gcp-card-hover">
                      <h4 className="font-semibold text-gcp-yellow mb-2">BigQuery Analytics</h4>
                      <p className="text-sm text-gcp-gray/70">
                        Petabyte-scale analytics with sub-5 second query performance
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-gcp-red/10 to-gcp-red/5 p-4 rounded-lg border border-gcp-red/20 gcp-card-hover">
                      <h4 className="font-semibold text-gcp-red mb-2">Infrastructure as Code</h4>
                      <p className="text-sm text-gcp-gray/70">
                        Terraform for reproducible, version-controlled GCP infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white border-gcp-lightGray gcp-card-hover"
                >
                  <CardHeader>
                    <feature.icon className="w-10 h-10 text-gcp-blue mb-2" />
                    <CardTitle className="text-gcp-gray">{feature.title}</CardTitle>
                    <CardDescription className="text-gcp-gray/70">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gcp-gray/80">
                          <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-gcp-green flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tech Stack Tab */}
          <TabsContent value="stack" className="space-y-6">
            <Card className="bg-white border-gcp-lightGray">
              <CardHeader>
                <CardTitle className="text-3xl text-gcp-gray">Technology Stack</CardTitle>
                <CardDescription className="text-gcp-gray/70 text-lg">
                  Google Cloud Platform and enterprise-grade tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gradient-to-r from-gcp-blue/5 to-transparent p-4 rounded-lg gcp-card-hover border border-gcp-lightGray"
                    >
                      <div className={`${tech.color} p-2 rounded-lg`}>
                        <TechLogo name={tech.name} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gcp-gray">{tech.displayName}</div>
                        <div className="text-xs text-gcp-gray/60">{tech.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <Card className="gcp-gradient border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              I'm available for Data Engineering roles. Let's discuss how I can bring value to your
              team with Google Cloud expertise.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmail}
                className="hover:scale-105 transition-transform font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                rubendqv@gmail.com
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm"
                onClick={handleLinkedIn}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm"
                onClick={handleGitHub}
              >
                <Github className="mr-2 h-5 w-5" />
                View More Projects
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-gcp-lightGray py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-gcp-gray/70">
          <p>© 2025 GCP Retail Intelligence Platform. Built by Ruben Quispe</p>
          <p className="text-sm mt-2">
            Demonstrating production-ready GCP data engineering capabilities for e-commerce
          </p>
        </div>
      </footer>
    </div>
  )
}
