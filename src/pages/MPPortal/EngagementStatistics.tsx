import { useState, useMemo } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area, ComposedChart
} from 'recharts';
import { Users, MessageSquare, Calendar, TrendingUp, Download, Filter } from 'lucide-react';

const weeklyData = [
  { name: 'Mon', participation: 45, suggestions: 12, attendance: 0, growth: 5 },
  { name: 'Tue', participation: 52, suggestions: 18, attendance: 0, growth: 7 },
  { name: 'Wed', participation: 75, suggestions: 25, attendance: 120, growth: 12 },
  { name: 'Thu', participation: 60, suggestions: 15, attendance: 0, growth: 15 },
  { name: 'Fri', participation: 58, suggestions: 10, attendance: 0, growth: 18 },
  { name: 'Sat', participation: 85, suggestions: 30, attendance: 250, growth: 25 },
  { name: 'Sun', participation: 90, suggestions: 35, attendance: 180, growth: 30 },
];

const monthlyData = [
  { name: 'Week 1', participation: 320, suggestions: 120, attendance: 450, growth: 10 },
  { name: 'Week 2', participation: 350, suggestions: 140, attendance: 500, growth: 15 },
  { name: 'Week 3', participation: 410, suggestions: 180, attendance: 650, growth: 22 },
  { name: 'Week 4', participation: 380, suggestions: 160, attendance: 550, growth: 28 },
];

const yearlyData = [
  { name: 'Jan', participation: 1200, suggestions: 450, attendance: 1800, growth: 5 },
  { name: 'Feb', participation: 1350, suggestions: 500, attendance: 2100, growth: 8 },
  { name: 'Mar', participation: 1500, suggestions: 650, attendance: 2400, growth: 12 },
  { name: 'Apr', participation: 1450, suggestions: 600, attendance: 2200, growth: 15 },
  { name: 'May', participation: 1600, suggestions: 750, attendance: 2600, growth: 18 },
  { name: 'Jun', participation: 1800, suggestions: 850, attendance: 2900, growth: 22 },
  { name: 'Jul', participation: 1750, suggestions: 800, attendance: 2800, growth: 25 },
  { name: 'Aug', participation: 1900, suggestions: 900, attendance: 3100, growth: 28 },
  { name: 'Sep', participation: 2100, suggestions: 1050, attendance: 3400, growth: 32 },
  { name: 'Oct', participation: 2050, suggestions: 1000, attendance: 3300, growth: 35 },
  { name: 'Nov', participation: 2250, suggestions: 1150, attendance: 3600, growth: 40 },
  { name: 'Dec', participation: 2500, suggestions: 1300, attendance: 4000, growth: 45 },
];

export default function EngagementStatistics() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  const currentData = useMemo(() => {
    switch (timeframe) {
      case 'weekly': return weeklyData;
      case 'yearly': return yearlyData;
      case 'monthly':
      default: return monthlyData;
    }
  }, [timeframe]);

  const summary = useMemo(() => {
    const participation = currentData.reduce((acc, curr) => acc + curr.participation, 0);
    const suggestions = currentData.reduce((acc, curr) => acc + curr.suggestions, 0);
    const attendance = currentData.reduce((acc, curr) => acc + curr.attendance, 0);
    const growth = currentData[currentData.length - 1].growth - currentData[0].growth;
    return { participation, suggestions, attendance, growth: growth > 0 ? `+${growth}%` : `${growth}%` };
  }, [currentData]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Engagement Statistics</h2>
          <p className="text-on-surface-variant text-sm mt-1">Detailed analysis of constituency participation and interaction patterns.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface-white border border-outline-variant rounded-lg p-1 flex">
            {['weekly', 'monthly', 'yearly'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf as any)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors capitalize ${
                  timeframe === tf 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
          <button className="flex items-center px-3 py-2 border border-outline-variant bg-surface-white text-on-surface rounded-lg hover:bg-surface-variant transition-colors text-sm font-medium">
            <Download className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-info/10 rounded-lg text-info">
              <Users className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              12%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Total Participation</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">{summary.participation.toLocaleString()}</p>
        </div>

        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-warning/10 rounded-lg text-warning">
              <MessageSquare className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              8%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Suggestions Submitted</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">{summary.suggestions.toLocaleString()}</p>
        </div>

        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-success/10 rounded-lg text-success">
              <Calendar className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              15%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Event Attendance</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">{summary.attendance.toLocaleString()}</p>
        </div>

        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <TrendingUp className="h-6 w-6" />
            </div>
            <span className="flex items-center text-sm font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
              <TrendingUp className="h-3 w-3 mr-1" />
              Overall
            </span>
          </div>
          <h3 className="text-on-surface-variant text-sm font-medium">Net Growth Rate</h3>
          <p className="text-3xl font-bold text-on-surface mt-1">{summary.growth}</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Participation Rate Chart */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-on-surface">Participation Rate</h3>
              <p className="text-xs text-on-surface-variant mt-1">General app and platform interactions</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="participation" 
                  name="Interactions"
                  stroke="#3B82F6" 
                  strokeWidth={3} 
                  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#3B82F6' }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Suggestion Submissions Chart */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-on-surface">Suggestion Submissions</h3>
              <p className="text-xs text-on-surface-variant mt-1">Ideas and feedback received</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="suggestions" 
                  name="Suggestions" 
                  fill="#F59E0B" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Event Attendance Chart */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-on-surface">Event Attendance</h3>
              <p className="text-xs text-on-surface-variant mt-1">Constituency gatherings (townhalls, rallies)</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="step" 
                  dataKey="attendance" 
                  name="Attendees"
                  stroke="#10B981" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorAttendance)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#10B981' }} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Community Engagement Growth Chart */}
        <div className="bg-surface-white rounded-xl p-6 border border-outline-variant shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-on-surface">Overall Engagement Growth</h3>
              <p className="text-xs text-on-surface-variant mt-1">Growth percentage trend</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006B3C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#006B3C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="growth" 
                  name="Growth (%)"
                  stroke="#006B3C" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorGrowth)" 
                />
                <Line 
                  type="monotone" 
                  dataKey="growth" 
                  stroke="#006B3C" 
                  strokeWidth={3} 
                  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#006B3C' }} 
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
