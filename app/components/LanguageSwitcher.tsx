'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLang = pathname?.split('/')[1] || 'en' // Add default value 'en'

  return (
    <div className="flex gap-4">
      <Link 
        href={`/en${pathname?.substring(3)}`} 
        className={`${currentLang === 'en' ? 'font-bold' : ''} hover:text-gray-600`}
      >
        English
      </Link>
      <Link 
        href={`/zh${pathname?.substring(3)}`} 
        className={`${currentLang === 'zh' ? 'font-bold' : ''} hover:text-gray-600`}
      >
        中文
      </Link>
    </div>
  )
}