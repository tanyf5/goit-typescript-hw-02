type UrlsType = {
    [prop: string]: string;
  };
  
  export interface ImageInterface {
    id: string;
    alt_description: string;
    urls: UrlsType;
  }
  
  export interface DataInterface {
    results: any[];
    total: number;
    total_pages: number;
  }
  
  export interface ModalInterface {
    src: string;
    alt: string;
  }