import React, { useState, useEffect } from 'react';
import QuickLinks from './Quicklinks';
import {
  Search, Calendar, Bell, Archive, ExternalLink, ChevronDown, ChevronUp, Filter,
  Pin, Clock, Users, Info, Trophy, FileText
} from 'lucide-react';

import { noticesData } from '../constant';

const NoticesPage = () => {
  const [notices, setNotices] = useState(noticesData);
  const [filteredNotices, setFilteredNotices] = useState(noticesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [showArchive, setShowArchive] = useState(false);

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
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Registration': return <Users className="w-4 h-4" />;
      case 'General Info': return <Info className="w-4 h-4" />;
      case 'Results': return <Trophy className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const pinnedNotices = filteredNotices.filter(n => n.isPinned);
  const regularNotices = filteredNotices.filter(n => !n.isPinned);
  const recentNotices = regularNotices.slice(0, 4);
  const archivedNotices = regularNotices.slice(4);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-slate-900 to-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bell className="absolute top-20 left-4 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 text-green-400/20 animate-pulse" />
        <Calendar className="absolute top-40 right-8 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 text-blue-400/20 animate-bounce" />
        <FileText className="absolute bottom-40 left-8 sm:left-20 w-5 h-5 sm:w-7 sm:h-7 text-green-400/20 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            📢 Notices & Updates
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Stay informed with the latest circulars, deadlines, and announcements for BTKIT Dwarahat
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 shadow-lg mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>
            <div className="relative md:w-60">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full pl-12 pr-8 py-3 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base appearance-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Registration">Registration</option>
                <option value="General Info">General Info</option>
                <option value="Results">Results</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            {pinnedNotices.length > 0 && (
              <Section title="Pinned Notices" icon={<Pin className="text-green-400" />}>
                {pinnedNotices.map(notice => (
                  <NoticeCard
                    key={notice.id}
                    notice={notice}
                    isExpanded={expandedCards.has(notice.id)}
                    onToggleExpand={() => toggleExpand(notice.id)}
                    formatDate={formatDate}
                    getTypeIcon={getTypeIcon}
                    isPinned
                  />
                ))}
              </Section>
            )}

            <Section title="Recent Updates" icon={<Clock className="text-green-400" />}>
              {recentNotices.map(notice => (
                <NoticeCard
                  key={notice.id}
                  notice={notice}
                  isExpanded={expandedCards.has(notice.id)}
                  onToggleExpand={() => toggleExpand(notice.id)}
                  formatDate={formatDate}
                  getTypeIcon={getTypeIcon}
                />
              ))}
            </Section>

            {archivedNotices.length > 0 && (
              <section>
                <button
                  onClick={() => setShowArchive(!showArchive)}
                  className="flex items-center gap-2 mb-6 hover:text-green-400 transition"
                >
                  <Archive />
                  <h2 className="text-2xl font-bold">Archive ({archivedNotices.length})</h2>
                  {showArchive ? <ChevronUp /> : <ChevronDown />}
                </button>
                {showArchive && (
                  <div className="space-y-6">
                    {archivedNotices.map(notice => (
                      <NoticeCard
                        key={notice.id}
                        notice={notice}
                        isExpanded={expandedCards.has(notice.id)}
                        onToggleExpand={() => toggleExpand(notice.id)}
                        formatDate={formatDate}
                        getTypeIcon={getTypeIcon}
                        isArchived
                      />
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, icon, children }) => (
  <section>
    <div className="flex items-center gap-2 mb-6">
      {icon}
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    </div>
    <div className="space-y-6">{children}</div>
  </section>
);

const NoticeCard = ({ notice, isExpanded, onToggleExpand, formatDate, getTypeIcon, isPinned = false, isArchived = false }) => (
  <div className={`bg-slate-800 border border-white/10 rounded-xl shadow-md hover:bg-slate-700 transition-all ${isPinned ? 'border-green-400/50' : ''} ${isArchived ? 'opacity-75' : ''}`}>
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">{formatDate(notice.date)}</span>
            {notice.isNew && <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold animate-pulse">NEW</span>}
            {isPinned && <span className="bg-green-400/20 text-green-400 px-2 py-1 rounded-lg text-xs flex items-center gap-1"><Pin className="w-3 h-3" />Pinned</span>}
          </div>
          <h3 className="text-lg sm:text-xl font-bold">{notice.title}</h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-2">
          {getTypeIcon(notice.type)}
          <span className="text-sm">{notice.type}</span>
        </div>
      </div>
      <p className="text-gray-300 mb-4 text-sm sm:text-base">{notice.description}</p>
      {isExpanded && notice.fullContent && (
        <div className="bg-slate-700 p-4 rounded-lg border border-white/10 mb-4">
          <p className="text-gray-200 text-sm sm:text-base whitespace-pre-line">{notice.fullContent}</p>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        {notice.link && (
          <a href={notice.link} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base">
            <ExternalLink className="w-4 h-4" /> {notice.linkText || 'View'}
          </a>
        )}
        {notice.fullContent && (
          <button onClick={onToggleExpand} className="flex items-center gap-1 text-gray-400 hover:text-white text-sm sm:text-base self-end sm:self-auto">
            {isExpanded ? <>Show Less <ChevronUp className="w-4 h-4" /></> : <>Read More <ChevronDown className="w-4 h-4" /></>}
          </button>
        )}
      </div>
    </div>
  </div>
);



export default NoticesPage;
