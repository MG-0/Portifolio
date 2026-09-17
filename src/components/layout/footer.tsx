import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { 
  GithubIcon as Github, 
  LinkedinIcon as Linkedin,
  MediumIcon as Medium,
  WhatsappIcon as Whatsapp
} from "@/components/ui/icons";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}
          </p>
        </div>
        
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link href={siteConfig.github} target="_blank" className="hover:text-primary transition-colors" title="GitHub">
            <Github size={20} />
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" className="hover:text-primary transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </Link>
          <Link href={siteConfig.medium} target="_blank" className="hover:text-primary transition-colors" title="Medium">
            <Medium size={20} />
          </Link>
          <Link href={siteConfig.whatsapp} target="_blank" className="hover:text-emerald-500 transition-colors" title="WhatsApp">
            <Whatsapp size={20} />
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors" title="Email">
            <Mail size={20} />
          </Link>
        </div>

        <div className="text-sm font-medium text-muted-foreground">
          Designed & Developed by <span className="text-primary font-bold">{siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}

