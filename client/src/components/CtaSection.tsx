import { Button } from "@/components/ui/button";
import { Link } from "wouter";
const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative border-4 border-black rounded-none bg-card overflow-hidden p-8 md:p-12" style={{boxShadow: '8px 8px 0 rgba(0,0,0,0.8)'}}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to bring your ideas to life?
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm available for freelance projects and full-time
                opportunities. Let's work together to create something amazing.
              </p>
            </div>
            <Button size="lg" className="min-w-[150px]" asChild>
              <Link href="/contact">
                <span>Get in Touch</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
