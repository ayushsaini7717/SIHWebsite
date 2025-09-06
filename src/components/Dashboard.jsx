import React, { useState, useEffect } from 'react';
import { Search, Calendar, Bell, Archive, ExternalLink, ChevronDown, ChevronUp, Filter, Pin, Clock, Users, Info, Trophy, FileText } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

// Mock notices data
const noticesData = [
  {
    id: 1,
    title: "Hackathon Registration",
    date: "2025-09-5",
    type: "Registration",
    isPinned: true,
    isNew: true,
    description: "Hackathon registration is now open. Teams must finalize members before submitting.",
    fullContent: "We are excited to announce that hackathon registration is officially open! Teams are required to complete the registration form by the deadline. Please ensure that all team members' details are correctly filled in before submission. Late registrations will not be accepted.",
    link: "/registration notice.jpeg",
    linkText: "View"
  },
  {
    id: 2,
    title: "Problem Statements Released",
    date: "2025-08-25",
    type: "General Info",
    isPinned: false,
    isNew: false,
    description: "All problem statements are now available. Teams can start brainstorming and select one problem to work on.",
    fullContent: "The complete list of problem statements covering various domains like Healthcare, Education, Agriculture, Transportation & Logistics, and Renewable / Sustainable Energy has been released. Each problem statement includes detailed requirements, expected deliverables, and evaluation criteria. Teams are encouraged to carefully study all problems and choose one statement, as per the SIH guidelines, that they will solve during the hackathon. Final selection must be confirmed during the registration process.",
    link: "https://www.sih.gov.in/sih2025PS",
    linkText: "View"
  },
   {
    id: 3,
    title: "Eligibility Criteria",
    date: "2025-09-05",
    type: "General Info",
    isPinned: false,
    isNew: false,
    description: "Guidelines on who can participate in the hackathon.",
    fullContent: "To participate in the hackathon, each team must strictly follow the eligibility rules: \n\n1. Each team must have exactly 6 members.\n2. At least 1 female member is mandatory.\n3. All members must be current BTKIT students.\n4. Interdisciplinary teams (students from different branches) are encouraged.\n5. Each student can participate in only one team.",
  },

  {
    "id": 4,
    "title": "Venue Confirmation",
    "date": "2025-09-06",
    "type": "General Info",
    "isPinned": false,
    "isNew": false,
    "description": "Final venue confirmed: CSE Smart Classroom.",
    "fullContent": "All sessions and activities will be held in the CSE Smart Classroom.",
},

  {
    id: 5,
    title: "Result Announced",
    date: "2025-09-05",
    type: "Results",
    isPinned: false,
    isNew: false,
    description: "To be announced soon!",
  },
  {
    id: 6,
    title: "SIH Guidelines",
    date: "2025-09-05",
    type: "Guidelines",
    isPinned: true,
    isNew: true,
    description: "Official Smart India Hackathon guidelines are available for reference.",
    fullContent: "Participants are advised to carefully read the official Smart India Hackathon (SIH) guidelines before proceeding. The document includes SPOC Registration, Internal Hackathon, Team Formation and Registration, Team Nomination Process, Idea Submission Process, General Guideline and Contact Details. Familiarity with these guidelines is mandatory for all registered teams to ensure compliance throughout the hackathon.",
    link: "/SIH Guidelines.pdf",
    linkText: "View Guidelines"
},
{
  id: 7,
  title: "Idea Presentation Format",
  date: "2025-09-05",
  type: "Guidelines",
  isPinned: true,
  isNew: true,
  description: "Official template for submitting ideas in Smart India Hackathon.",
  fullContent: "All teams must prepare their idea submissions strictly according to the prescribed Smart India Hackathon (SIH) format. The document provides a standardized template for presenting the problem statement, team details, proposed solution, technical approach, and expected outcomes. Following this format is mandatory to ensure fair and consistent evaluation by the judges.",
  link: "/SIH Idea Format.pptx",
  linkText: "Download Format"
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
        <Bell className="absolute top-20 left-4 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 text-orange-500/20 animate-pulse" />
        <Calendar className="absolute top-40 right-8 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 text-green-500/20 animate-bounce" style={{ animationDelay: '1s' }} />
        <FileText className="absolute bottom-40 left-8 sm:left-20 w-5 h-5 sm:w-7 sm:h-7 text-orange-400/20 animate-pulse" style={{ animationDelay: '2s' }} />
        <Clock className="absolute bottom-20 right-16 sm:right-40 w-4 h-4 sm:w-5 sm:h-5 text-green-400/20 animate-bounce" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 animate-pulse" />
            <span className="text-sm sm:text-lg font-medium">Smart India Hackathon 2025</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent px-2">
            📢 Notices & Updates
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Stay informed with the latest circulars, deadlines, and announcements for BTKIT Dwarahat's internal competition
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 transition-all text-sm sm:text-base"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full sm:w-auto pl-12 pr-8 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all appearance-none cursor-pointer text-sm sm:text-base sm:min-w-[180px]"
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
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Notices Section */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Pinned Notices */}
            {pinnedNotices.length > 0 && (
              <section>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Pin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  <h2 className="text-xl sm:text-2xl font-bold">Pinned Notices</h2>
                </div>
                <div className="space-y-4 sm:space-y-6">
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
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <h2 className="text-xl sm:text-2xl font-bold">Recent Updates</h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
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
                  className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group hover:text-orange-400 transition-colors"
                >
                  <Archive className="w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-xl sm:text-2xl font-bold">Archive ({archivedNotices.length})</h2>
                  {showArchive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                
                {showArchive && (
                  <div className="space-y-4 sm:space-y-6">
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
      hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-3xl hover:bg-white/15
    `}>
      {/* Glowing border for pinned notices */}
      {isPinned && (
        <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 animate-pulse" />
      )}
      
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              {/* Date Badge */}
              <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
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
            
            <h3 className="text-lg sm:text-xl font-bold text-white hover:text-orange-400 transition-colors cursor-pointer leading-tight">
              {notice.title}
            </h3>
          </div>
          
          {/* Type Badge */}
          <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2 self-start">
            {getTypeIcon(notice.type)}
            <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">{notice.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
          {notice.description}
        </p>

        {/* Expanded Content */}
        {isExpanded && notice.fullContent && (
          <div className="bg-black/20 rounded-xl p-3 sm:p-4 mb-4 border border-white/10">
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {notice.fullContent}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Link */}
            {notice.link && (
              <a
                href={notice.link}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-orange-600 hover:to-green-600 transition-all transform hover:scale-105 text-sm sm:text-base"
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
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base self-end sm:self-auto"
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
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: 'https://forms.gle/PncEov3mr4jTDieR9',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Timeline',
      description: 'Event schedule',
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: '/#timeline',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Problem Statements',
      description: 'Download challenges',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: 'https://www.sih.gov.in/sih2025PS',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl sticky top-4 sm:top-8">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-xl sm:text-2xl">⚡</span>
        Quick Links
      </h3>
      
      <div className="space-y-3 sm:space-y-4">
        {quickLinks.map((link, index) => (
          <HashLink
            smooth to={link.link}
            key={index}
            href={link.link}
            className="block group"
          >
            <div className={`
              bg-gradient-to-r ${link.color} p-3 sm:p-4 rounded-xl transform transition-all duration-300
              hover:scale-105 hover:shadow-2xl group-hover:shadow-lg
            `}>
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="text-white">
                  {link.icon}
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{link.title}</h4>
              </div>
              <p className="text-white/80 text-xs sm:text-sm">{link.description}</p>
            </div>
          </HashLink>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
        <h4 className="font-semibold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">Hackathon Stats</h4>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-400">Total Notices:</span>
            <span className="font-semibold text-orange-400">{noticesData.length}</span>
          </div>
         
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-sm sm:text-base">
            <span className="text-gray-400">Teams Registered:</span>
            <span className="font-semibold text-blue-400 text-xs sm:text-sm">To be announced soon!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesPage;