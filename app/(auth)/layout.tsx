import Image from 'next/image'
import Header from '../../components/ui/header'
import Illustration from '../../public/images/auth-illustration.svg'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
      <Header nav={false} />
      <main className="grow">
        <section className="relative min-h-[calc(100vh-64px)]">
          {/* Illustration */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <Image 
              src={Illustration}
              width={1440}
              height={800}
              className="max-w-none"
              priority
              alt=""
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 py-8">
            {children}
          </div>
        </section>
      </main>
    </>
  )
}