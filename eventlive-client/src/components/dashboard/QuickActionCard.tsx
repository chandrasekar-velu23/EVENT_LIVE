import type { ComponentType, SVGProps } from "react";

type QuickActionCardProps = {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function QuickActionCard({
  label,
  Icon,
}: QuickActionCardProps) {
  return (
    <button className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
      <Icon className="h-4 w-4 text-brand" />
      {label}
    </button>
  );
}
