type Video = {
    title: string;
    author:string;
    description:string;
}

type Optional<T> = {
    [P in keyof T]?: T[P]; // for..in
}

type ReadOnly<T> = {
    readonly [P in keyof T]:T[P];
}

type VideoOptional = Optional<Video>;

type Animal = {
    name:string;
    age:number;
}

const videoOp:VideoOptional = {
    title:'hi',
}

const animalOp:Optional<Animal> = {
    name:'dog'
}

const video:ReadOnly<Video> = {
    title:'hi',
    author:'me',
    description:'gg'
};

type Nullable<T> = {
    [P in keyof T]:T[P] | null
}

type Proxy<T> = {
    get():T;
    set(value:T): void;
}

type Proxify<T> = {
    [P in keyof T]:Proxy<T[P]>
}



// type VideoOptional = {
//     title?:string;
//     author?:string;
//     description?:string;
// }
//
// type VideoReadOnly = {
//     readonly title: string;
//     readonly author:string;
//     readonly description:string;
// }