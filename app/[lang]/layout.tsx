import LanguageSwitcher from '../components/LanguageSwitcher'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }]
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body>
        <header>
          <nav>
            <LanguageSwitcher />
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}