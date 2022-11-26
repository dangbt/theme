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

export interface Item {
  id: string;
  href: string;
  imageUrl: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
        url: string;
      };
    };
  };
}

export interface SliderInterface {
  id: string;
  item: Item[];
}

export interface Layout {
  data: {
    attributes: {
      header: HeaderInterface;
      footer: FooterInterface;
      slider: SliderInterface;
    };
  };
}
