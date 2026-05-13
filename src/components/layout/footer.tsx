import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { 
  GithubIcon as Github, 
  LinkedinIcon as Linkedin,
  FacebookIcon as Facebook,
  InstagramIcon as Instagram,
  YoutubeIcon as Youtube
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
          <Link href={siteConfig.github} target="_blank" className="hover:text-primary transition-colors">
            <Github size={20} />
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" className="hover:text-primary transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link href={siteConfig.facebook} target="_blank" className="hover:text-primary transition-colors">
            <Facebook size={20} />
          </Link>
          <Link href={siteConfig.instagram} target="_blank" className="hover:text-primary transition-colors">
            <Instagram size={20} />
          </Link>
          <Link href={siteConfig.youtube} target="_blank" className="hover:text-primary transition-colors">
            <Youtube size={20} />
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
            <Mail size={20} />
          </Link>
        </div>

        <div className="text-sm text-muted-foreground italic">
          By me
        </div>
      </div>
    </footer>
  );
}
