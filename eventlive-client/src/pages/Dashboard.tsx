import {
  CalendarDaysIcon,
  UsersIcon,
  VideoCameraIcon,
  ChartBarIcon,
  PlusIcon,
  ArrowUpIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Use reactive context

import StatCard from "../components/dashboard/StatCard";
import EventRow from "../components/dashboard/EventRow";
import QuickActionCard from "../components/dashboard/QuickActionCard";

export default function Dashboard() {
  const { user } = useAuth();

  // Safety Logic: Prevents dashboard crash if user object isn't fully loaded
  const firstName = user?.name ? user.name.split(" ")[0] : "Organizer";

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Header Section with Reactive Welcome */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark tracking-tight">Dashboard</h1>
          <p className="text-sm text-brand-muted">
            Welcome back, <span className="font-bold text-brand-primary">{firstName}!</span>
          </p>
        </div>

        <Link 
          to="/dashboard/create-event"
          className="btn-primary flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold shadow-lg shadow-brand-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <PlusIcon className="h-5 w-5 stroke-[2.5px]" />
          Create Event
        </Link>
      </div>

      {/* Stats Grid - Using Semantic Theme Tokens */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Events" value="24" helper="+3 this month" Icon={CalendarDaysIcon} />
        <StatCard label="Total Attendees" value="12,847" helper="+18% vs last month" Icon={UsersIcon} />
        <StatCard label="Live Now" value="2" helper="Active sessions" Icon={VideoCameraIcon} />
        <StatCard label="Engagement Rate" value="78%" helper="+5% improvement" Icon={ChartBarIcon} />
      </div>

      {/* Main Content: Split View */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Upcoming Events Panel */}
        <div className="card lg:col-span-2 p-6 ring-1 ring-brand-accent/5">
          <div className="mb-6 flex items-center justify-between border-b border-brand-accent/10 pb-4">
            <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
              Upcoming Events
              <span className="rounded-full bg-brand-surface px-2 py-0.5 text-[10px] font-black text-brand-primary uppercase">Live</span>
            </h2>
            <Link to="/dashboard/events" className="text-xs font-bold text-brand-primary hover:text-brand-muted transition-colors">
              View all
            </Link>
          </div>

          <div className="space-y-3">
            <EventRow title="Q1 Product Roadmap Review" time="Today, 2:00 PM" attendees={45} live />
            <EventRow title="Design System Workshop" time="Tomorrow, 10:00 AM" attendees={120} />
            <EventRow title="Customer Success Training" time="Jan 15, 3:00 PM" attendees={85} />
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="card p-6 bg-brand-surface/20 border-brand-accent/10">
          <h2 className="mb-6 text-lg font-bold text-brand-dark">Recent Activity</h2>

          <ul className="relative space-y-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-brand-accent/20">
            <li className="relative pl-8 text-sm text-brand-dark font-medium">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-primary shadow-sm" />
              New registration in Design System Workshop
            </li>
            <li className="relative pl-8 text-sm text-brand-muted">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-accent shadow-sm" />
              Poll completed in Q1 Product Review
            </li>
            <li className="relative pl-8 text-sm text-brand-muted">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-accent shadow-sm" />
              Event published: Customer Success Training
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Actions Footer */}
      <div className="pt-4">
        <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-brand-muted">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <QuickActionCard label="Create Event" Icon={PlusIcon} />
          <QuickActionCard label="Invite Attendees" Icon={UsersIcon} />
          <QuickActionCard label="View Analytics" Icon={ChartBarIcon} />
          <QuickActionCard label="Upload Resources" Icon={CalendarDaysIcon} />
        </div>
      </div>

    </div>
  );
}