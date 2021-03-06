//person interface, represent type of data that's going to be returning whenever we make those calls to backend, 
//because we are just techincally mirroring what an person looks like from the backend.
export interface Person
{
    id: number;
    firstname: string;
    lastname: string;
    location: string;
    email: string;
    imgURL: string;
}