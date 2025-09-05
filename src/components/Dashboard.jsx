import React, { useState, useEffect } from 'react';
import { Search, Calendar, Bell, Archive, ExternalLink, ChevronDown, ChevronUp, Filter, Pin, Clock, Users, Info, Trophy, FileText } from 'lucide-react';

// Mock notices data
const noticesData = [
  {
    id: 1,
    title: "Hackathon Registration Deadline Extended",
    date: "2025-09-10",
    type: "Registration",
    isPinned: true,
    isNew: true,
    description: "The last date for registration has been extended to September 15, 2025. Teams must finalize members before submitting.",
    fullContent: "Important update for all participants: Due to multiple requests from students, the registration deadline has been extended by 5 days. Teams can now register until September 15, 2025, 11:59 PM. Please ensure all team members' details are correctly filled in the registration form. Late submissions will not be accepted under any circumstances.",
    link: "https://forms.gle/xyz123",
    linkText: "Register Now"
  },
  {
    id: 2,
    title: "Problem Statements Released",
    date: "2025-09-08",
    type: "General Info",
    isPinned: true,
    isNew: true,
    description: "All 25 shortlisted problem statements are now available for download. Teams can start brainstorming solutions.",
    fullContent: "The complete list of 25 problem statements covering various domains like Healthcare, Education, Agriculture, Smart Cities, and Fintech has been released. Each problem statement includes detailed requirements, expected deliverables, and evaluation criteria. Teams are encouraged to study all problems before making their final selection on the day of the hackathon.",
    link: "/problem-statements.pdf",
    linkText: "Download PDF"
  },
  {
    id: 3,
    title: "Pre-Hackathon Workshop Schedule",
    date: "2025-09-05",
    type: "General Info",
    isPinned: false,
    isNew: false,
    description: "Technical workshops on React, Python, and UI/UX design will be conducted from September 7-9, 2025.",
    fullContent: "To help participants prepare better, we're organizing pre-hackathon workshops: Day 1 (Sept 7): React.js & Frontend Development, Day 2 (Sept 8): Python & Backend APIs, Day 3 (Sept 9): UI/UX Design & Figma. All workshops will be held in the Computer Lab from 2:00 PM to 5:00 PM. Attendance is optional but highly recommended.",
    link: "/workshop-schedule.pdf",
    linkText: "View Schedule"
  },
  {
    id: 4,
    title: "Venue Confirmation - Main Auditorium",
    date: "2025-09-03",
    type: "General Info",
    isPinned: false,
    isNew: false,
    description: "The hackathon will be held at BTKIT Main Auditorium with additional breakout rooms for team collaboration.",
    fullContent: "Final venue details: Main presentations and opening ceremony will be in the Main Auditorium. Teams will have access to Computer Lab 1, Lab 2, and Conference Room A for development work. Each space has high-speed internet, power outlets, and whiteboards. Food arrangements will be made in the adjacent dining hall.",
    link: "/venue-map.pdf",
    linkText: "Download Map"
  },
  {
    id: 5,
    title: "Judging Panel Announced",
    date: "2025-09-01",
    type: "Results",
    isPinned: false,
    isNew: false,
    description: "Meet our esteemed panel of judges including industry experts and senior faculty members.",
    fullContent: "We're proud to announce our judging panel: Dr. Rajesh Kumar (IIT Delhi), Ms. Priya Sharma (Google India), Mr. Ankit Gupta (Startup Founder), Prof. Meera Singh (BTKIT), and Dr. Amit Verma (Microsoft). The judges will evaluate projects based on innovation, technical implementation, presentation, and real-world impact.",
    link: "/judges-profile.pdf",
    linkText: "View Profiles"
  },
  {
    id: 6,
    title: "Team Formation Guidelines",
    date: "2025-08-28",
    type: "Registration",
    isPinned: false,
    isNew: false,
    description: "Important guidelines for team formation, member roles, and collaboration rules during the hackathon.",
    fullContent: "Team formation rules: Maximum 4 members per team, at least one member should be from computer science/IT background, cross-departmental teams are encouraged. Teams can be formed until registration closes. Once registered, team changes are not allowed except in emergency situations with organizer approval.",
    link: null,
    linkText: null
  }
];

