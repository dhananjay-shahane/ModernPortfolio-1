import { Link } from "wouter";

const quotes = [
  { text: "In every walk with nature one receives far more than he seeks", author: "John Muir" },
  { text: "The journey of a thousand miles begins with one step", author: "Lao Tzu" }
];

const Footer = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="relative mt-auto border-t bg-background">
      <div className="container px-4 py-8">
        <div className="mb-8 text-center">
          <p className="text-xl italic text-muted-foreground">"{randomQuote.text}"</p>
          <p className="mt-2 text-sm font-medium">- {randomQuote.author}</p>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
        <div className="flex justify-center mb-8">
          <div className="space-x-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex justify-center">
            <img
              src="/indian-culture.png"
              alt="Indian Cultural Art"
              className="h-32 w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;