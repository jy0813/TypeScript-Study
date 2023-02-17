type PageInfo = {
    title:string;
};

type Page = 'home' | 'about' | 'contact';

const nav:Record<Page, PageInfo> = {
    home:{title:'Home'},
    about:{title:'about'},
    contact:{title:'Contact'}
}
