import { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { Activity, CheckCircle, Smile, Clock, TrendingUp, Download, MoreVertical } from 'lucide-react';

const monthlyData = [
  { name: 'Jan', engagement: 65, projects: 20, satisfaction: 80 },
  { name: 'Feb', engagement: 59, projects: 25, satisfaction: 75 },
  { name: 'Mar', engagement: 80, projects: 40, satisfaction: 85 },
  { name: 'Apr', engagement: 81, projects: 45, satisfaction: 90 },
  { name: 'May', engagement: 56, projects: 30, satisfaction: 70 },
  { name: 'Jun', engagement: 55, projects: 28, satisfaction: 65 },
  { name: 'Jul', engagement: 40, projects: 15, satisfaction: 50 },
];

const yearlyData = [
  { name: '2021', engagement: 4000, projects: 2400, satisfaction: 2400 },
  { name: '2022', engagement: 3000, projects: 1398, satisfaction: 2210 },
  { name: '2023', engagement: 2000, projects: 9800, satisfaction: 2290 },
  { name: '2024', engagement: 2780, projects: 3908, satisfaction: 2000 },
];

const comparativeData = [
  { name: 'Q1', you: 85, average: 70 },
  { name: 'Q2', you: 88, average: 75 },
  { name: 'Q3', you: 92, average: 72 },
  { name: 'Q4', you: 90, average: 78 },
];

export default function PerformanceAnalytics() {
  const [timeframe, setTimeframe] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Performance Analytics</h2>
          <p className="text-on-surface-variant text-sm mt-1">Track your engagement, project success, and citizen satisfaction metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface-white border border-outline-variant rounded-lg p-1 flex">
            <button
              onClick={() => setTimeframe('monthly')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${timeframe === 'monthly' ? 'bg-surface-variant text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeframe('yearly')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${timeframe === 'yearly' ? 'bg-surface-variant text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Yearly
            </button>
          </div>
          <button className="flex items-center px-4 py-2 border border-outline-variant bg-surface-white text-on-surface rounded-lg hover:bg-surface-variant transition-colors text-sm font-medium">
            <Download className="h-4 w-4 mr-2" />
            Report
          </button>
        </div>
      </div>

      {/* KPI Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Engagement Score */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-info/10 rounded-lg text-info">
              <Activity className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              12%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Engagement Score</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">85<span className="text-lg font-medium text-on-surface-variant">/100</span></p>
        </div>

        {/* Project Completion Rate */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-success/10 rounded-lg text-success">
              <CheckCircle className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              5%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Project Completion Rate</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">92%</p>
        </div>

        {/* Citizen Satisfaction */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-danger/10 rounded-lg text-danger">
              <Smile className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              8%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Citizen Satisfaction</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">4.8<span className="text-lg font-medium text-on-surface-variant">/5.0</span></p>
        </div>

        {/* Suggestion Response */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-warning/10 rounded-lg text-warning">
              <Clock className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              2h faster
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Suggestion Response</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">24<span className="text-lg font-medium text-on-surface-variant">hrs</span></p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends Chart */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-on-surface">Performance Trends ({timeframe === 'monthly' ? 'Monthly' : 'Yearly'})</h3>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded hover:bg-surface-variant">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timeframe === 'monthly' ? monthlyData : yearlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006B3C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#006B3C" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fcd116" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#fcd116" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis 
                  dataKey={timeframe === 'monthly' ? 'name' : 'year'} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  dx={-10} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                  labelStyle={{ color: '#6b7280', marginBottom: '4px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Area 
                  type="monotone" 
                  dataKey="engagement" 
                  name="Engagement"
                  stroke="#006B3C" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorEngagement)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#006B3C' }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="projects" 
                  name="Projects"
                  stroke="#fcd116" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorProjects)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#fcd116' }} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Comparative Trends Chart */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-on-surface">Comparative Benchmarks</h3>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded hover:bg-surface-variant">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparativeData} barSize={24} barGap={8} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  dx={-10} 
                />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="you" name="Your Score" fill="#006B3C" radius={[4, 4, 0, 0]} />
                <Bar dataKey="average" name="National Average" fill="#9ca3af" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
