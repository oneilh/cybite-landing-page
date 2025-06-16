import { Facebook, Github, Instagram, Tiktok, Whatsapp } from "./SocialLinks";
const SocialMedia = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
      <div className="flex space-x-4 mb-6">
        <Whatsapp />
        <Github />
        <Facebook />
        <Instagram />
        <Tiktok />
      </div>
      <p className="text-sm text-neutral">Follow us for updates</p>
    </div>
  );
};

export default SocialMedia;
