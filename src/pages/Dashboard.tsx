import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Cloud,
  Database,
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  DollarSign,
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gcp-lightGray to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gcp-blue to-gcp-green text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Overview
              </Button>
              <div>
                <h1 className="text-3xl font-bold">GCP Retail Dashboard</h1>
                <p className="text-white/80">Real-time E-commerce Analytics</p>
              </div>
            </div>
            <Badge className="bg-gcp-green text-white border-0 px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
              Live Data
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Today\'s Sales',
              value: '$245,890',
              change: '+12.5%',
              icon: DollarSign,
              color: 'text-gcp-green',
              bg: 'bg-gcp-green/10',
            },
            {
              title: 'Orders Processed',
              value: '12,458',
              change: '+8.2%',
              icon: ShoppingCart,
              color: 'text-gcp-blue',
              bg: 'bg-gcp-blue/10',
            },
            {
              title: 'Active Customers',
              value: '8,924',
              change: '+15.3%',
              icon: Users,
              color: 'text-gcp-yellow',
              bg: 'bg-gcp-yellow/10',
            },
            {
              title: 'Products Sold',
              value: '45,231',
              change: '+9.7%',
              icon: Package,
              color: 'text-gcp-red',
              bg: 'bg-gcp-red/10',
            },
          ].map((metric, index) => (
            <Card key={index} className="gcp-card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${metric.bg} p-3 rounded-lg`}>
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <Badge variant="outline" className={`${metric.color} border-current`}>
                    {metric.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gcp-gray mb-1">{metric.value}</h3>
                <p className="text-sm text-gcp-gray/60">{metric.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Status */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gcp-gray">
                <Cloud className="w-6 h-6 text-gcp-blue" />
                GCP Services Status
              </CardTitle>
              <CardDescription>All systems operational</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'BigQuery', status: 'Operational', latency: '1.2s avg' },
                  { name: 'Cloud Dataflow', status: 'Operational', latency: '3.5s avg' },
                  { name: 'Cloud Storage', status: 'Operational', latency: '0.8s avg' },
                  { name: 'Pub/Sub', status: 'Operational', latency: '0.3s avg' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gcp-lightGray/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gcp-green rounded-full animate-pulse" />
                      <span className="font-medium text-gcp-gray">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gcp-gray/60">{service.latency}</span>
                      <Badge variant="outline" className="text-gcp-green border-gcp-green/30">
                        {service.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gcp-gray">
                <BarChart3 className="w-6 h-6 text-gcp-blue" />
                Top Performing Products
              </CardTitle>
              <CardDescription>Last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'Wireless Headphones', sales: '$12,450', units: 234 },
                  { name: 'Smart Watch Pro', sales: '$9,820', units: 189 },
                  { name: 'Laptop Stand', sales: '$7,340', units: 412 },
                  { name: 'USB-C Hub', sales: '$5,120', units: 256 },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gcp-lightGray/50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gcp-gray">{product.name}</p>
                      <p className="text-xs text-gcp-gray/60">{product.units} units sold</p>
                    </div>
                    <span className="font-bold text-gcp-blue">{product.sales}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <Card className="bg-gradient-to-r from-gcp-blue/10 to-gcp-green/10 border-gcp-blue/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Database className="w-12 h-12 text-gcp-blue" />
              <div>
                <h3 className="font-semibold text-gcp-gray text-lg mb-1">
                  Live Dashboard Coming Soon
                </h3>
                <p className="text-gcp-gray/70">
                  This dashboard will connect to real GCP services (BigQuery, Cloud Monitoring) to display
                  live retail analytics. Currently showing sample data for demonstration.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