const NoticesPage = () => {
  const [notices, setNotices] = useState(noticesData);
  const [filteredNotices, setFilteredNotices] = useState(noticesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [showArchive, setShowArchive] = useState(false);

  // Filter and search functionality
  useEffect(() => {
    let filtered = notices;

    if (searchTerm) {
      filtered = filtered.filter(notice =>
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'All') {
      filtered = filtered.filter(notice => notice.type === filterType);
    }

    setFilteredNotices(filtered);
  }, [searchTerm, filterType, notices]);

  const toggleExpand = (id) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Registration': return <Users className="w-4 h-4" />;
      case 'General Info': return <Info className="w-4 h-4" />;
      case 'Results': return <Trophy className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const pinnedNotices = filteredNotices.filter(notice => notice.isPinned);
  const regularNotices = filteredNotices.filter(notice => !notice.isPinned);
  const recentNotices = regularNotices.slice(0, 4);
  const archivedNotices = regularNotices.slice(4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bell className="absolute top-20 left-10 w-6 h-6 text-orange-500/20 animate-pulse" />
        <Calendar className="absolute top-40 right-20 w-8 h-8 text-green-500/20 animate-bounce" style={{ animationDelay: '1s' }} />
        <FileText className="absolute bottom-40 left-20 w-7 h-7 text-orange-400/20 animate-pulse" style={{ animationDelay: '2s' }} />
        <Clock className="absolute bottom-20 right-40 w-5 h-5 text-green-400/20 animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-lg rounded-full px-6 py-3 mb-6">
            <Bell className="w-6 h-6 text-orange-400 animate-pulse" />
            <span className="text-lg font-medium">Smart India Hackathon 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
            📢 Notices & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest circulars, deadlines, and announcements for BTKIT Dwarahat's internal competition
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 transition-all"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all appearance-none cursor-pointer min-w-[180px]"
                >
                  <option value="All">All Categories</option>
                  <option value="Registration">Registration</option>
                  <option value="General Info">General Info</option>
                  <option value="Results">Results</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Notices Section */}
          <div className="lg:col-span-3 space-y-8">
            {/* Pinned Notices */}
            {pinnedNotices.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Pin className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold">Pinned Notices</h2>
                </div>
                <div className="space-y-6">
                  {pinnedNotices.map((notice) => (
                    <NoticeCard
                      key={notice.id}
                      notice={notice}
                      isExpanded={expandedCards.has(notice.id)}
                      onToggleExpand={() => toggleExpand(notice.id)}
                      formatDate={formatDate}
                      getTypeIcon={getTypeIcon}
                      isPinned={true}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Recent Notices */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Recent Updates</h2>
              </div>
              <div className="space-y-6">
                {recentNotices.map((notice) => (
                  <NoticeCard
                    key={notice.id}
                    notice={notice}
                    isExpanded={expandedCards.has(notice.id)}
                    onToggleExpand={() => toggleExpand(notice.id)}
                    formatDate={formatDate}
                    getTypeIcon={getTypeIcon}
                  />
                ))}
              </div>
            </section>

            {/* Archive Section */}
            {archivedNotices.length > 0 && (
              <section>
                <button
                  onClick={() => setShowArchive(!showArchive)}
                  className="flex items-center gap-3 mb-6 group hover:text-orange-400 transition-colors"
                >
                  <Archive className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Archive ({archivedNotices.length})</h2>
                  {showArchive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                
                {showArchive && (
                  <div className="space-y-6">
                    {archivedNotices.map((notice) => (
                      <NoticeCard
                        key={notice.id}
                        notice={notice}
                        isExpanded={expandedCards.has(notice.id)}
                        onToggleExpand={() => toggleExpand(notice.id)}
                        formatDate={formatDate}
                        getTypeIcon={getTypeIcon}
                        isArchived={true}
                      />
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Quick Links Sidebar */}
          <div className="lg:col-span-1">
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

// Notice Card Component
const NoticeCard = ({ notice, isExpanded, onToggleExpand, formatDate, getTypeIcon, isPinned = false, isArchived = false }) => {
  return (
    <div className={`
      backdrop-blur-lg bg-white/10 border rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden
      ${isPinned ? 'border-orange-400/50 shadow-orange-500/20' : 'border-white/20'}
      ${isArchived ? 'opacity-75' : ''}
      hover:scale-[1.02] hover:shadow-3xl hover:bg-white/15
    `}>
      {/* Glowing border for pinned notices */}
      {isPinned && (
        <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 animate-pulse" />
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {/* Date Badge */}
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {formatDate(notice.date)}
              </span>
              
              {/* New Badge */}
              {notice.isNew && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW
                </span>
              )}
              
              {/* Pinned Badge */}
              {isPinned && (
                <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Pin className="w-3 h-3" />
                  Pinned
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-white hover:text-orange-400 transition-colors cursor-pointer">
              {notice.title}
            </h3>
          </div>
          
          {/* Type Badge */}
          <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2">
            {getTypeIcon(notice.type)}
            <span className="text-sm text-gray-300">{notice.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {notice.description}
        </p>

        {/* Expanded Content */}
        {isExpanded && notice.fullContent && (
          <div className="bg-black/20 rounded-xl p-4 mb-4 border border-white/10">
            <p className="text-gray-200 leading-relaxed">
              {notice.fullContent}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Link */}
            {notice.link && (
              <a
                href={notice.link}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-green-600 transition-all transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                {notice.linkText || 'View'}
              </a>
            )}
          </div>
          
          {/* Expand/Collapse Button */}
          {notice.fullContent && (
            <button
              onClick={onToggleExpand}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Read More</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Quick Links Sidebar Component
const QuickLinks = () => {
  const quickLinks = [
    {
      title: 'Register Now',
      description: 'Join the competition',
      icon: <Users className="w-6 h-6" />,
      link: '#register',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Timeline',
      description: 'Event schedule',
      icon: <Calendar className="w-6 h-6" />,
      link: '#timeline',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Problem Statements',
      description: 'Download challenges',
      icon: <FileText className="w-6 h-6" />,
      link: '#problems',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Contact Us',
      description: 'Get help & support',
      icon: <Bell className="w-6 h-6" />,
      link: '#contact',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl sticky top-8">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="text-2xl">⚡</span>
        Quick Links
      </h3>
      
      <div className="space-y-4">
        {quickLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="block group"
          >
            <div className={`
              bg-gradient-to-r ${link.color} p-4 rounded-xl transform transition-all duration-300
              hover:scale-105 hover:shadow-2xl group-hover:shadow-lg
            `}>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-white">
                  {link.icon}
                </div>
                <h4 className="text-white font-semibold">{link.title}</h4>
              </div>
              <p className="text-white/80 text-sm">{link.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-8 pt-6 border-t border-white/20">
        <h4 className="font-semibold mb-4 text-gray-300">Hackathon Stats</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Total Notices:</span>
            <span className="font-semibold text-orange-400">{noticesData.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Days to Event:</span>
            <span className="font-semibold text-green-400">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Teams Registered:</span>
            <span className="font-semibold text-blue-400">45+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesPage;