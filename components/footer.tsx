import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-muted-foreground">
            &copy; {currentYear} Sairam Venkatachalam. All rights reserved.
          </p>
          <div className="mt-2 text-sm text-muted-foreground">
            <span>Built with </span>
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </Link>
            <span> and </span>
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Tailwind CSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
