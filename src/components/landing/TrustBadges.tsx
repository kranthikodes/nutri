import { Shield, Lock, Globe, FileCheck } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'HIPAA Compliant', sub: 'Health data protected' },
  { icon: Lock, label: 'SSL Encrypted', sub: '256-bit encryption' },
  { icon: Globe, label: 'GDPR Ready', sub: 'Privacy by design' },
  { icon: FileCheck, label: 'Evidence-Based', sub: 'Peer-reviewed research' },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-stone-100"
            >
              <div className="w-10 h-10 bg-sage-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-sage-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-800">{badge.label}</div>
                <div className="text-xs text-stone-500">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
