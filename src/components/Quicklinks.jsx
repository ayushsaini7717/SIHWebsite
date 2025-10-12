import {
  Calendar, Users
} from 'lucide-react';
import { noticesData } from '../constant';
const QuickLinks = () => {
  const quickLinks = [
    { title: 'Register Now', description: 'Join the competition', icon: <Users />, link: 'https://forms.gle/gZa89ebiPEFsMr4H6', color: 'bg-green-600 hover:bg-green-700' },
    { title: 'Timeline', description: 'Event schedule', icon: <Calendar />, link: '/#timeline', color: 'bg-blue-600 hover:bg-blue-700' }
  ];

  return (
    <div className="bg-slate-800 border border-white/10 rounded-xl p-4 sm:p-6 shadow-md sticky top-6">
      <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2">⚡ Quick Links</h3>
      <div className="space-y-4">
        {quickLinks.map((l, i) => (
          <a key={i} href={l.link} className="block group">
            <div className={`${l.color} p-4 rounded-xl transition-all`}>
              <div className="flex items-center gap-3 mb-2 text-white">
                {l.icon}
                <h4 className="font-semibold">{l.title}</h4>
              </div>
              <p className="text-white/80 text-sm">{l.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-white/10">
        <h4 className="font-semibold mb-3">Hackathon Stats</h4>
        <div className="flex justify-between text-sm mb-2"><span>Total Notices:</span><span className="text-green-400 font-semibold">{noticesData.length}</span></div>
        <div className="flex justify-between text-sm"><span>Teams Registered:</span><span className="text-blue-400 font-semibold">TBA</span></div>
      </div>
    </div>
  );
};

export default QuickLinks;