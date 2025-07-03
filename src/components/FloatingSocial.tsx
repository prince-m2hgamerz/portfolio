import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const FloatingSocial: React.FC = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:arjun.dev@example.com',
      label: 'Email',
      color: 'hover:bg-red-500'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: 'tel:+919876543210',
      label: 'Phone',
      color: 'hover:bg-green-500'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/arjun-kumar',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/arjun-kumar',
      label: 'GitHub',
      color: 'hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-900'
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-white ${social.color}`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSocial;