import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const baseUrl = "https://sydneyleakrepairspro.com.au";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Visual breadcrumb component
export function Breadcrumbs({ items }: BreadcrumbSchemaProps) {
  const location = useLocation();
  
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isActive = location.pathname === item.href;
            
            return (
              <li key={item.href} className="flex items-center gap-2">
                {!isLast ? (
                  <>
                    <Link
                      to={item.href}
                      className="hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                    <span className="text-border">/</span>
                  </>
                ) : (
                  <span className={isActive ? "text-foreground" : ""}>
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
