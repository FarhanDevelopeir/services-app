import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { Mail, MapPin, Phone } from "lucide-react";
import services from "../data/services";
import site from "../data/site";

const scrollLinkProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    {...scrollLinkProps}
    className="block mb-3 text-textColor/70 hover:text-yellowTextColor transition-colors duration-300 cursor-pointer"
  >
    {children}
  </Link>
);

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="Contact"
      className="w-[90%] m-auto border-t border-border_color text-textColor"
    >
      <div className="py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-yellowTextColor mb-4">
              {site.brandName}
            </h3>
            <p className="text-sm leading-relaxed text-textColor/70 max-w-sm">
              {site.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <FooterLink to="Services">{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="Services">Services</FooterLink>
            <FooterLink to="Portfolio">Portfolio</FooterLink>
            <FooterLink to="Blogs">Blogs</FooterLink>
            <FooterLink to="Contact">Contact</FooterLink>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-textColor/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-yellowTextColor" />
                <span>{site.contact.location}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-yellowTextColor" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-textColor/70 hover:text-yellowTextColor transition-colors duration-300"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-yellowTextColor" />
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="text-textColor/70 hover:text-yellowTextColor transition-colors duration-300"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border_color py-6 text-center text-sm text-textColor/60">
        <span>© {currentYear} {site.brandName}. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
