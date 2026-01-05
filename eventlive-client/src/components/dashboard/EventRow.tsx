import { VideoCameraIcon } from "@heroicons/react/24/outline";

type EventRowProps = {
  title: string;
  time: string;
  attendees: number;
  live?: boolean;
};

export default function EventRow({
  title,
  time,
  attendees,
  live,
}: EventRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10">
          <VideoCameraIcon className="h-4 w-4 text-brand" />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900">
            {title}
            {live && (
              <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-600">
                LIVE
              </span>
            )}
          </p>
          <p className="text-xs text-gray-500">
            {time} · {attendees} registered
          </p>
        </div>
      </div>

      <button className="rounded-md bg-brand px-3 py-1.5 text-xs font-medium text-white">
        {live ? "Join Now" : "View"}
      </button>
    </div>
  );
}
