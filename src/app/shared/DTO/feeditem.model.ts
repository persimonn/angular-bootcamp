export class FeedItem {
   id: number;
   form: string; 
   comments: {
       count: number
   };
   caption: string;
   user: {
       username: string
   };
   createdAt: number
}