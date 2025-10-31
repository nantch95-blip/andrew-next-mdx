import { ReactNode } from 'react';
export default function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border shadow-sm hover:shadow-md transition-shadow">{children}</div>;
}
export function CardHeader({ children }: { children: ReactNode }) { return <div className="p-5 border-b">{children}</div>; }
export function CardTitle({ children }: { children: ReactNode }) { return <h3 className="text-lg font-semibold">{children}</h3>; }
export function CardContent({ children }: { children: ReactNode }) { return <div className="p-5">{children}</div>; }
