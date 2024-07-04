export interface Post {
    /* 
    id	1
    name	"Earth (C-137)"
    type	"Planet"
    dimension	"Dimension C-137"
    residents	
    */
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
export interface Post2 {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
}