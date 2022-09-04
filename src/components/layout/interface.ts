interface Link {
  text: string;
  href: string;
}

export interface HeaderInterface {
  logo: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
  links: (Link & { child?: Link[] })[];
}

interface Icon {
  link: string;
  href: string;
}

interface Box {
  text: string;
  description?: string;
  links?: Link[];
  icon?: Icon[];
}

export interface FooterInterface {
  address: string;
  email: string;
  phone: string;
  logo: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
  box: Box[];
}
