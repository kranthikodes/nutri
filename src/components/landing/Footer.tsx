import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Nutri<span className="text-sage-400">AI</span>
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-xs text-stone-500 text-center">
          <p className="mb-2">
            <strong>Disclaimer:</strong> NutriAI provides AI-generated nutritional guidance for
            informational purposes only. It is not a substitute for professional medical advice,
            diagnosis, or treatment. Always consult with a qualified healthcare provider before
            making dietary changes, especially if you have existing medical conditions.
          </p>
          <p>&copy; {new Date().getFullYear()} NutriAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
