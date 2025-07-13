import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-light-background dark:bg-dark-background mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tentang Saya</h2>
          <p className="text-sm leading-relaxed">
            Saya adalah seorang desainer dan developer yang berfokus pada
            menciptakan pengalaman digital yang menarik dan fungsional.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Navigasi</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Beranda
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Proyek
              </a>
            </li>
            <li>
              <a href="mailto:you@example.com" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Terhubung</h2>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Twitter />
            </a>
            <a
              href="mailto:you@example.com"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Alfinur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
